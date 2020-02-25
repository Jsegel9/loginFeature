const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var path = require('path');

app.use(express.urlencoded({ extended: true }));
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

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT HTTP://localhost:${PORT}!`);
});