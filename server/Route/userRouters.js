const express = require('express')
const {
    authUser,
    getUserProfile,
    getAllUsers,
    getUserById,
    addUser
} = require('../Controller/userController.js')
const protect = require('../Middleware/authUserMiddleware.js')

const router = express.Router()



router.post('/login', authUser)
router.route('/profile/:id').get(getUserProfile)
router.route('/').get(getAllUsers)
router.route('/:id').get(getUserById)
router.route('/add').post(addUser)


module.exports = router