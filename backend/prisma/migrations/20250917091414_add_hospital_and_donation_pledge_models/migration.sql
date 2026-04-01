/*
  Warnings:

  - You are about to drop the `Donation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hospitalId` to the `BloodRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "deviceToken" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Donation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Hospital" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "contactInfo" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "DonationPledge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bloodRequestId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "pledgedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DonationPledge_bloodRequestId_fkey" FOREIGN KEY ("bloodRequestId") REFERENCES "BloodRequest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DonationPledge_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BloodRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hospitalId" TEXT NOT NULL,
    "requesterId" TEXT,
    "bloodType" TEXT NOT NULL,
    "unitsRequired" INTEGER NOT NULL,
    "urgency" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BloodRequest_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BloodRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_BloodRequest" ("bloodType", "createdAt", "id", "latitude", "longitude", "notes", "requesterId", "status", "unitsRequired", "updatedAt", "urgency") SELECT "bloodType", "createdAt", "id", "latitude", "longitude", "notes", "requesterId", "status", "unitsRequired", "updatedAt", "urgency" FROM "BloodRequest";
DROP TABLE "BloodRequest";
ALTER TABLE "new_BloodRequest" RENAME TO "BloodRequest";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
