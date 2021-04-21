const express = require('express')
const { User } = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) =>{

    const userList = await User.find()

    if(!userList){
        res.status(500).json({
            error: "Some error occured, please try again after some time",
            success: false
        })
    }
    res.status(200).json(userList)
})

router.post('/', (req, res) =>{

   const user = new User({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
   })

   user.save().then((createdProduct=>{
       res.status(201).json(createdProduct)
   })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
   })

})

module.exports = router