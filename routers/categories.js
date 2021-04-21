const express = require('express')
const { Category } = require('../models/category')
const router = express.Router()

router.get('/', async (req, res) =>{

    const categoryList = await Category.find()

    if(!categoryList){
        res.status(500).json({
            error: "Some error occured, please try again after some time",
            success: false
        })
    }
    res.status(200).json(categoryList)
})

router.post('/', (req, res) =>{

   const category = new Category({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
   })

   category.save().then((createdProduct=>{
       res.status(201).json(createdProduct)
   })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
   })

})

module.exports = router