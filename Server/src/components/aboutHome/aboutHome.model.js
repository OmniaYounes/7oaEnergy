const mongoose = require('mongoose')

const aboutHomeSchema = new mongoose.Schema({
    image: {
      type: String,
    },
    desc: {
      type: String,
      required: [true , "description required"]
    },
    headerSideLayer: {
      type: String,
    },
    sideLayer: {
      type: String,
      required: [true , "side layer required"]
    }
},{
    timestamps:true
})

module.exports = mongoose.model('aboutHome', aboutHomeSchema);
