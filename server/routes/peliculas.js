/** @format */

const express = require('express');
const app = express();

app.get('/peliculas', function (req, res) {
  res.json({
    status: 'OK',
    data: 'Estas son todas mis películas',
  });
});

app.get('/peliculas/:id', function (req, res) {
  const id = req.params.id;
  res.json({
    status: 'OK',
    data: `Película con id ${id} recuperada`,
  });
});

app.post('/peliculas', function (req, res) {
  let body = req.body;
  res.json({
    status: 'OK',
    pelicula: 'Película registrada',
  });
});

app.put('/peliculas/:id', function (req, res) {
  var id = req.params.id;
  var toUpdate = req.body;

  res.json({
    status: 'OK',
    pelicula: `Película con id ${id} actualizada`,
  });
});

app.delete('/peliculas/:id', function (req, res) {
  var id = req.params.id;
  res.status(204).json({
    status: 'OK',
  });
});

module.exports = app;
