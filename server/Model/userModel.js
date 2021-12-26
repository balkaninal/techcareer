const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true }, // String is shorthand for {type: String}
    password:{
        type:String,
        required:true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    mobile: { type: String, required: true },
    city: String,
    email: { type: String, required: true },
    isAdmin: Boolean,
    isDonor: Boolean,
    isWaiting: Boolean,
    donorFor: [], //organ, ilik
    waitingFor: [],
    messageRooms:[],
    posts:[]

}, {
    timestamps: true
});

userSchema.methods.matchPassword = async function (enteredPassword) {

    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model("User", userSchema)



/*






*/