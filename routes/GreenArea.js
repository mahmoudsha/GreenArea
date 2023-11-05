const express = require("express");

const router = express.Router();
// return All Event in this GreanArea id ...
router.get("/:id", EventController.getAllEvents);

// Add event to green Area
router.post("/", EventController.addEventToGreenArea);

// delete event from green area 

router.delete('/:id', EventController.deleteEventToGreenArea)
