/** Database connection for Microblog. */

const { Client } = require("pg");

const client = new Client("postgresql:///microblog");

client.connect();


module.exports = client;
