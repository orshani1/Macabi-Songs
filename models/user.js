const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
    
    }  

})

module.exports = mongoose.model('User',userSchema);