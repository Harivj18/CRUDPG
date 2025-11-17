const express = require('express');
const bodyParser = require('body-parser');
const photoRoutes = require('./routes/routes');
const { sequelize } = require('./config/connection');

const app = express();
app.use(bodyParser.json());

app.use('/api', photoRoutes);
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('DB connection error:', err));

module.exports = app;
