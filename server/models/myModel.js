const Sequelize = require('sequelize');
const  db  = require('./database');

const MyModel = db.define('mymodel', {
    name: Sequelize.STRING,
    rating : Sequelize.INTEGER
  });


module.exports = MyModel;
