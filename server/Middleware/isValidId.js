
const mongoose = require('mongoose');
const isValidId = async (req,res,next) =>{

    if(req.params.id && mongoose.Types.ObjectId.isValid(req.params.id)){
        next()
    }
    else{
        return res.status(404).send({msg:"Hatali Id"})
    }

}

module.exports= isValidId