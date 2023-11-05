const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const GreenArea = new Sechema({
    name : String,
    city: String , 
    street: String,
    block : String,
    EventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
})