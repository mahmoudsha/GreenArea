const express = require('express')

const router = express.Router()

// Calculate AVG for Evnts happen in green Area 
router.get('/:id', analyticsController.eventAverage)

// Calculate the user Attends per events

router.get('/:eventId' , analyticsController.eventAttendsAverage )

// Calculate the AVG of Green Area per city so we can know if we need more green Area to open or close
router.get('/:city' , analyticsController.greenAreaAvgInCity)

// Calculate Event per month 

router.get('/:month' ,analyticsController.eventAvgPerMonth )