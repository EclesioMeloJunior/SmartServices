const environment = process.env.NODE_ENV;

const config = require(`../config/${environment}.json`);

console.log(config);
