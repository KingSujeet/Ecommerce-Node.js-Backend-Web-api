const { json } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("API first get request")
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000')
})
