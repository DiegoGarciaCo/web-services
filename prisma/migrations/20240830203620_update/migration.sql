/*
  Warnings:

  - Added the required column `message` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "message" TEXT NOT NULL;
