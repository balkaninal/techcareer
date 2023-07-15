
const asyncHandler = require('express-async-handler')
const User = require('../Model/userModel.js')
const generateToken = require('../utils/generateToken.js')
const moment = require('moment')
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const { userValidation, updateValidation } = require('../Helper/validator')
const Post = require('../Model/postModel.js')

// @AUTH
// POST api user login
//@Access Public



const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {

        res.json({
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isDonor:user.isDonor,
            isWaiting:user.isWaiting,
            mobile:user.mobile,
            messageRooms:user.messageRooms,
            posts:user.posts,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('invalid login attend')
    }
})

// @GETUSERPROF
// GET api users profile
//@Access Private

const getUserProfile = asyncHandler(async (req, res) => {

    const isValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if (isValid) {


        const user = await User.findById(req.params.id)
        const allPosts = await Post.find({ "publisher": { $all: [req.params.id] } });
        
        if (user) {
            res.json({
                _id: user._id,
                username:user.username,
                name: user.name,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                mobile: user.mobile,
                isAdmin: user.isAdmin,
                isDonor: user.isDonor,
                isWaiting: user.isWaiting,
                donorFor: user.donorFor,
                waitingFor: user.waitingFor,
                messageSub: user.messageSub,
                city:user.city,
                bloodType:user.bloodType,
                createdAt: user.createdAt,
                posts:allPosts
            })
        } else {
            res.status(404)
            throw new Error('User Not Found')
        }
    } else {
        res.status(400).send({
            msg: "Hatali Girdi",

        })
    }
})


const getUserById = asyncHandler(async (req, res) => {

    const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isValid) {
        const userExist = await User.exists({ _id: req.params.id })

        if (userExist) {

            try {
                const user = await User.findById(req.params.id)
                res.send(user)

            } catch (error) {
                res.status(400).send({
                    msg: "Kullanıcı bulunurken bir hata meydana geldi",
                    err: error
                })
            }

        } else {
            return res.status(400).send({
                msg: "Boyle Bir Kullanıcı Yok",

            })
        }
    } else {
        res.status(400).send({
            msg: "Hatali Girdi",

        })
    }


})

const getAllUsers = asyncHandler(async (req, res) => {

    const users = await User.find().select("-password");
    console.log('ready')
    res.send(users)

})





const addUser = asyncHandler(async (req, res) => {

    const {
        error
    } = userValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    //check if user already in db


    const userExist = await User.findOne({
        email: req.body.email
    })
    if (userExist) return res.status(400).send({
        msg: "Bu Kullanici Zaten Kayitli"
    })


    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        mobile: req.body.mobile,
        email: req.body.email,
        dateOfBirth: Date.parse(req.body.dateOfBirth),
        isAdmin: false,
        isDonor: false,
        isWaiting: false,
        donorFor: [],
        waitingFor: [],
        messageRooms: [],
    })

    try {
        const addedUser = await user.save();
        res.send(addedUser._id)
    } catch (error) {
        res.status(400).send({
            msg: "Kullanici Kaydi Yapilirken Bir Hatayla Karsilasildi",
            err: error
        })
    }


})


const deleteUser = asyncHandler(async (req, res) => {

    const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
    if (isValid) {
        const userExist = await User.exists({ _id: req.params.id })

        if (userExist) {

            try {
                const deletedUser = await User.findByIdAndDelete(req.params.id)
                res.send(deletedUser._id)

            } catch (error) {
                res.status(400).send({
                    msg: "Kullanıcı silinirken bir hata meydana geldi",
                    err: error
                })
            }

        } else {
            return res.status(400).send({
                msg: "Boyle Bir Kullanıcı Yok",

            })
        }
    } else {
        res.status(400).send({
            msg: "Hatali Girdi",

        })
    }



})


const getUserName = asyncHandler(async (req, res) => {
    try {
        const founded = await User.findById(req.params.id).select("username -_id")
        res.send(founded.username)
    } catch (error) {
        res.status(400).send({err:"Bir Hatayla Karsilasildi"})
    }


})

module.exports = {
    getUserName,
    authUser,
    getUserProfile,
    getAllUsers,
    getUserById,
    addUser,
    deleteUser
}