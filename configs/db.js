const { dbURI } = require('../configs/secret');
const Sequelize = require('sequelize');
global.sequelize = new Sequelize(dbURI);
module.exports = () =>{
  sequelize
  .authenticate()
  .then(() => {
    console.log('DB connected successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}