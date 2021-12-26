const mongoose = require('mongoose')

const {
    Schema
} = mongoose;

const messageRoomSchema = new Schema({
    users:[],
    messages:[],
    
},{
    timestamps: true
  });


module.exports = mongoose.model("MessageRoom",messageRoomSchema)