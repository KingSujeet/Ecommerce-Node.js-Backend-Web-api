const express = require('express')
const { Order } = require('../models/order')
const router = express.Router()

router.get('/', async (req, res) =>{

    const orderList = await Order.find()

    if(!orderList){
        res.status(500).json({
            error: "Some error occured, please try again after some time",
            success: false
        })
    }
    res.status(200).json(orderList)
})

router.post('/', (req, res) =>{

   const order = new Order({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
   })

   order.save().then((createdProduct=>{
       res.status(201).json(createdProduct)
   })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
   })

})

module.exports = router