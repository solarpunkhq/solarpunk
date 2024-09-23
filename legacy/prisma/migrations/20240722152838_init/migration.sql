/*
  Warnings:

  - Added the required column `total_revenue` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `country` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "total_revenue" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "country" SET NOT NULL;
