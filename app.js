const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requete reçue!!!');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: 'requete comprise'});
    next();
});

app.use((req, res) => {
    console.log('reponse bien reçue');
});

module.exports = app;