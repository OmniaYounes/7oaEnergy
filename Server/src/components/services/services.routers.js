const express = require('express')
const router = express.Router()
const upload = require('../../utilts/multerConfig')

const servicesController = require('./services.controller')

router.route("/services").post(upload.single("image"), servicesController.addNewServices)
router.get('/' , servicesController.getServices);
router.get('/:id' , servicesController.getServicesByID);
router.route("/:id").put(upload.single("image"), servicesController.updateServices)
router.delete('/:id' , servicesController.deleteServices);

module.exports = router

