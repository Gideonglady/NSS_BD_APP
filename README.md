# NSS Blood Donation App

A blood donation coordination application built with Flutter and a Node.js backend. The project supports blood requests, donor pledges, nearby-request workflows, and hospital administration.

## Features

- User login and donor/recipient profiles.
- Create and view blood requests with blood type, urgency, and location.
- View nearby pending requests using distance calculations.
- Create and track donation pledges.
- Hospital and request management through an admin panel.
- Firebase Cloud Messaging integration for push notifications.

## Tech Stack

- **Mobile:** Flutter, Dart
- **Backend:** Node.js, Express, TypeScript
- **Database:** SQLite with Prisma ORM
- **Authentication:** JWT and bcryptjs
- **Notifications:** Firebase Cloud Messaging
- **Admin panel:** HTML, CSS, JavaScript

## Architecture

```text
Flutter App ──HTTP/JSON──> Express API ──Prisma──> SQLite
                                │
                                └───────────────> Firebase Cloud Messaging

Admin Panel ─────────────HTTP/JSON──────────────> Express API
```

## Getting Started

### Prerequisites

- Flutter SDK
- Node.js and npm
- Firebase project (for push notifications)

### Backend

```bash
cd backend
npm install
```

Create `backend/.env` with your local configuration:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="replace-with-a-long-random-secret"
PORT=3000
NODE_ENV=development
```

The repository currently has a Prisma client output/import path mismatch and imports `dotenv` without declaring it in `backend/package.json`. Fix those configuration issues before expecting a clean backend start. Once fixed, initialize the database and start the API:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

The health endpoint is available at `http://localhost:3000/health`.

Firebase push notifications require your own Firebase project configuration and service-account credentials. Keep credentials out of Git.

### Flutter App

From the repository root:

```bash
flutter pub get
flutter run
```

Check `lib/api_config.dart` and configure a backend URL reachable from your device. Android emulators commonly use `http://10.0.2.2:3000`; physical devices need your computer's reachable LAN address.

## Project Structure

```text
lib/                 # Flutter screens and mobile logic
backend/src/         # Express API and seed script
backend/prisma/      # Prisma schema
admin-panel/         # Browser-based admin interface
test/                # Flutter tests
```


## Author

**Gideon Glady K**  
[GitHub](https://github.com/Gideonglady)
