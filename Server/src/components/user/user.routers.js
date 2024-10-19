const express = require('express')
const router = express.Router()

const userController = require('./user.controller')

router.post('/' , userController.addNewUser);
router.get('/' , userController.getUsers);
router.get('/:id' , userController.getUserByID);
router.put('/:id' , userController.updateUser);
router.delete('/:id' , userController.deleteUser);
router.post('/login' , userController.login)

module.exports = router
