const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://apnanetwork:12345@cluster0.xpsau0a.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true})
    .then(()=>{
        console.log("Connection Successfull");
     })
    .catch(()=>{
        console.log("Connection Failed");
    })