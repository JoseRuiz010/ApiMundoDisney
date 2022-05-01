const Usuario = require('../../model/Usuario');
const { generateAccessToken } = require('../../Validar/ValidarToken');

const route = require('express').Router();


route.get('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.json({ mensaje: 'No completo todos los campos' })

    const user = await Usuario.findOne({
        where: {
            email
        }
    })
    if (!user || user.password !== password) return res.json({ mensaje: 'Usuario no encontrado' });
    const token = generateAccessToken({ email, password });
    return res.send({
        mensaje: 'Usuario Autenticado',
        user,
        token
    })
})

route.post('/register', async (req, res) => {
    const { nombre, dni, email, password } = req.body

    if (!nombre || !dni || !email || !password) return res.json({ mensaje: 'Todos los campos son obligatorios' })
    const newUser = await Usuario.create({ nombre, dni, email, password })

    res.json({ mensaje: 'El usuario fueregistrado', newUser })
})


module.exports = route;