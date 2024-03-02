const mongoose = require('mongoose');

const postSchema = mongoose .Schema({
    contenu : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date
    }
})

module.exports = mongoose.model('Post' , postSchema)