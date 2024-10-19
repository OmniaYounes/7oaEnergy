const express = require('express')
const router = express.Router()
const upload = require('../../utilts/multerConfig')

const printerController = require('./printer.controller')

router.route("/printer").post(upload.single("image"), printerController.addNewPrinter)
router.get('/' , printerController.getPrinters);
router.get('/:id' , printerController.getPrinterByID);
router.route("/:id").put(upload.single("image"), printerController.updatePrinter)
router.delete('/:id' , printerController.deletePrinter);

module.exports = router

