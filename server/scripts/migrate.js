const fs = require('fs');
const path = require('path');
const config = require('../config');
const database = require('../database');
const { databaseLog } = require('../lib/logger');

const MIGRATIONS_REGEX_FILES = /.migration([0-9]+).js/g; // /\b.migration*.js\b/;
const MIGRATIONS_PATH = path.join(process.cwd(), 'migrations');

function isMigrationFile(filename) {
  return MIGRATIONS_REGEX_FILES.test(filename);
}

async function executeMigrations() {
  const migrationsFiles = fs
    .readdirSync(MIGRATIONS_PATH)
    .filter(isMigrationFile);

  const databaseConnection = await database.connect(config.database);

  databaseLog('starting migrations execution');

  for (const migrationFile of migrationsFiles) {
    databaseLog(`executing migration: ${migrationFile}`);

    try {
      const migration = path.resolve(MIGRATIONS_PATH, migrationFile);
      const { executeMigration } = require(migration);

      await executeMigration(databaseConnection);
    } catch (exception) {
      databaseLog(
        `fail to execute migration: ${migrationFile}\nexception: ${exception}`
      );
    }
  }

  databaseLog('ending migrations execution');

  await databaseConnection.end();
  process.exit();
}

executeMigrations();
