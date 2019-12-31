function findEnvironmentConfig(environment) {
  if (!environment)
    throw new Error(
      "Cannot find environment set 'development', 'production', 'stage'"
    );

  return require(`../config/${environment}.json`);
}

module.exports = findEnvironmentConfig(process.env.NODE_ENV);
