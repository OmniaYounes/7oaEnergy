const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "User Name is required"]
    },
    email: {
        type: String,
        required: [true , "Email is required"],
        unique: [true , "Email is unique"]
    } ,
    password: {
        type: String,
        required: [true , "Password is required"]
    },
    phone: {
        type: String,
        required: [true , "Phone is required"]
    },
    role: {
        type: String,
        required: [true , "Role is required"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('user', userSchema);
