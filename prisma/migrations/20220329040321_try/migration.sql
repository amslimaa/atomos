-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "Reference" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "occupations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cod" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weekly_workload" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "sectors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cod" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "records" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "colaboratorId" TEXT NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "records_colaboratorId_fkey" FOREIGN KEY ("colaboratorId") REFERENCES "colaborators" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "colaborators" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cod" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth" DATETIME NOT NULL,
    "cpf" TEXT NOT NULL,
    "clt" TEXT NOT NULL,
    "addressId" TEXT,
    "occupationId" TEXT,
    "salt" REAL NOT NULL,
    "coordinatorId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "colaborators_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "colaborators_occupationId_fkey" FOREIGN KEY ("occupationId") REFERENCES "occupations" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "colaborators_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "colaborators" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "colaborators_cpf_key" ON "colaborators"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "colaborators_clt_key" ON "colaborators"("clt");
