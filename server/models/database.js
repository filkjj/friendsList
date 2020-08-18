const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/friendsList', {
  logging: false
});
module.exports = { db };
