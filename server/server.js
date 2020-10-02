/** @format */

require('./config');

// escribir código aquí
require('dotenv').config();
const mongoose = require('mongoose');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/peliculas'));

// escribir código aquí
mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log('Conección a la Base de datos ONLINE establecida');
    }
  }
);

app.listen(process.env.PORT, () => {
  console.log(`server corriendo en http://localhost:${process.env.PORT}`);
});
