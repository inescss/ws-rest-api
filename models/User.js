const mongoose = require('mongoose');
 
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:String,
    phone: Number,
});
module.exports = mongoose.model('User', userSchema);