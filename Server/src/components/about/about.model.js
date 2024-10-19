const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema({
    image: {
      type: String,
    },
    desc: {
      type: String,
      required: [true , "description required"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('about', aboutSchema);
