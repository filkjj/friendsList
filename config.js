module.exports = {
    database: 'friendsList',
    dialect: 'postgres',
    logging: false,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME
  }
  