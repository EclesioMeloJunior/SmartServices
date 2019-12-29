const environment = process.env.NODE_ENV;
module.exports = require(`../config/${environment}.json`);
