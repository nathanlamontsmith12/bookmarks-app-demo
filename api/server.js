require('dotenv').config();
require('./db');

const { PORT, SECRET } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  secret: SECRET, 
  resave: false,
  saveUninitialized: false                                             
}));

app.use(cors());

app.get('/test', (req, res)=>{
	res.send('working');
});

// CONTROLLERS 
app.use('/bookmarks', require('./controllers/bookmarks'));


app.listen(PORT, () => {
  const d = new Date();
  console.log(d.toLocaleString() + ' server is running on port ' + PORT);
});