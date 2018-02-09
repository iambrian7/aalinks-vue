var express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())
//var mongoose = require('mongoose');
app.get('/', (req, res) => res.send('Hello from fiveserver!!!!!!!!!!!'))

app.listen(5550, ()=>{
  console.log('API listening on port 8081');
});