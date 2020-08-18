const Sequelize = require('sequelize');
const {db} = require('./database');

const myModel = db.define('myModel',{
    name : Sequelize.STRING,
    rating : {
        type :Sequelize.INTEGER,
        validate: {min:0,max:100}
    }
});

module.exports = {myModel};