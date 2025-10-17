/*
  Warnings:

  - Added the required column `personId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Person" DROP CONSTRAINT "Person_contactId_fkey";

-- DropIndex
DROP INDEX "public"."Person_contactId_key";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "personId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
