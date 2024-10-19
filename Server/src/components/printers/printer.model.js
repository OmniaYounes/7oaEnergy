const mongoose = require('mongoose')

const printerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Name is required"]
    },
    image: {
      type: String,
      required: [true , "image required"]
    },
    BuildVolume: {
      type: String,
    },
    mainboard: {
      type: String,
    },
    PrintPrecision: {
      type: String,
    },
    NozzleDiameter: {
      type: String,
    },
    SupportFilaments: {
      type: String,
    },
    PrintSpeed: {
      type: String,
    },
    NozzleTemperature: {
      type: String,
    },
    HotBedTemperature: {
      type: String,
    },
    SlicingSoftware: {
      type: String,
    },
    fileFormats: {
      type: String,
    },
    InputVoltage: {
      type: String,
    },
    MachineSize: {
      type: String,
    },
    MachineWeight: {
      type: String,
    }
},{
    timestamps:true
})

module.exports = mongoose.model('printer', printerSchema);
