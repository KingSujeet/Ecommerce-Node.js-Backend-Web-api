const { json } = require('express')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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
