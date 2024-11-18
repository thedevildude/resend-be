/*
  Warnings:

  - Added the required column `updatedAt` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('INQUEUE', 'SENT');

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "status" "MessageStatus" NOT NULL DEFAULT 'INQUEUE',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
