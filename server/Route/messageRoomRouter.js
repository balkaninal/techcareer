const express = require('express')
const {gelAllUserMessages,addMessage, getAllMessageRooms, getMessageRoomById,getOneRoomMessages,getOneRoomUsers } = require('../Controller/messageRoomController')
const protect = require('../Middleware/authUserMiddleware.js')
const isValidId = require('../Middleware/isValidId')
const messageRoomRouter = express.Router()


messageRoomRouter.route('/').get(getAllMessageRooms)
messageRoomRouter.route('/:id').get(getMessageRoomById)
messageRoomRouter.route('/:id/messages').get(getOneRoomMessages)
messageRoomRouter.route('/:id/users').get(getOneRoomUsers)
messageRoomRouter.route('/add/:id?').post(addMessage)
messageRoomRouter.route('/user/:id').get(gelAllUserMessages)


module.exports = messageRoomRouter