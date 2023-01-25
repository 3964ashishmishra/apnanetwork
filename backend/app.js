const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 5000;

mongoose.set("strictQuery", false);
app.use(cors());
app.use(express.json())

// Database connection
require('./db/conn')

// Requiring schema
const User = require('./model/user');

// Reuiring Router
app.use(require('./routes/auth.js'));


// Listining on port 5000
app.listen(PORT, ()=>{
    console.log("Listening to port number 5000");
})