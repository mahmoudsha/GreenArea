const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const User = new Sechema({
    superUser:{
     type:Boolean,
     default:false,
    } ,
    firstName : String,
    lastName : String,
    password : String,
    email : String,
    phone:Number,
    city: String , 
    street: String,
    block : String,
    EventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
})