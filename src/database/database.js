const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('dbDisney', 'root', '', {
  host: 'localhost',
  dialect:  'mysql'
});
  

  module.exports= sequelize