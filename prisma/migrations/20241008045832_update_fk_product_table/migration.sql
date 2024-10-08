/*
  Warnings:

  - Made the column `brandId` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_brandId_fkey`;

-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `Product` MODIFY `brandId` INTEGER NOT NULL,
    MODIFY `categoryId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
