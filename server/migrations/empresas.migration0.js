const migrationQuery = /* sql */ `
  CREATE TABLE IF NOT EXISTS public."Empresas" (
    id serial,
    "nomeFantasia" varchar(200),
    "razaoSocial" varchar(200),
    "cnpj" varchar(30),
    "nomeResponsavel" varchar(200),
    "cpfResponsavel" varchar(20),
    "email" varchar(60),
    "password" varchar(30),
    "createdAt" timestamptz DEFAULT now(),
    "deactivatedAt" timestamptz NULL,
    CONSTRAINT empresas_pk PRIMARY KEY (id)
  );
`;

const downMigrationQuery = /* sql */ `
  DROP TABLE IF EXISTS public."Empresas"
`;

async function executeMigration(database) {
  await database.query(migrationQuery);
}

async function executeDownMigration(database) {
  await database.query(downMigrationQuery);
}

module.exports = { executeMigration, executeDownMigration };
