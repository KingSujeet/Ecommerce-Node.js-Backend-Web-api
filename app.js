const { json } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//middleware
app.use(bodyParser.json())

require('dotenv/config')

const api = process.env.API_URL

app.get(`${api}/product`, (req, res) =>{

    const product = {
        id : 1,
        name: "Sujeet Thakur",
        image: 'Some_url',
    }

    res.send(product)
})

app.post(`${api}/product`, (req, res) =>{

   const newProduct = req.body

    res.send(newProduct)

})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000')
})
