const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const database = require('./db/db');
database.connectToDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
