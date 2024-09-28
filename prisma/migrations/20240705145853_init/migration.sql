/*
  Warnings:

  - You are about to drop the column `translations` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "translations",
ADD COLUMN     "country" TEXT;
