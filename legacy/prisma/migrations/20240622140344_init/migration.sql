-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT,
    "about_farm" TEXT,
    "current_step" INTEGER,
    "finance_option" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acre" (
    "id" SERIAL NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL,
    "latlngs" JSONB[],
    "area" DOUBLE PRECISION NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Acre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Acre" ADD CONSTRAINT "Acre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
