const express = require('express')
const router = express.Router()

const contactController = require('./contact.controller')

router.post('/' , contactController.addNewContact);
router.get('/' , contactController.getContacts);
router.get('/:name' , contactController.getContactByName);
router.delete('/:id' , contactController.deleteContact);

module.exports = router
