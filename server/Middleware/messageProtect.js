const jwt =require('jsonwebtoken')
const expressAsyncHandler= require( 'express-async-handler')
const User =require( '../Model/userModel')
const MessageRoom =require( '../Model/messageRoomModel')

const messageProtect = expressAsyncHandler (async (req,res,next) =>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('AppToken')){

        try {
            const roomId = req.params.id
            const users = MessageRoom.findById(roomId).users
            token=req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            if(users.includes(decoded.id)){
                next()
            }else{
                return res.status(200).send({msg:"Bu Islemi Yapmaya Yetkiniz Yok"})
            }

            
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Yetkisiz Islem, Token Gecersiz')
        }
        
    }
    if(!token){
        res.status(401)
        throw new Error('Buraya Erisemezsiniz, Token Bulunamadi')
    }
    

})

module.exports= messageProtect