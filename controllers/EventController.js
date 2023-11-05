const Event = require('../models/Event');

const getAllEventDetales = async (req, res, next) => {
  const { id } = req.params;  
  try {
    const Event = await Event.findById(id);
    return res.json({ data: Event });
  } catch (err) {
    return next(new CustomError(err.message, 500));
  }
};

const addVistor = async (req, res, next) => {
    const { id } = req.params;  
    try {
      const Event = await Event.findById(id);  
      const vistor = await Event.find({userId:req.user.id});
      if(!vistor){
       Event.vistors.push(vistor)
       await Event.save()
      }

      if(vistor){
        return res.json({"message":"User is already in Event"})
      }
      return res.json({ data: Event });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };
  const deleteVistor = async (req, res, next) => {
    const { id } = req.params;  
    try {
       const deleteVistor = await Event.findOneAndUpdate(
        {
          _id: EventId,
          'vistors.userId': req.user.id,
        },
        {
          $pull: {
            vistors: { userId: req.user.id },
          },
        },
        { new: true }
      );
  
      return res.sendStatus(204)
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };

  const addReview = async(req, res, next)=>{
    try {
      const Event = await Event.findById(id);  
      const review = await Event.find({userId:req.user.id});
      if(!review){
       Event.reviews.push(review)
       await Event.save()
      }
      return res.status(201).json({data:review})
    } catch (err) {
        return next(new CustomError(err.message, 500));   
    }
  }
  
  
