import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { PrismaClient, BloodRequestStatus, DonationPledgeStatus, Role } from './generated/prisma/index.js';
import type { User } from './generated/prisma/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Extend the Request interface to include the user property
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: Role;
      };
    }
  }
}

dotenv.config();

// Initialize Firebase Admin SDK
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serviceAccountPath = path.resolve(__dirname, '../firebase-adminsdk.json');

try {
  const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  console.log('✅ Firebase Admin SDK initialized successfully.');
} catch (error) {
  console.error('❌ Error initializing Firebase Admin SDK:', error);

  // process.exit(1); // Don't exit, just log error
}


const app = express();
app.use(cors());
app.use(express.json());

// Simple request logger
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('❌ JWT_SECRET must be set in production environment');
  }
  console.warn('⚠️ JWT_SECRET not set, using default for development only.');
}
const ACTUAL_JWT_SECRET = JWT_SECRET || 'supersecretjwtkey';


// Middleware for JWT authentication
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, ACTUAL_JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};


// User Registration
app.post(
  '/api/auth/register',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('bloodType').isIn(['APOS', 'ANEG', 'BPOS', 'BNEG', 'ABPOS', 'ABNEG', 'OPOS', 'ONEG']).withMessage('Invalid blood type'),
    body('isDonor').isBoolean().optional(),
    body('isRecipient').isBoolean().optional(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, firstName, lastName, bloodType, isDonor, isRecipient, latitude, longitude, contactNumber, medicalHistory } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          passwordHash: hashedPassword,
          firstName,
          lastName,
          bloodType,
          isDonor: isDonor || false,
          isRecipient: isRecipient || false,
          latitude,
          longitude,
          contactNumber,
          medicalHistory,
        },
      });
      res.status(201).json({ message: 'User registered successfully', userId: user.id });
    } catch (error: any) {
      if (error.code === 'P2002') {
        return res.status(409).json({ error: 'Email already registered' });
      }
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
);

// User Login
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, ACTUAL_JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, userId: user.id, role: user.role });
});


// Get User Profile
app.get('/api/users/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'User ID is required' });
  if (!req.user || (req.user.userId !== id && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      bloodType: true,
      isDonor: true,
      isRecipient: true,
      latitude: true,
      longitude: true,
      contactNumber: true,
      lastDonationDate: true,
      medicalHistory: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// Update User Profile
app.put('/api/users/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'User ID is required' });
  if (!req.user || (req.user.userId !== id && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }
  const { firstName, lastName, bloodType, isDonor, isRecipient, latitude, longitude, contactNumber, lastDonationDate, medicalHistory } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        firstName,
        lastName,
        bloodType,
        isDonor,
        isRecipient,
        latitude,
        longitude,
        contactNumber,
        lastDonationDate,
        medicalHistory,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        bloodType: true,
        isDonor: true,
        isRecipient: true,
        latitude: true,
        longitude: true,
        contactNumber: true,
        lastDonationDate: true,
        medicalHistory: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update user' });
  }
});

// Delete User Account
app.delete('/api/users/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'User ID is required' });
  if (!req.user || (req.user.userId !== id && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }
  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete user' });
  }
});

// Get all donors
app.get('/api/users/donors', authenticateToken, async (_req: Request, res: Response) => {
  const donors = await prisma.user.findMany({
    where: { isDonor: true },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      bloodType: true,
      latitude: true,
      longitude: true,
      contactNumber: true,
      lastDonationDate: true,
    },
  });
  res.json(donors);
});

// Get all recipients
app.get('/api/users/recipients', authenticateToken, async (_req: Request, res: Response) => {
  const recipients = await prisma.user.findMany({
    where: { isRecipient: true },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      bloodType: true,
      latitude: true,
      longitude: true,
      contactNumber: true,
    },
  });
  res.json(recipients);
});

// Create a new blood request
app.post(
  '/api/requests',
  authenticateToken,
  [
    body('bloodType').isIn(['APOS', 'ANEG', 'BPOS', 'BNEG', 'ABPOS', 'ABNEG', 'OPOS', 'ONEG']).withMessage('Invalid blood type'),
    body('unitsRequired').isInt({ min: 1 }).withMessage('Units required must be a positive integer'),
    body('urgency').isIn(['LOW', 'MEDIUM', 'HIGH']).withMessage('Invalid urgency level'),
    body('latitude').isFloat().withMessage('Invalid latitude'),
    body('longitude').isFloat().withMessage('Invalid longitude'),
  ],
  async (req: Request, res: Response) => {
    if (!req.user) return res.sendStatus(401); // Ensure user is authenticated
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bloodType, unitsRequired, urgency, latitude, longitude, notes } = req.body;
    try {
      // Find the nearest hospital based on GPS coordinates
      const hospitals = await prisma.hospital.findMany();
      if (hospitals.length === 0) {
        return res.status(400).json({ error: 'No hospitals found in the database. Please contact admin.' });
      }

      let nearestHospital = hospitals[0]!;
      let minDistance = getDistanceFromLatLonInKm(latitude, longitude, hospitals[0]!.latitude, hospitals[0]!.longitude);

      for (let i = 1; i < hospitals.length; i++) {
        const hospital = hospitals[i]!;
        const distance = getDistanceFromLatLonInKm(latitude, longitude, hospital.latitude, hospital.longitude);
        if (distance < minDistance) {
          minDistance = distance;
          nearestHospital = hospital;
        }
      }

      const bloodRequest = await prisma.bloodRequest.create({
        data: {
          hospitalId: nearestHospital.id,
          requesterId: req.user.userId,
          bloodType,
          unitsRequired,
          urgency,
          latitude,
          longitude,
          notes,
        },
      });
      res.status(201).json(bloodRequest);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create blood request' });
    }

  }
);

// Get all blood requests
// Endpoint to update user's device token
app.put('/api/users/:id/device-token', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'User ID is required' });
  if (!req.user || req.user.userId !== id) {
    return res.sendStatus(403);
  }
  const { deviceToken } = req.body;
  try {
    await prisma.user.update({
      where: { id },
      data: { deviceToken },
    });
    res.json({ message: 'Device token updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update device token' });
  }
});

app.get('/api/requests', authenticateToken, async (req: Request, res: Response) => {
  const { status, bloodType, requesterId } = req.query;
  const where: any = {};
  if (status) where.status = status;
  if (bloodType) where.bloodType = bloodType;
  if (requesterId) where.requesterId = requesterId;

  const requests = await prisma.bloodRequest.findMany({
    where,
    include: {
      requester: { select: { id: true, firstName: true, lastName: true, contactNumber: true } },
      hospital: { select: { id: true, name: true, address: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
  res.json(requests);
});

// Get a specific blood request
app.get('/api/requests/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Request ID is required' });
  const request = await prisma.bloodRequest.findUnique({
    where: { id },
    include: {
      requester: { select: { id: true, firstName: true, lastName: true, contactNumber: true } },
      hospital: { select: { id: true, name: true, address: true } },
    },
  });
  if (!request) return res.status(404).json({ error: 'Blood request not found' });
  res.json(request);
});

// Update a blood request
app.put('/api/requests/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Request ID is required' });
  const { status, unitsRequired, urgency, notes } = req.body;

  const existingRequest = await prisma.bloodRequest.findUnique({ where: { id } });
  if (!existingRequest) return res.status(404).json({ error: 'Blood request not found' });
  if (!req.user || (existingRequest.requesterId !== req.user.userId && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }

  try {
    const updatedRequest = await prisma.bloodRequest.update({
      where: { id },
      data: {
        status: status as BloodRequestStatus,
        unitsRequired,
        urgency,
        notes,
      },
    });
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update blood request' });
  }
});

// Delete a blood request
app.delete('/api/requests/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Request ID is required' });

  const existingRequest = await prisma.bloodRequest.findUnique({ where: { id } });
  if (!existingRequest) return res.status(404).json({ error: 'Blood request not found' });
  if (!req.user || (existingRequest.requesterId !== req.user.userId && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }

  try {
    await prisma.bloodRequest.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete blood request' });
  }
});

// Get nearby blood requests (simplified for now, actual implementation would use geospatial queries)
app.get('/api/requests/nearby', authenticateToken, async (req: Request, res: Response) => {
  const { latitude, longitude, radius = 50 } = req.query; // radius in km
  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  // This is a simplified example. A real-world scenario would involve
  // geospatial indexing and queries (e.g., PostGIS with PostgreSQL).
  // For SQLite, we'll fetch all and filter in-memory (not scalable for large datasets).
  const allRequests = await prisma.bloodRequest.findMany({
    where: { status: BloodRequestStatus.PENDING },
    include: {
      requester: { select: { id: true, firstName: true, lastName: true, contactNumber: true } },
      hospital: { select: { id: true, name: true, address: true } },
    },
  });

  const nearbyRequests = allRequests.filter(request => {
    const distance = getDistanceFromLatLonInKm(
      parseFloat(latitude as string),
      parseFloat(longitude as string),
      request.latitude,
      request.longitude
    );
    return distance <= parseFloat(radius as string);
  });

  res.json(nearbyRequests);
});

// Helper function to calculate distance between two points on Earth (Haversine formula)
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

// Create a new donation pledge
app.post(
  '/api/donation-pledges',
  authenticateToken,
  [
    body('bloodRequestId').notEmpty().withMessage('Blood Request ID is required'),
  ],
  async (req: Request, res: Response) => {
    if (!req.user) return res.sendStatus(401);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bloodRequestId } = req.body;
    try {
      const donationPledge = await prisma.donationPledge.create({
        data: {
          bloodRequestId,
          userId: req.user.userId,
          status: DonationPledgeStatus.PENDING,
        },
      });
      res.status(201).json(donationPledge);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create donation pledge' });
    }
  }
);

// Get all donation pledges
app.get('/api/donation-pledges', authenticateToken, async (req: Request, res: Response) => {
  const { userId, bloodRequestId, status } = req.query;
  const where: any = {};
  if (userId) where.userId = userId;
  if (bloodRequestId) where.bloodRequestId = bloodRequestId;
  if (status) where.status = status;

  const donationPledges = await prisma.donationPledge.findMany({
    where,
    include: {
      user: { select: { id: true, firstName: true, lastName: true, contactNumber: true } },
      bloodRequest: { select: { id: true, bloodType: true, unitsRequired: true, hospital: { select: { name: true } } } },
    },
    orderBy: { pledgedAt: 'desc' },
  });
  res.json(donationPledges);
});

// Get a specific donation pledge
app.get('/api/donation-pledges/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Donation Pledge ID is required' });
  const donationPledge = await prisma.donationPledge.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, firstName: true, lastName: true, contactNumber: true } },
      bloodRequest: { select: { id: true, bloodType: true, unitsRequired: true, hospital: { select: { name: true } } } },
    },
  });
  if (!donationPledge) return res.status(404).json({ error: 'Donation pledge not found' });
  res.json(donationPledge);
});

// Update a donation pledge
app.put('/api/donation-pledges/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Donation Pledge ID is required' });
  const { status } = req.body;

  const existingPledge = await prisma.donationPledge.findUnique({ where: { id } });
  if (!existingPledge) return res.status(404).json({ error: 'Donation pledge not found' });
  if (!req.user || (existingPledge.userId !== req.user.userId && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }

  try {
    const updatedPledge = await prisma.donationPledge.update({
      where: { id },
      data: {
        status: status as DonationPledgeStatus,
      },
    });
    res.json(updatedPledge);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update donation pledge' });
  }
});

// Delete a donation pledge
app.delete('/api/donation-pledges/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Donation Pledge ID is required' });

  const existingPledge = await prisma.donationPledge.findUnique({ where: { id } });
  if (!existingPledge) return res.status(404).json({ error: 'Donation pledge not found' });
  if (!req.user || (existingPledge.userId !== req.user.userId && req.user.role !== Role.ADMIN)) {
    return res.sendStatus(403);
  }

  try {
    await prisma.donationPledge.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete donation pledge' });
  }
});

// Admin: Create Hospital
app.post(
  '/api/admin/hospitals',
  authenticateToken,
  [
    body('name').notEmpty().withMessage('Hospital name is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('latitude').isFloat().withMessage('Invalid latitude'),
    body('longitude').isFloat().withMessage('Invalid longitude'),
  ],
  async (req: Request, res: Response) => {
    if (!req.user || req.user.role !== Role.ADMIN) {
      return res.sendStatus(403);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, address, latitude, longitude, contactInfo } = req.body;
    try {
      const hospital = await prisma.hospital.create({
        data: {
          name,
          address,
          latitude,
          longitude,
          contactInfo,
        },
      });
      res.status(201).json(hospital);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create hospital' });
    }
  }
);

// Admin: Get all Hospitals
app.get('/api/admin/hospitals', authenticateToken, async (req: Request, res: Response) => {
  if (!req.user || req.user.role !== Role.ADMIN) {
    return res.sendStatus(403);
  }
  const hospitals = await prisma.hospital.findMany({
    orderBy: { name: 'asc' },
  });
  res.json(hospitals);
});

// Admin: Create Blood Request (from hospital)
app.post(
  '/api/admin/requests',
  authenticateToken,
  [
    body('hospitalId').notEmpty().withMessage('Hospital ID is required'),
    body('bloodType').isIn(['APOS', 'ANEG', 'BPOS', 'BNEG', 'ABPOS', 'ABNEG', 'OPOS', 'ONEG']).withMessage('Invalid blood type'),
    body('unitsRequired').isInt({ min: 1 }).withMessage('Units required must be a positive integer'),
    body('urgency').isIn(['LOW', 'MEDIUM', 'HIGH']).withMessage('Invalid urgency level'),
    body('latitude').isFloat().withMessage('Invalid latitude'),
    body('longitude').isFloat().withMessage('Invalid longitude'),
  ],
  async (req: Request, res: Response) => {
    if (!req.user || req.user.role !== Role.ADMIN) {
      return res.sendStatus(403);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { hospitalId, bloodType, unitsRequired, urgency, latitude, longitude, notes } = req.body;
    try {
      const bloodRequest = await prisma.bloodRequest.create({
        data: {
          hospitalId,
          bloodType,
          unitsRequired,
          urgency,
          latitude,
          longitude,
          notes,
        },
      });

      // Implement notification sending logic here
      // Find nearby donors and send notifications
      const nearbyDonors = await prisma.user.findMany({
        where: {
          isDonor: true,
          bloodType: bloodRequest.bloodType, // Match blood type
          // Add more sophisticated geospatial query here if needed
        },
        select: {
          id: true,
          deviceToken: true,
          latitude: true,
          longitude: true,
        },
      });

      const notificationPromises = nearbyDonors.map(async (donor) => {
        if (donor.deviceToken) {
          const distance = getDistanceFromLatLonInKm(
            bloodRequest.latitude,
            bloodRequest.longitude,
            donor.latitude || 0, // Default to 0 if null, though schema makes it non-nullable
            donor.longitude || 0, // Default to 0 if null, though schema makes it non-nullable
          );

          // Only send to donors within a certain radius (e.g., 50 km initially)
          if (distance <= 50) {
            const message = {
              notification: {
                title: 'New Blood Request!',
                body: `A ${bloodRequest.bloodType} blood donation is urgently needed at ${bloodRequest.hospitalId} (${Math.round(distance)} km away).`,
              },
              data: {
                bloodRequestId: bloodRequest.id,
                bloodType: bloodRequest.bloodType,
                hospitalId: bloodRequest.hospitalId,
              },
              token: donor.deviceToken,
            };

            try {

              if (admin.apps.length > 0) {
                await admin.messaging().send(message);
                console.log(`Notification sent to donor ${donor.id}`);
              } else {
                 console.warn('Firebase not initialized, skipping notification.');
              }
            } catch (notificationError) {
              console.error(`Error sending notification to donor ${donor.id}:`, notificationError);
            }
          }
        }
      });

      await Promise.all(notificationPromises);

      res.status(201).json(bloodRequest);
    } catch (error) {
      console.error('Error creating blood request and sending notifications:', error);
      res.status(500).json({ error: 'Unable to create blood request or send notifications' });
    }
  }
);

// Admin: Update Blood Request Status
app.put('/api/admin/requests/:id/status', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Request ID is required' });
  if (!req.user || req.user.role !== Role.ADMIN) {
    return res.sendStatus(403);
  }
  const { status } = req.body;
  if (!Object.values(BloodRequestStatus).includes(status)) {
    return res.status(400).json({ error: 'Invalid blood request status' });
  }

  try {
    const updatedRequest = await prisma.bloodRequest.update({
      where: { id },
      data: { status: status as BloodRequestStatus },
    });
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update blood request status' });
  }
});

// Admin: Get all Donation Pledges
app.get('/api/admin/donation-pledges', authenticateToken, async (req: Request, res: Response) => {
  if (!req.user || req.user.role !== Role.ADMIN) {
    return res.sendStatus(403);
  }
  const { status, bloodRequestId, userId } = req.query;
  const where: any = {};
  if (status) where.status = status;
  if (bloodRequestId) where.bloodRequestId = bloodRequestId;
  if (userId) where.userId = userId;

  const pledges = await prisma.donationPledge.findMany({
    where,
    include: {
      user: { select: { id: true, firstName: true, lastName: true, contactNumber: true } },
      bloodRequest: { select: { id: true, bloodType: true, unitsRequired: true, hospital: { select: { name: true } } } },
    },
    orderBy: { pledgedAt: 'desc' },
  });
  res.json(pledges);
});

// Admin: Update Donation Pledge Status
app.put('/api/admin/donation-pledges/:id/status', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Donation Pledge ID is required' });
  if (!req.user || req.user.role !== Role.ADMIN) {
    return res.sendStatus(403);
  }
  const { status } = req.body;
  if (!Object.values(DonationPledgeStatus).includes(status)) {
    return res.status(400).json({ error: 'Invalid donation pledge status' });
  }

  try {
    const updatedPledge = await prisma.donationPledge.update({
      where: { id },
      data: { status: status as DonationPledgeStatus },
    });
    res.json(updatedPledge);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update donation pledge status' });
  }
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on port ${port}`);
});

