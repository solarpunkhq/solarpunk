/*
  Warnings:

  - Added the required column `screenshot_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `country` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "screenshot_url" TEXT NOT NULL,
ALTER COLUMN "country" SET NOT NULL;
