const route = require('express').Router();


route.get('/login',(req,res)=>{
res.send('Login')
})

route.get('/register',(req,res)=>{
res.send('Register')
})


module.exports=route;