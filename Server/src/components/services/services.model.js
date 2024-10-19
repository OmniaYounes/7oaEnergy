const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true , "title is required"]
    },
    image: {
      type: String,
      required: [true , "image required"]
    },
    desc: {
      type: String,
      required: [true , "description required"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('services', servicesSchema);
