const asyncHandler = require('express-async-handler')
const User = require('../Model/userModel.js')
const generateToken = require('../utils/generateToken.js')
const moment = require('moment')
const Post = require('../Model/postModel.js')
const { postValidation } = require('../Helper/validator.js')
const mongoose = require('mongoose');




const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find();
    res.send(posts)
})

const getUserPosts = asyncHandler(async (req, res) => {
    const userId=req.params.id
    
})


const getPostById = asyncHandler(async (req, res) => {

    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if (isValid) {
        const postExist = await Post.exists({ _id: req.params.id })

        if (postExist) {

            try {
                const post = await Post.findById(req.params.id)
                res.send(post)

            } catch (error) {
                res.status(400).send({
                    msg: "Post silinirken bir hata meydana geldi",
                    err: error
                })
            }

        } else {
            return res.status(400).send({
                msg: "Boyle Bir Post Yok",

            })
        }
    } else {
        res.status(400).send({
            msg: "Hatali Girdi",

        })
    }


})


const addPost = asyncHandler(async (req, res) => {
    
        const {
            error
        } = postValidation(req.body)
    
    
        if (error) return res.status(400).send(error.details[0].message)
        
    //post share limit !!
   
    
      console.log(req.body)


    if (mongoose.Types.ObjectId.isValid(req.body.publisher)) {


        const post = new Post(req.body)
        
        try {
            const publisherUser = await User.findById(req.body.publisher)
            const addedPost = await post.save();
            
            publisherUser.posts.push({ id: addedPost._id, kind: req.body.kind, type: req.body.type })
            
            publisherUser.posts.filter(post => post.kind =='1').length > 0 ? publisherUser.isDonor = true : publisherUser.isDonor = false
            publisherUser.posts.filter(post => post.kind =='2').length > 0 ? publisherUser.isWaiting = true : publisherUser.isWaiting = false
            
            await publisherUser.save()
            res.status(200).send({id:addedPost._id,info:'Gönderi Başarıyla Yayınlandı'})
        } catch (error) {
            res.status(400).send({
                info: "Yayinlanirken bir hatayla Karsilasildi",
                err: error
            })
        }
    } else {
        return res.status(400).send({ msg: "hatali yayinci" })
    }


})


const deletePost = asyncHandler(async (req, res) => {

    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if (isValid) {
        const postExist = await Post.findById(req.params.id)

        if (postExist) {

            try {
                const publisherId = postExist.publisher
                
                const deletedPost = await Post.findByIdAndDelete(req.params.id)
                const postPublisher = await User.findById(publisherId)
                postPublisher.posts.filter(post => post.kind =='1').length > 0 ? publisherUser.isDonor = true : publisherUser.isDonor = false
                postPublisher.posts.filter(post => post.kind =='2').length > 0 ? publisherUser.isWaiting = true : publisherUser.isWaiting = false
                await postPublisher.save()


                res.send(deletedPost._id)

            } catch (error) {
                res.status(400).send({
                    msg: "Post silinirken bir hata meydana geldi",
                    err: error
                })
            }

        } else {
            return res.status(400).send({
                msg: "Boyle Bir Post Yok",

            })
        }
    } else {
        res.status(400).send({
            msg: "Hatali Girdi",

        })
    }
})


const updatePost = asyncHandler(async (req, res) => {


    const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isValid) {
        const postExist = await Post.exists({ _id: req.params.id })

        if (postExist) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body)
                res.send(updatedPost._id)

            } catch (error) {
                res.status(400).send({
                    msg: "Post silinirken bir hata meydana geldi",
                    err: error
                })
            }

        } else {
            return res.status(400).send({
                msg: "Boyle Bir Post Yok",

            })
        }
    } else {
        res.status(400).send({
            msg: "Hatali Girdi",

        })
    }
})





module.exports = { getUserPosts,addPost, getAllPosts, getPostById, deletePost, updatePost }

