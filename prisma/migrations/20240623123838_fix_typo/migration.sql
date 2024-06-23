/*
  Warnings:

  - You are about to drop the column `latlangPoints` on the `Acre` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Acre" DROP COLUMN "latlangPoints",
ADD COLUMN     "latlngPoints" JSONB[];
