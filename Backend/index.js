const express = require('express')
const cors = require('cors')
const { connection } = require('./Config/db')
// require('dotenv').config()
const app=express()
app.use(cors())

app.use(express.json())

app.listen(5000,async(req,res)=>{
    try{
        await connection
        console.log("Connected to db")
    }catch(err){
        console.log(err)
    }
    console.log(`Running on port 5000`)
})