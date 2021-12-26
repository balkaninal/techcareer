const express =require('express')
const {
    getUserName,
    authUser,
    getUserProfile,
    getAllUsers,
    getUserById,
    addUser,
    deleteUser
} =require( '../Controller/userController.js')
const protect=require( '../Middleware/authUserMiddleware.js')

const devRouter = express.Router()



devRouter.post('/login',authUser)
devRouter.get('/profile/:id',getUserProfile)
devRouter.get('/',getAllUsers)
devRouter.get('/user/:id',getUserById)
devRouter.get('/name/:id',getUserName)
devRouter.post('/add',addUser)
devRouter.post('/delete/:id',deleteUser)



module.exports=devRouter