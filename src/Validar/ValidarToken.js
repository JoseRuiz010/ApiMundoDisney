const jwt = require('jsonwebtoken');
const clave = 'Hola mundo';
const generateAccessToken = (user) => {
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    const token = jwt.sign(user, clave, { expiresIn: '25m' })
    return token
}
const validateToken = (req, res, next) => {
    console.log(req.headers);
    const accessToken = req.headers["authorization"];
    console.log(accessToken);
    if (!accessToken) return res.json({ mensaje: 'Access denied' })

    jwt.verify(accessToken, clave, (err, user) => {
        if (err) return res.json({ mensaje: 'Token Expired' })
        next()
    })
}

module.exports = { generateAccessToken, validateToken }