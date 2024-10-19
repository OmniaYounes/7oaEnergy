const mongoose = require('mongoose')

const printingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Name is required"]
    },
    image: {
      type: String,
      required: [true , "image required"]
  }
},{
    timestamps:true
})

module.exports = mongoose.model('printing', printingSchema);
