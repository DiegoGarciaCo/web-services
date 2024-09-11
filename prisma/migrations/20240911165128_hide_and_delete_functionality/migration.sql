-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hide" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Newsletter" ADD COLUMN     "delete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hide" BOOLEAN NOT NULL DEFAULT false;
