const pg = require('pg');
const { databaseLog } = require('./lib/logger');

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
    const connection = await connectionPool.connect();
    databaseLog('Database connected', { host, port, name, user, password });
    return connection;
  } catch (exception) {
    databaseLog(`Problems to connect to database\n${exception}`);
    throw exception;
  }
}

module.exports = {
  connect: async databaseConfig => await connect(databaseConfig)
};
