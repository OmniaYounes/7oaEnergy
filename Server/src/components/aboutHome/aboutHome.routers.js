const express = require('express')
const router = express.Router()
const upload = require('../../utilts/multerConfig')

const aboutHomeController = require('./aboutHome.controller')

router.route("/aboutHome").post(upload.single("image"), aboutHomeController.addNewaboutHome)
router.get('/' , aboutHomeController.getaboutHome);
router.route("/:id").put(upload.single("image"), aboutHomeController.updateaboutHome)

module.exports = router

