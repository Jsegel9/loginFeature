const express = require('express');
const app = exrpess();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/'), (req,res) => {
    res.render('index.html')
}

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT HTTP://localhost:${PORT}!`);
});