const express = require('express')

const router = express.Router();

// update user address
router.update('/adress', userController.updateAdress)
// update user profile
router.update('/user', userController.userProfileUpdate)
// get user nearst Green Area 
router.get('/greenArea' , userController.nearestGreenArea)
// get all Event user will attends
router.get('/events', userController.getAllEvents)


