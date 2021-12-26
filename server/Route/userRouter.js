const router = require('express').Router();
const moment = require('moment')
const User = require('../Model/userModel')
const bcrypt = require('bcryptjs')
const generateToken = require( '../utils/generateToken.js');


const {
    userValidation,
    updateValidation
} = require('../Helper/validator')

//LOGIN
router.post('/login', async (req, res) => {
    

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isDonor:user.isDonor,
            token: generateToken(user._id)
        })
    }else{
        res.status(401).send('Invalid login attend')
       
    }


})



/// ALL USERS
router.get('/', async (req, res) => {
    const users = await User.find();
    console.log('ready')
    res.send(users)
})

/// ONE USER BY ID
router.get('/:id', async (req, res) => {
    try {
        const userFounded = await (User.findById(req.params.id))
        res.send(userFounded);
    } catch (error) {
        return res.status(400).send({
            msg: error
        })
    }

})

//UPDATE PATIENT
router.put('/:id', async (req, res) => {
    //VALIDATION
    const {
        error
    } = updateValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    /*
        const updateFilter={
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            homeMobile:req.body.homeMobile,
            dateOfBirth:Date.parse(req.body.dateOfBirth),
            medicines:[...req.body.medicines],
            age:moment().diff(req.body.dateOfBirth, 'years').toString()
        }
        */
    const updateFilter = req.body


    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, updateFilter)
        res.send({
            msg: "Succeed",
            updated: updatedPatient
        })
    } catch (error) {
        res.status(400).send('update edilemedi')
    }

})
//DELETE 1 PATIENT
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.send({ msg: "Succeed", deleted: deletedUser })
    } catch (error) {
        res.status(400).send('Silerken bir hatayla karsilasildi')
    }
})



//ADD USER
router.post('/add', async (req, res) => {
    //VALIDATION
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
        password:bcrypt.hashSync(req.body.password,10),
        mobile: req.body.mobile,
        email: req.body.email,
        homeMobile: req.body.homeMobile,
        dateOfBirth: Date.parse(req.body.dateOfBirth),
        isAdmin: req.body.isAdmin,
        isDonor: req.body.isDonor,
        donorFor:req.body.donorFor,
        waitingFor:req.body.waitingFor
        //age: moment().diff(req.body.dateOfBirth, 'years').toString()
    })

    try {
        const addedUser = await user.save();
        res.send(addedUser._id)
    } catch (error) {
        res.status(400).send({
            msg: error
        })
    }

})

module.exports = router