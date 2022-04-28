const express = require('express');
const app= express();
const authRoute  = require('./routes/auth/authRoute');
const personajeRoute = require('./routes/personaje/personajesAuth');
 

const morgan = require('morgan');
const sequelize = require('./database/database');
(async function(){
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()

app.get('/', (req,res)=>{
    res.json({menssaje:"Ruta main"})
})
app.use(express.json())
app.use(morgan('dev'))
app.use('/auth',authRoute)
app.use(personajeRoute)



app.listen(3000,()=>{
    console.log("Server on PORT",3000)
})