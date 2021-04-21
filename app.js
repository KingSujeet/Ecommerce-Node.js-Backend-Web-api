const { json } = require('express')
const express = require('express')
const mongoose = require('mongoose')
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
const productsRouter = require('./routers/products')
const categoriesRouter = require('./routers/categories')
const ordersRouter = require('./routers/orders')
const usersRouter = require('./routers/users')

const api = process.env.API_URL

app.use(`${api}/product`,productsRouter)
app.use(`${api}/category`,categoriesRouter)
app.use(`${api}/order`,ordersRouter)
app.use(`${api}/user`,usersRouter)

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('mongodb db connected....')
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000')
})
