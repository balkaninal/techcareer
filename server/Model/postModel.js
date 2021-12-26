const mongoose = require('mongoose')

const {
    Schema
} = mongoose;

const postSchema = new Schema({
    name:String,
    title:String,
    publisher:String,
    mobile:String,
    desc:String,
    kind:String,
    type:String,
    organ:String,
    city:String,
    documents:[]
},{
    timestamps: true
  });


module.exports = mongoose.model("Post",postSchema)