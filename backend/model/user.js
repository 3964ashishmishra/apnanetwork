const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    email:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    username:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require : true
    }
})

const User = mongoose.model("USER",userSchema);

module.exports = User;