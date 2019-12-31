const pg = require('pg');
const { databaseLog } = require('./lib/logger');

const database = {
  db: null
};

async function connect({ host, port, name, user, password }) {
  databaseLog('Starting database connection');

  const connectionPool = new pg.Pool({
    host,
    database: name,
    port,
    user,
    password
  });

  try {
    database.db = await connectionPool.connect();
    databaseLog('Database connected', { host, port, name, user, password });
    return database;
  } catch (exception) {
    database.db = null;
    databaseLog(`Problems to connect to database\n${exception}`);
    throw exception;
  }
}

module.exports = {
  connect: async databaseConfig => {
    if (!database.db) await connect(databaseConfig);
    return database;
  },
  db: () => database.db
};
