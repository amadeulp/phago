'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express.Router();

app.use(bodyParser.json());

app.use(express.static('./bower_components/jquery/dist'));
app.use(express.static('./bower_components/jquery-color'));
app.use(express.static('./bower_components/jquery-ui'));
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: '.'});
});

app.use('/api/game', require('./game'));
