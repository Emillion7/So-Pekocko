// MONGODB PASSWORD & USERNAME: 1B84nx3a76X5kWy5 Emillion777
// MONGODB CONNECTION: mongodb+srv://Emillion777:1B84nx3a76X5kWy5@cluster0.j87p7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const sauceRoutes = require('./routes/sauce');

const app = express();

mongoose.connect('mongodb+srv://Emillion777:1B84nx3a76X5kWy5@cluster0.j87p7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/sauces', sauceRoutes);

module.exports = app;