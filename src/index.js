const express = require('express');
const app = express();
const authRoute = require('./routes/auth/authRoute');
const personajeRoute = require('./routes/personaje/personajesAuth');
const generoRoute = require('./routes/Genero/generoRoute');
const peliculaRoute = require('./routes/Pelicula/peliculaRoute');


const morgan = require('morgan');
const sequelize = require('./database/database');
(async function () {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:');
  }
})()



app.use(express.json())
app.use(morgan('dev'))
app.use('/auth', authRoute)
app.use(personajeRoute)
app.use(peliculaRoute)
app.use(generoRoute)



app.listen(3000, () => {
  console.log("Server on PORT", 3000)
})