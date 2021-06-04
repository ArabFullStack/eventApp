const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLength: 5
    },                       
    description: String,
    category: {
        type: String,
        enum: ["business", "casual","party", "general"]
    },
    image:{
         type: String
    },
    cost:{
        type: Number,
        required: true,
        min: 1
    },
    imageUrl: String,
    tags: Array, 
})    
const Event =mongoose.model('Event', eventSchema) 
module.exports = Event