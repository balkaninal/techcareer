const express = require('express')
const { getUserPosts,addPost, getAllPosts, getPostById, deletePost, updatePost } = require('../Controller/postController.js')
const protect = require('../Middleware/authUserMiddleware.js')
const isValidId = require('../Middleware/isValidId')
const postRouter = express.Router()




postRouter.route('/').get(getAllPosts)
postRouter.route('/:id').get(getPostById)
postRouter.route('/add').post(addPost)
postRouter.route('/update/:id').post(updatePost)
postRouter.route('/delete/:id').post(deletePost)
postRouter.route('/user/:id').get(getUserPosts)



module.exports = postRouter