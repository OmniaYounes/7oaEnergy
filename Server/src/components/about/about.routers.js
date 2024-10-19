const express = require('express')
const router = express.Router()
const upload = require('../../utilts/multerConfig')

const aboutController = require('./about.controller')

router.route("/about").post(upload.single("image"), aboutController.addNewAbout)
router.get('/' , aboutController.getAbout);
router.route("/:id").put(upload.single("image"), aboutController.updateAbout)

module.exports = router

