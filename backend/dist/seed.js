import { PrismaClient, Role, BloodType, Urgency, BloodRequestStatus, DonationPledgeStatus } from './generated/prisma';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
async function main() {
    // Create an admin user
    const adminPasswordHash = await bcrypt.hash('adminpassword', 10);
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            passwordHash: adminPasswordHash,
            firstName: 'Admin',
            lastName: 'User',
            bloodType: BloodType.OPOS,
            isDonor: false,
            isRecipient: false,
            role: Role.ADMIN,
        },
    });
    // Create some hospitals in Madurai, Tamil Nadu
    const hospitals = [
        {
            id: 'hospital-madurai-1',
            name: 'Apollo Hospital Madurai',
            address: 'Lake View Rd, K.K. Nagar, Madurai, Tamil Nadu 625020',
            latitude: 9.9289,
            longitude: 78.1408,
            contactInfo: '+914522580000',
        },
        {
            id: 'hospital-madurai-2',
            name: 'Meenakshi Mission Hospital & Research Centre',
            address: 'Lake Area, Melur Road, Madurai, Tamil Nadu 625107',
            latitude: 9.9305,
            longitude: 78.1700,
            contactInfo: '+914522588777',
        },
        {
            id: 'hospital-madurai-3',
            name: 'Velammal Medical College Hospital & Research Institute',
            address: 'Madurai-Tuticorin Ring Road, Anupanadi, Madurai, Tamil Nadu 625009',
            latitude: 9.8970,
            longitude: 78.1300,
            contactInfo: '+914522510000',
        },
    ];
    for (const hospitalData of hospitals) {
        await prisma.hospital.upsert({
            where: { id: hospitalData.id },
            update: {},
            create: hospitalData,
        });
    }
    // Create a sample blood request
    const sampleBloodRequest = await prisma.bloodRequest.create({
        data: {
            hospitalId: hospitals[0].id,
            bloodType: BloodType.ONEG,
            unitsRequired: 2,
            urgency: Urgency.HIGH,
            latitude: hospitals[0].latitude,
            longitude: hospitals[0].longitude,
            notes: 'Patient in critical condition',
            requesterId: adminUser.id, // Admin creating the request
            status: BloodRequestStatus.PENDING,
        },
    });
    // Create a sample user for testing donation pledges
    const testUserPasswordHash = await bcrypt.hash('userpassword', 10);
    const testUser = await prisma.user.upsert({
        where: { email: 'user@example.com' },
        update: {},
        create: {
            email: 'user@example.com',
            passwordHash: testUserPasswordHash,
            firstName: 'Test',
            lastName: 'Donor',
            bloodType: BloodType.OPOS,
            isDonor: true,
            isRecipient: false,
            role: Role.USER,
            latitude: 9.9252, // Near Madurai
            longitude: 78.1198,
        },
    });
    // Create a sample donation pledge
    await prisma.donationPledge.create({
        data: {
            bloodRequestId: sampleBloodRequest.id,
            userId: testUser.id,
            status: DonationPledgeStatus.PENDING,
        },
    });
    // eslint-disable-next-line no-console
    console.log('Seeded admin user, Madurai hospitals, sample blood request, and donation pledge.');
}
main()
    .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map