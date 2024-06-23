/*
  Warnings:

  - The `latlangPoints` column on the `Acre` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Acre" DROP COLUMN "latlangPoints",
ADD COLUMN     "latlangPoints" JSONB[];
