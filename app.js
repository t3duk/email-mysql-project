const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const pug = require('pug');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

module.exports = app;