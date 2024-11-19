-- CreateEnum
CREATE TYPE "MessageDuration" AS ENUM ('ONE', 'THREE', 'SIX', 'TWELVE');

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "duration" "MessageDuration" NOT NULL DEFAULT 'TWELVE';
