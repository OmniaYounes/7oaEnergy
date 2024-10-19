const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "User Name is required"]
    },
    email: {
        type: String,
        required: [true , "Email is required"]
    },
    message: {
      type: String,
      required: [true , "Message is required"],
      minlength: [10 , "This Message is too short"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('contact', contactSchema);
