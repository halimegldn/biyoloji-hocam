/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Person" DROP CONSTRAINT "Person_contactId_fkey";

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "contactId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Person_name_key" ON "Person"("name");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
