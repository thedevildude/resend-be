/*
  Warnings:

  - You are about to alter the column `subject` on the `Message` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "subject" SET DATA TYPE VARCHAR(200);
