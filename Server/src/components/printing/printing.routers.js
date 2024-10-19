const express = require('express')
const router = express.Router()
const upload = require('../../utilts/multerConfig')

const printingController = require('./printing.controller')

router.route("/printing").post(upload.single("image"), printingController.addNewPrinting)
router.get('/' , printingController.getPrintings);
router.get('/:id' , printingController.getPrintingByID);
router.route("/:id").put(upload.single("image"), printingController.updateprinting)
router.delete('/:id' , printingController.deletePrinting);

module.exports = router

