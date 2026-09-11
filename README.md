# 🩸 NSS Blood Donation App

> **A full-stack blood donation coordination platform** built with Flutter (mobile), Node.js/Express/TypeScript (backend), and an HTML admin panel — designed to connect blood donors with recipients and hospitals in real time.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
  - [Backend Setup](#backend-setup)
  - [Flutter App Setup](#flutter-app-setup)
  - [Admin Panel Setup](#admin-panel-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [✅ What's Working](#-whats-working)
- [🔴 Known Issues & Bugs](#-known-issues--bugs)
- [⚠️ Production Readiness Checklist](#️-production-readiness-checklist)
- [📈 Scaling for 1,000+ Concurrent Requests](#-scaling-for-1000-concurrent-requests)
- [🔒 Security Hardening](#-security-hardening)
- [🧪 Testing](#-testing)
- [🚀 Deployment Guide](#-deployment-guide)
- [Contribution Guidelines](#-contribution-guidelines)
- [License](#-license)

---

## 🌍 Project Overview

The **NSS Blood Donation App** is a community-driven platform that:

- Allows users to register as **donors**, **recipients**, or both
- Enables **real-time blood requests** tied to the nearest hospital based on GPS coordinates
- Sends **push notifications (Firebase FCM)** to nearby eligible donors when a new request is posted
- Provides an **admin panel** for hospital staff to manage requests, pledges, and hospitals
- Tracks **donation pledges** through a full status lifecycle (`PENDING → EN_ROUTE → DONATED / CANCELLED`)

---

## 🏗️ Architecture

```
┌───────────────────────────────────────────────────┐
│                  Flutter Mobile App                │
│  (Android / iOS — Dart/Flutter, Firebase SDK)      │
└────────────────────┬──────────────────────────────┘
                     │ REST API (HTTP/JSON)
                     ▼
┌───────────────────────────────────────────────────┐
│           Node.js / Express / TypeScript           │
│  - JWT Authentication (bcrypt + jsonwebtoken)      │
│  - Prisma ORM (SQLite dev / PostgreSQL prod)       │
│  - Firebase Admin SDK (FCM push notifications)     │
│  - express-validator (input sanitization)          │
│  - Haversine geolocation filtering                 │
└───────────────┬───────────────────────────────────┘
                │
    ┌───────────┴────────────┐
    │        Database        │
    │  SQLite (dev)          │
    │  PostgreSQL (prod)     │
    └────────────────────────┘
                │
┌───────────────┴────────────────────────────────────┐
│              Admin Panel (HTML/CSS/JS)              │
│  - Vanilla JS SPA served statically                │
│  - Hospital management, request & pledge control   │
└────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Mobile App** | Flutter 3.x, Dart SDK ^3.8.1 |
| **Backend** | Node.js, Express 5.x, TypeScript 5.x |
| **ORM** | Prisma 6.x |
| **Database** | SQLite (development), PostgreSQL (production) |
| **Auth** | JWT (`jsonwebtoken`), bcrypt (`bcryptjs`) |
| **Push Notifications** | Firebase Admin SDK (FCM) |
| **Input Validation** | `express-validator` |
| **Admin Panel** | Vanilla HTML/CSS/JavaScript (SPA) |
| **Flutter Packages** | `firebase_messaging`, `firebase_core`, `geolocator`, `http`, `shared_preferences`, `url_launcher` |

---

## 📁 Repository Structure

```
NSS_BD_APP/
├── lib/                          # Flutter source code
│   ├── main.dart                 # App entry point, FCM init, auth check
│   ├── api_config.dart           # API base URL configuration (dev/prod)
│   ├── login_screen.dart         # Login UI & auth logic
│   ├── requests_list_screen.dart # Main dashboard — nearby blood requests
│   ├── donation_confirmation_screen.dart  # Pledge confirmation flow
│   ├── donation_status_screen.dart        # Active donation tracking
│   ├── donation_certificate_screen.dart   # Post-donation certificate
│   ├── social_share_screen.dart           # Share donation on social media
│   └── nearby_requests_page.dart          # Geo-filtered requests view
│
├── backend/
│   ├── src/
│   │   ├── index.ts              # All API routes & middleware (single file)
│   │   └── seed.ts               # Database seed script
│   ├── prisma/
│   │   └── schema.prisma         # Database schema definition
│   ├── .env                      # Backend environment variables
│   ├── firebase-adminsdk.json    # Firebase service account (⚠️ do NOT commit)
│   └── package.json
│
├── admin-panel/
│   ├── index.html                # Admin dashboard shell
│   ├── script.js                 # Admin SPA logic
│   └── style.css                 # Admin styles
│
├── pubspec.yaml                  # Flutter dependencies
├── .env                          # Root-level env (if any)
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ and **npm** v9+
- **Flutter SDK** 3.x (`flutter doctor` should show no errors)
- **Dart SDK** ^3.8.1
- **Firebase Project** (for FCM push notifications)

---

### Backend Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create .env file (see Environment Variables section)
cp .env.example .env  # or create manually

# 4. Generate Prisma client
npx prisma generate

# 5. Run database migrations
npx prisma migrate dev --name init

# 6. (Optional) Seed the database with sample data
npm run seed

# 7. Start development server
npm run dev
# Server runs on http://localhost:3000
```

---

### Flutter App Setup

```bash
# 1. From the project root
cd NSS_BD_APP

# 2. Install Flutter dependencies
flutter pub get

# 3. Configure Firebase
# - Create a Firebase project at https://console.firebase.google.com
# - Add an Android app (package name: com.example.blood_core_pages)
# - Download google-services.json → place in android/app/
# - Add an iOS app → download GoogleService-Info.plist → place in ios/Runner/

# 4. Update API URL in lib/api_config.dart
# Set liveBaseUrl to your actual deployed backend URL

# 5. Run the app
flutter run
```

---

### Admin Panel Setup

The admin panel is a static SPA — no build step required.

```bash
# Option 1: Open directly in browser
open admin-panel/index.html

# Option 2: Serve via backend (copy files to a /public folder and use express.static)

# Option 3: Serve via simple HTTP server
npx serve admin-panel/
```

> ⚠️ **Important:** The admin panel currently hardcodes `admin@example.com / adminpassword` for login. Change this immediately before production deployment.

---

## 🌐 Environment Variables

### Backend `.env`

```env
# Database
DATABASE_URL="file:./dev.db"          # SQLite for dev
# DATABASE_URL="postgresql://user:password@host:5432/dbname"  # Postgres for prod

# JWT Secret — must be a strong random string in production
JWT_SECRET="your-super-secret-jwt-key-here"

# Server Port
PORT=3000

# Node Environment
NODE_ENV=development
```

### Flutter `lib/api_config.dart`

```dart
static const String liveBaseUrl = 'https://your-production-api.com';
```

---

## 📡 API Reference

Base URL: `http://localhost:3000/api` (dev) / `https://your-api.com/api` (prod)

All authenticated endpoints require:
```
Authorization: Bearer <JWT_TOKEN>
```

### Authentication

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/register` | ❌ | Register new user |
| `POST` | `/api/auth/login` | ❌ | Login, returns JWT token |

### Users

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/users/donors` | ✅ | Get all registered donors |
| `GET` | `/api/users/recipients` | ✅ | Get all recipients |
| `GET` | `/api/users/:id` | ✅ (self/admin) | Get user profile |
| `PUT` | `/api/users/:id` | ✅ (self/admin) | Update user profile |
| `DELETE` | `/api/users/:id` | ✅ (self/admin) | Delete user account |
| `PUT` | `/api/users/:id/device-token` | ✅ (self) | Update FCM device token |

### Blood Requests

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/requests` | ✅ | List requests (filterable by status, bloodType, requesterId) |
| `GET` | `/api/requests/nearby` | ✅ | Get nearby pending requests (lat, lon, radius) |
| `GET` | `/api/requests/:id` | ✅ | Get a specific request |
| `POST` | `/api/requests` | ✅ | Create a new blood request |
| `PUT` | `/api/requests/:id` | ✅ (owner/admin) | Update request |
| `DELETE` | `/api/requests/:id` | ✅ (owner/admin) | Delete request |

### Donation Pledges

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/donation-pledges` | ✅ | List pledges (filterable) |
| `GET` | `/api/donation-pledges/:id` | ✅ | Get specific pledge |
| `POST` | `/api/donation-pledges` | ✅ | Create a pledge |
| `PUT` | `/api/donation-pledges/:id` | ✅ (owner/admin) | Update pledge status |
| `DELETE` | `/api/donation-pledges/:id` | ✅ (owner/admin) | Cancel/delete pledge |

### Admin Routes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/admin/hospitals` | ✅ ADMIN | Add hospital |
| `GET` | `/api/admin/hospitals` | ✅ ADMIN | List all hospitals |
| `POST` | `/api/admin/requests` | ✅ ADMIN | Create request + notify donors |
| `PUT` | `/api/admin/requests/:id/status` | ✅ ADMIN | Update request status |
| `GET` | `/api/admin/donation-pledges` | ✅ ADMIN | List all pledges |
| `PUT` | `/api/admin/donation-pledges/:id/status` | ✅ ADMIN | Update pledge status |

### System

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/health` | ❌ | Health check — returns `{ status: 'ok' }` |

---

## ✅ What's Working

### Backend — Fully Functional

| Feature | Status | Notes |
|---|---|---|
| User Registration | ✅ Working | Full validation via `express-validator`, bcrypt password hashing, duplicate email check |
| User Login (JWT) | ✅ Working | Returns JWT token with `userId` and `role`. Token expiry: 1 hour |
| JWT Auth Middleware | ✅ Working | Protects all sensitive routes, role-based ADMIN/USER distinction |
| User Profile CRUD | ✅ Working | Self-edit and Admin-override enforced |
| Blood Request CRUD | ✅ Working | Full create/read/update/delete with ownership validation |
| Nearby Requests API | ✅ Working | Haversine formula in-memory geolocation filtering within configurable radius |
| Donation Pledges CRUD | ✅ Working | Complete lifecycle — `PENDING → EN_ROUTE → DONATED / CANCELLED` |
| Hospital Management (Admin) | ✅ Working | Admins can add and list hospitals |
| Admin: Create Request + Notify | ✅ Working | Creates request and triggers FCM notifications to nearby matching donors |
| Admin: Update Request Status | ✅ Working | ADMIN-only status transitions |
| Admin: Update Pledge Status | ✅ Working | ADMIN-only bulk pledge management |
| FCM Device Token Endpoint | ✅ Working | Stores FCM token per user for targeted push notifications |
| Firebase Admin SDK Init | ✅ Working | Gracefully degrades if `firebase-adminsdk.json` is missing (logs error, does not crash) |
| Input Validation | ✅ Working | Blood type enum validation, coordinate type checks, required field checks |
| Health Check Endpoint | ✅ Working | `/health` returns `200 OK` for monitoring |
| Nearest Hospital Auto-Detection | ✅ Working | On request creation, auto-selects nearest hospital from GPS coordinates |
| Request Logger | ✅ Working | Console logs method + URL + timestamp for every request |

### Flutter Mobile App — Functional Screens

| Screen / Feature | Status | Notes |
|---|---|---|
| App Launch / Auth Gate | ✅ Working | Checks `SharedPreferences` for JWT token, routes to Login or Dashboard |
| Login Screen | ✅ Working | Connects to backend, stores JWT + userId, navigates to dashboard |
| Firebase Messaging Init | ✅ Working | Requests permissions, gets FCM token, sends to backend on startup |
| Background Message Handler | ✅ Working | `@pragma('vm:entry-point')` handler registered |
| Requests List Screen | ✅ Working | Fetches nearby blood requests using device GPS, renders list of cards |
| Geolocation Permission Flow | ✅ Working | Requests location permission, handles denied/permanently denied states |
| Donation Confirmation Screen | ✅ Working | Navigation to pledge confirmation flow |
| Donation Status Screen | ✅ Working | Navigation to active donation tracking |
| Donation Certificate Screen | ✅ Working | Post-donation certificate display |
| Social Share Screen | ✅ Working | Share donation story flow |
| API Config (Dev/Prod aware) | ✅ Working | `ApiConfig` class auto-selects `localhost`, `10.0.2.2` (Android emulator), or live URL based on `kReleaseMode` / `kIsWeb` / `Platform` |

### Admin Panel — Functional

| Feature | Status | Notes |
|---|---|---|
| Admin Login (Auto on Load) | ✅ Working | Calls `/api/auth/login` on page init and stores JWT |
| View Blood Requests Table | ✅ Working | Lists all requests with status dropdown for inline updates |
| Inline Status Update (Requests) | ✅ Working | Change status via dropdown → fires `PUT /api/admin/requests/:id/status` |
| View Donation Pledges Table | ✅ Working | Lists all pledges with inline status update dropdown |
| Inline Status Update (Pledges) | ✅ Working | Change pledge status via dropdown → fires `PUT /api/admin/donation-pledges/:id/status` |
| Create Blood Request Form | ✅ Working | Form with hospital picker (populated from API), blood type, urgency, GPS |
| Manage Hospitals | ✅ Working | Add new hospital, view existing hospitals list |
| Dynamic API URL Detection | ✅ Working | Auto-switches between `localhost:3000` and same-origin in production |

---

## 🔴 Known Issues & Bugs

### Backend Issues

| # | Issue | Severity | Location | Fix Required |
|---|---|---|---|---|
| 1 | **SQLite in production** | 🔴 Critical | `backend/prisma/schema.prisma` | SQLite is single-file, not suitable for concurrent production load. **Must migrate to PostgreSQL** before launch. |
| 2 | **No rate limiting** | 🔴 Critical | `backend/src/index.ts` | No protection against brute-force attacks on `/api/auth/login`. Add `express-rate-limit`. |
| 3 | **No request body size limit** | 🔴 High | `backend/src/index.ts` | `express.json()` has no `limit`. Allows large payload attacks. Set `express.json({ limit: '10kb' })`. |
| 4 | **Nearby requests uses in-memory filtering** | 🔴 High | `backend/src/index.ts:494` | All PENDING requests are fetched then filtered in Node.js. Will OOM/timeout at scale. Use PostGIS or a bounding-box SQL query. |
| 5 | **FCM notification uses hospitalId (not name) in message body** | 🟡 Medium | `backend/src/index.ts:754` | Message says `"at ${bloodRequest.hospitalId}"` — should resolve to hospital name. |
| 6 | **No global error handler** | 🟡 Medium | `backend/src/index.ts` | Unhandled promise rejections in routes (no try/catch on `GET /api/requests`, `GET /api/users/donors`, etc.) can crash the server. Add a global Express error handler. |
| 7 | **JWT expiry is 1 hour with no refresh** | 🟡 Medium | `backend/src/index.ts:193` | No refresh token mechanism. Users get logged out every hour. Implement refresh token endpoint. |
| 8 | **No pagination on list endpoints** | 🟡 Medium | `GET /api/requests`, `/api/donation-pledges` | Will return entire table contents — problematic at scale. Add `limit` / `offset` / cursor-based pagination. |
| 9 | **Admin credentials hardcoded in admin panel** | 🔴 Critical | `admin-panel/script.js:23-25` | `admin@example.com / adminpassword` is hardcoded. Must be replaced with a proper login form. |
| 10 | **No CORS restriction** | 🟡 Medium | `backend/src/index.ts:50` | `app.use(cors())` allows all origins. Lock down to specific allowed origins in production. |
| 11 | **`firebase-adminsdk.json` in repo** | 🔴 Critical | `backend/firebase-adminsdk.json` | Service account credentials should **never** be committed. Move to env variable or secret manager. |
| 12 | **No Prisma connection pooling** | 🟡 Medium | `backend/src/index.ts:60` | Single `PrismaClient` instance without pool configuration. At 1000 RPS, DB connections will saturate. Configure `datasource.url` with `connection_limit`. |
| 13 | **Donor notification uses blood-type match only** | 🟡 Medium | `backend/src/index.ts:726` | Notifications sent to all donors with matching blood type, regardless of distance (GPS filter applied after fetch). Must add DB-level geo-filter. |
| 14 | **Missing `try/catch` on several GET routes** | 🟡 Medium | `/api/users/donors`, `/api/users/recipients`, `/api/requests`, etc. | DB errors will propagate as unhandled and crash Express worker. |

### Flutter App Issues

| # | Issue | Severity | Location | Fix Required |
|---|---|---|---|---|
| 15 | **Production API URL is a placeholder** | 🔴 Critical | `lib/api_config.dart:6` | `'https://your-nss-bd-api.herokuapp.com'` is not set. App will fail all API calls in release mode. |
| 16 | **JWT token not validated on startup** | 🟡 Medium | `lib/main.dart:42-54` | Only checks if token **exists**, not if it's still valid. Expired tokens will cause API 401 errors after login check passes. |
| 17 | **"Call Hospital" button is non-functional** | 🟡 Medium | `lib/requests_list_screen.dart:360` | `onPressed: () {}` — button does nothing. Should use `url_launcher` to call the hospital's contact number. |
| 18 | **"Cancel Donation" button is non-functional** | 🟡 Medium | `lib/requests_list_screen.dart:385` | `onPressed: () {}` — does not call the cancellation API. |
| 19 | **"Details" button on request cards is non-functional** | 🟡 Medium | `lib/requests_list_screen.dart:577` | `onPressed: () {}` — should navigate to a request detail screen. |
| 20 | **Confirmed donation card is hardcoded/static** | 🟡 Medium | `lib/requests_list_screen.dart:172` | "YOUR DONATION IS CONFIRMED" card always shows "City General Hospital", "O-", "CRITICAL" — not dynamic data. |
| 21 | **No logout mechanism** | 🟡 Medium | `lib/main.dart` | No logout button or session invalidation. Users must uninstall or clear app data to log out. |
| 22 | **No registration screen** | 🔴 High | `lib/` | There is no UI for user registration. New users cannot sign up from the app — only via direct API call. |
| 23 | **FCM foreground messages not displayed to user** | 🟡 Medium | `lib/main.dart:85-93` | Foreground FCM messages are only `print()`-ed. No local notification overlay shown to the user. |
| 24 | **`print()` statements in production code** | 🟠 Low | Throughout `lib/` | Debug `print()` calls should be replaced with a proper logging package (e.g., `logger`). |
| 25 | **Menu icon (`hamburger`) has no functionality** | 🟠 Low | `lib/requests_list_screen.dart:118` | `onPressed: () {}` — drawer/menu not implemented. |
| 26 | **Notification bell icon is non-functional** | 🟠 Low | `lib/requests_list_screen.dart:123` | No notification panel opened on tap. |
| 27 | **Urgency label mismatch** | 🟡 Medium | `lib/requests_list_screen.dart:159` | Color logic checks for `'CRITICAL'` and `'URGENT'` but schema uses `'LOW'`, `'MEDIUM'`, `'HIGH'`. Colors will always be blue. |

### Admin Panel Issues

| # | Issue | Severity | Location | Fix Required |
|---|---|---|---|---|
| 28 | **"View Details" shows native alert()** | 🟠 Low | `admin-panel/script.js:249` | `alert(\`Viewing details...\`)` — should show a proper detail modal. |
| 29 | **"View Donor" shows native alert()** | 🟠 Low | `admin-panel/script.js:354` | Same as above — `alert()` used as placeholder. |
| 30 | **No authentication UI** | 🔴 Critical | `admin-panel/script.js:15` | Admin credentials are hardcoded and login is triggered automatically. No proper login form for the admin panel. |
| 31 | **No search/filter in tables** | 🟠 Low | `admin-panel/script.js` | Requests and pledges tables lack search, filter, or sort. Difficult to manage at scale. |

---

## ⚠️ Production Readiness Checklist

Before deploying for launch, the following **must** be completed:

### 🔴 Blockers (Must Fix Before Launch)

- [ ] **Switch database to PostgreSQL** — SQLite cannot handle concurrent production writes
- [ ] **Implement rate limiting** on auth endpoints (`express-rate-limit`)
- [ ] **Remove hardcoded admin credentials** from `admin-panel/script.js`
- [ ] **Move `firebase-adminsdk.json` to environment variable or GCP Secret Manager**
- [ ] **Set production API URL** in `lib/api_config.dart`
- [ ] **Add user registration screen** to the Flutter app
- [ ] **Fix urgency label color mapping** in `requests_list_screen.dart`
- [ ] **Add JWT token validation on startup** (check expiry, force re-login)
- [ ] **Restrict CORS** to known frontend origins

### 🟡 High Priority (Fix Before Public Launch)

- [ ] Add global Express error handler middleware
- [ ] Add `try/catch` to all GET routes missing it
- [ ] Implement pagination on all list endpoints (`limit`, `offset`)
- [ ] Replace in-memory geo-filter with database-level query (PostGIS or bounding box)
- [ ] Implement refresh token mechanism
- [ ] Make "Call Hospital", "Cancel Donation", and "Details" buttons functional
- [ ] Add logout functionality to Flutter app
- [ ] Display foreground FCM notifications via local notification package (`flutter_local_notifications`)
- [ ] Fix FCM notification body to use hospital name instead of `hospitalId`
- [ ] Add proper admin login UI to admin panel
- [ ] Replace `print()` with structured logging

### 🟠 Improvements (Post-Launch / Next Sprint)

- [ ] Request detail screen in Flutter
- [ ] Donor profile & history screen
- [ ] Admin panel modals for "View Details" and "View Donor"
- [ ] Search/filter/sort in admin panel tables
- [ ] Map view for nearby requests (`google_maps_flutter`)
- [ ] Dark mode support in Flutter app
- [ ] Offline support / data caching
- [ ] Push notification tray screen
- [ ] Donation history & certificates download

---

## 📈 Scaling for 1,000+ Concurrent Requests

The current architecture (single Node.js process + SQLite) **cannot** handle 1,000 concurrent requests. Here is the full roadmap to production-grade scalability:

### Step 1 — Database: SQLite → PostgreSQL

```prisma
// backend/prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Use a managed service: **AWS RDS**, **PlanetScale**, **Supabase**, or **Railway**.

### Step 2 — Connection Pooling

Use **PgBouncer** or Prisma's built-in connection pooling:

```env
DATABASE_URL="postgresql://user:pass@host:5432/db?connection_limit=20&pool_timeout=10"
```

### Step 3 — Horizontal Scaling with PM2 / Docker

```bash
# PM2 cluster mode (utilizes all CPU cores)
pm2 start dist/index.js -i max --name nss-bd-api

# Or use Docker + Docker Compose
# docker-compose up --scale api=4
```

### Step 4 — Reverse Proxy + Load Balancer

Use **Nginx** or **AWS ALB** in front of your Node.js cluster:

```nginx
upstream nss_api {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
    server 127.0.0.1:3003;
}

server {
    listen 80;
    location /api {
        proxy_pass http://nss_api;
        proxy_http_version 1.1;
        proxy_set_header Connection '';
    }
}
```

### Step 5 — Caching Layer (Redis)

Cache frequent reads (e.g., nearby requests, hospital list):

```ts
// Cache nearby requests response for 60 seconds
redis.setex(`nearby:${lat}:${lon}`, 60, JSON.stringify(results));
```

### Step 6 — Geospatial Query Optimization

Replace in-memory Haversine filtering with a proper DB query:

```sql
-- PostgreSQL with PostGIS
SELECT * FROM "BloodRequest"
WHERE ST_DWithin(
  ST_MakePoint(longitude, latitude)::geography,
  ST_MakePoint($userLon, $userLat)::geography,
  50000  -- 50 km in meters
)
AND status = 'PENDING';
```

### Step 7 — Rate Limiting & DDoS Protection

```ts
import rateLimit from 'express-rate-limit';

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // max 10 login attempts per window
  message: { error: 'Too many requests, please try again later.' }
});

app.use('/api/auth/login', authLimiter);
```

### Step 8 — Monitoring & Observability

- **Application Monitoring**: Sentry, Datadog, or New Relic
- **Infrastructure**: Prometheus + Grafana or AWS CloudWatch
- **Logging**: Winston + structured JSON logging → Elastic/Kibana or CloudWatch Logs
- **Health Check**: The `/health` endpoint is already implemented — wire it to an uptime monitor (UptimeRobot, BetterUptime)

### Estimated Capacity After Optimizations

| Configuration | Estimated RPS |
|---|---|
| Current (Single Node + SQLite) | ~50–100 |
| Node.js + PM2 Cluster (4 workers) + PostgreSQL | ~500–800 |
| Node.js + PM2 Cluster + PostgreSQL + Redis Cache | ~1,500–3,000 |
| Kubernetes + HPA + Read Replicas + CDN | 10,000+ |

---

## 🔒 Security Hardening

| Measure | Status | Action |
|---|---|---|
| Password hashing (bcrypt, 10 rounds) | ✅ Implemented | — |
| JWT authentication | ✅ Implemented | Add refresh tokens |
| Input validation (`express-validator`) | ✅ Implemented | — |
| Rate limiting | ❌ Missing | Add `express-rate-limit` |
| CORS restriction | ❌ Wide open | Restrict to known origins |
| HTTPS | ❌ Not enforced | Use Nginx SSL termination or Heroku |
| Helmet.js (HTTP security headers) | ❌ Missing | `app.use(helmet())` |
| SQL Injection | ✅ Protected | Prisma uses parameterized queries |
| Firebase credentials in repo | 🔴 Exposed | Move to environment variable / secret manager |
| Request body size limit | ❌ Missing | `express.json({ limit: '10kb' })` |

---

## 🧪 Testing

### Existing Test Scripts

Located in `backend/`:

```bash
# Test registration API
node test_register_api.js

# Test login API
node test_login_api.js

# Comprehensive audit tests
node test_comprehensive_audit.js
```

### Running Backend Tests (Manual)

```bash
# Ensure backend server is running on port 3000
npm run dev

# In another terminal
node test_register_api.js
node test_login_api.js
```

### Recommended Testing Setup (Future)

```bash
# Install testing frameworks
npm install --save-dev jest @types/jest supertest @types/supertest ts-jest

# Run tests
npm test
```

Coverage goals:
- Auth endpoints: unit + integration tests
- CRUD operations: happy path + error cases
- Middleware: JWT validation, role checks
- Flutter widget tests for Login, Request List, Donation screens

---

## 🚀 Deployment Guide

### Backend — Recommended Platforms

**Option A: Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli
railway login
railway init
railway up
# Set env vars in Railway dashboard
```

**Option B: Render**
- Connect GitHub repo
- Set Build Command: `cd backend && npm install && npx prisma generate && npm run build`
- Set Start Command: `node backend/dist/index.js`
- Add env vars in Render dashboard

**Option C: AWS EC2 + PM2**
```bash
# On EC2
git clone <repo>
cd backend
npm install
npm run build
npx prisma migrate deploy
pm2 start dist/index.js -i max --name nss-api
pm2 startup
pm2 save
```

### Flutter App — Build for Production

```bash
# Android APK
flutter build apk --release

# Android App Bundle (for Google Play)
flutter build appbundle --release

# iOS (requires macOS + Xcode)
flutter build ios --release
```

### Admin Panel — Deployment

The admin panel is static HTML/JS/CSS — can be:
- Served by the Express backend with `express.static('admin-panel')`
- Deployed to Netlify, Vercel, or any static host
- Served via Nginx from the same server as the backend

---

## 🤝 Contribution Guidelines

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make changes and test thoroughly
4. Commit with a meaningful message: `git commit -m "feat: add donor notification preferences"`
5. Push and open a Pull Request against `main`

**Branch naming conventions:**
- `feature/` — new features
- `fix/` — bug fixes
- `hotfix/` — critical production fixes
- `chore/` — dependency updates, refactors

---

## 📄 License

This project is part of the **NSS (National Service Scheme)** initiative. All rights reserved.

---

## 📞 Support

For issues, questions, or deployment help, open a GitHub Issue with:
- Steps to reproduce
- Expected vs. actual behavior
- Environment details (OS, Flutter version, Node.js version)

---

*Last updated: September 2026 — v1.0.0*
