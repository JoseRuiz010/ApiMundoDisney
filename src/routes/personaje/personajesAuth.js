const {Personaje,Pelicula} = require('../../model/Modelos');

const route = require('express').Router();


route.get('/characters', async (req, res) => {
    const allPersonajes=await Personaje.findAll({include:Pelicula})
    res.json({ allPersonajes})
})
route.get('/characters/:id', (req, res) => {
   const {id}= req.params
    res.json({ personajes: { id: id } })
})


route.post('/characters', async (req, res) => {
    const {Peliculas,nombre,edad,pero,historia,imagen}=req.body
   console.log(Peliculas);
   const newPersonaje=await Personaje.create({nombre,edad,pero,historia,imagen,Peliculas:Peliculas.map(p=>{return{...p,	personaje_pelicula:{selfGranted: true}}})}, {include:Pelicula});
//   const newPelicula=await Pelicula.create({});
const allPersonajes=await Personaje.findAll({include:Pelicula})
res.json({ allPersonajes})
    // res.json({ ...newPersonaje })
})

route.put('/characters', (req, res) => {
    const personaje=req.body
    res.json({ personaje })
})

route.delete('/characters/:id', (req, res) => {
    const {id}= req.params
    res.json({ personajeDelete: { id } })
})

route.get('/characters/:name', (req, res) => {
    const {name}= req.params
     res.json({ personajes: { name } })
 })

 route.get('/characters/:age', (req, res) => {
    const {age}= req.params
     res.json({ personajes: { age } })
 })

 route.get('/characters/:idMovie', (req, res) => {
    const {idMovie}= req.params
     res.json({ personajes: { idMovie} })
 })
 
 


module.exports = route;