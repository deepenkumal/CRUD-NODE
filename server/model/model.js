const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:String,
    status:String,
    
});
const userDB = mongoose.model('userdb',schema);
module.exports = userDB;