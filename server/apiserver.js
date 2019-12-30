require('dotenv').config()
var express = require('express');
var cors = require('cors')
// var bodyParser = require('body-parser');

var app = express()

const port = process.env.PORT || 8086


app.use(cors())
app.use(express.json());
// app.use(bodyParser.json());

console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`)



app.get("/stripekey", (req, res) => {
  console.log(`get:/stripe-key: ${process.env.STRIPE_PUBLISHABLE_KEY}`)
  res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

// Routes
app.use('/charge', require('./api/charge.js'));
app.use('/api', require('./routes/meetings.js'));

app.listen(port, ()=>{
  console.log(`API listening on port ${port}`);
});