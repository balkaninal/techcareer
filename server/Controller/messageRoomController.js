const asyncHandler = require('express-async-handler')
const User = require('../Model/userModel.js')
const generateToken = require('../utils/generateToken.js')
const moment = require('moment')
const MessageRoom = require('../Model/messageRoomModel')
const { postValidation } = require('../Helper/validator.js')



const getAllMessageRooms = asyncHandler(async (req, res) => {



    const allRooms = await MessageRoom.find();
    res.send(allRooms)

})


const getMessageRoomById = asyncHandler(async (req, res) => {

    try {
        const messageFounded = await MessageRoom.findById(req.params.id).select("messages -_id")
       
     
        res.send(messageFounded);
        
    } catch (error) {
        return res.status(400).send({
            msg: "Böyle bir Mesaj Yok"
        })
    }


})

const gelAllUserMessages = asyncHandler(async (req, res) => {

    try {
        
        const userId=req.params.id
        console.log(userId)
        const allRooms = await MessageRoom.find({ "users": { $all: [userId] } });

        
        for (const room of allRooms){
            let user1Id=room.users[0]
            let user2Id=room.users[1]
            const user1= await User.findById(user1Id).select("username -_id")
            const user2= await User.findById(user2Id).select("username -_id")
            
            room.users[0]={id:user1Id,name:user1.username}
            room.users[1]={id:user2Id,name:user2.username}

        }
       
        console.log(allRooms)
        res.send(allRooms)
      
    } catch (error) {
        return res.status(400).send({
            msg: "Böyle bir Mesaj Yok"
        })
    }


})


const addMessage = asyncHandler(async (req, res) => {

    /*
    const {
        error
    } = messageValidation(req.body)

    if (error) return res.status(400).send(error.details[0].message)
//check if user already in db*/

    const idOnParams = req.params.id && false
    const message = req.body
    let roomId

    console.log(message)
    if (idOnParams) {
        roomId = idOnParams

        const foundedRoom = await MessageRoom.findById(roomId);
        foundedRoom.messages.push(message)
        foundedRoom.save()
        return res.send(foundedRoom._id)

    }


    try {
       
        const roomExist = await MessageRoom.findOne({ "users": { $all: [message.sender, message.receiver] } })
        if (roomExist) {
           
            return res.status(200).send(roomExist._id)
        } else {
           
            const room = new MessageRoom({
                users: [message.sender, message.receiver],
                messages: [{sender:'admin',receiver:'admin',message:'Sohbet Olusturuldu',time:Date.now()}]

            })
            
            const addedRoom = await room.save()
            const user1 = await User.findById(message.sender)
            const user2 = await User.findById(message.receiver)


            await user1.messageRooms.push(addedRoom._id)
            await user2.messageRooms.push(addedRoom._id)
            await user1.save()
            await user2.save()
            res.send(addedRoom._id)
        }

    } catch (error) {
        res.status(500).send({
            msg: "Mesaj Gonderilirken Bir Hatayla Karsilasildi",
            err: error
        })

    }


})

const getOneRoomMessages = asyncHandler(async (req, res) => {



    const messages = await MessageRoom.findById(req.params.id).select("messages -_id");
    res.send(messages)
})

const getOneRoomUsers = asyncHandler(async (req, res) => {



    const users = await MessageRoom.findById(req.params.id).select("users -_id");
    res.send(users)
})

module.exports = { gelAllUserMessages,addMessage, getAllMessageRooms, getMessageRoomById, getOneRoomMessages, getOneRoomUsers }