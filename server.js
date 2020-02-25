const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var path = require('path');
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config');
initializePassport(passport, email=>{
    users.find(user => user.email === email)
});

const users = []

app.use(express.urlencoded({ extended: true }));
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET
}))

app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname + '/login.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname + '/register.html'))
})

app.post('/register', async (req,res)=>{
    try{
        const hashdPwrd = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashdPwrd
        })
        res.redirect('login')
    }catch{
        res.redirect('/register')
    }
    console.log(users)
})

app.post('/login', (req,res)=>{
    //
})

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT HTTP://localhost:${PORT}!`);
});