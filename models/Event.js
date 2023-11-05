const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const vistor = new Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      
})
const Reviews = new Schema({
  UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating:{
      type:Number,
      min:1,
      max:5
    },
    review:String,
    
})

const Event = new Sechema({
    EventName : String,
    date:Date,
    city: String , 
    street: String,
    block : String,
    eventType:String,
    GreenAreaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'greanArea',
      },
    reviews:[Reviews],
    vistors : [vistor]
},{
  timeStamps:true
})