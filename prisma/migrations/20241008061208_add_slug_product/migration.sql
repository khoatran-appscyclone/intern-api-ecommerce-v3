/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `images` JSON NULL,
    ADD COLUMN `rating` INTEGER NULL,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `thumbnail` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Variant` ADD COLUMN `thumbnail` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_slug_key` ON `Product`(`slug`);
