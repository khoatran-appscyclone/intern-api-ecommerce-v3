/*
  Warnings:

  - The values [Disabled,Enabled] on the enum `DiscountCampaign_status` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `active` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `DiscountCampaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `active` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Collection` ADD COLUMN `active` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Customer` ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `DiscountCampaign` ADD COLUMN `active` BOOLEAN NOT NULL,
    MODIFY `status` ENUM('Outdate', 'Inprogress', 'Pending') NOT NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Staff` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Vendor` ADD COLUMN `active` BOOLEAN NOT NULL;
