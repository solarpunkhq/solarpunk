-- AlterTable
ALTER TABLE "User" ADD COLUMN     "last_reminder_sent" TIMESTAMP(3),
ADD COLUMN     "reminders_sent" INTEGER DEFAULT 0;
