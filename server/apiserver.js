var express = require('express');
var cors = require('cors')
var app = express()

app.use(cors())
//var mongoose = require('mongoose');


// Routes
app.use('/api', require('./routes/meetings.js'));
// app.get('/api', (req, res) => {
//   res.json({message: 'Welcome to the Server'});
// });
app.listen(8086, ()=>{
  console.log('API listening on port 8086');
});