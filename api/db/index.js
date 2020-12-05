const mongoose = require('mongoose');
const {MONGODB_URI, DATABASE_NAME} = process.env;

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => { console.log (`Connected to DB: ${DATABASE_NAME}`)});
mongoose.connection.on('disconnected', () => { console.log ('Disconnected from database!')});
mongoose.connection.on('error', (error) => { 
  console.log ('db error'); 
  console.log(error) 
});
