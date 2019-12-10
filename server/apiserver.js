require('dotenv').config()
var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');

var app = express()

const port = process.env.PORT || 8086


app.use(cors())
app.use(bodyParser.json());

// Routes
app.use('/charge', require('./api/charge.js'));
app.use('/api', require('./routes/meetings.js'));

app.listen(port, ()=>{
  console.log(`API listening on port ${port}`);
});