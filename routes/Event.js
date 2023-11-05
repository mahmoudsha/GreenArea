const express = require('express');

const router = express.Router();
// return this Event details
router.get('/:id',EventController.getAllEventDetales )
// add vistor to an events 
router.post('/:id',EventController.addVistor)

// delete vistor from our event 

router.delete('/:id', EventController.deleteVistor)

// add review to events by vistor 

router.post('/:id',EventController.addReview)