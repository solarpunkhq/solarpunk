-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "about" TEXT,
    "onboardingStep" INTEGER,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acre" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "latlangPoints" JSONB NOT NULL,

    CONSTRAINT "Acre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- AddForeignKey
ALTER TABLE "Acre" ADD CONSTRAINT "Acre_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
