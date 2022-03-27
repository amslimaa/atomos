/*
  Warnings:

  - Added the required column `occupationId` to the `colaborator` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_colaborator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "birth" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "clt" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "occupationId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "colaborator_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "colaborator_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES "occupation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_colaborator" ("addressId", "birth", "clt", "cpf", "created_at", "id", "name") SELECT "addressId", "birth", "clt", "cpf", "created_at", "id", "name" FROM "colaborator";
DROP TABLE "colaborator";
ALTER TABLE "new_colaborator" RENAME TO "colaborator";
CREATE UNIQUE INDEX "colaborator_cpf_key" ON "colaborator"("cpf");
CREATE UNIQUE INDEX "colaborator_clt_key" ON "colaborator"("clt");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
