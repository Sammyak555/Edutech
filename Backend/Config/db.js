const mongoose = require('mongoose')
// require('dotenv').config()
require("dotenv").config()
const url =process.env.url
const connection = mongoose.connect(url)

module.exports={
    connection
}