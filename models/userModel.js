const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    }, 
    password :{
        type : String,
        required : true
    }
})

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password) ;
};

module.exports = mongoose.model('User' , userSchema);