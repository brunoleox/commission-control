/*
  Warnings:

  - You are about to drop the column `number` on the `orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[order]` on the table `orders` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "orders_number_idx";

-- DropIndex
DROP INDEX "orders_number_key";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "number",
ADD COLUMN     "order" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "orders_order_key" ON "orders"("order");

-- CreateIndex
CREATE INDEX "orders_order_idx" ON "orders"("order");
