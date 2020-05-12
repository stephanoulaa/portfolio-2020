var express = require('express')
var app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

app.use(express.static('./'))




app.listen(8080)