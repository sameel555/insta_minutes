const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const inputRoute = require('./routes/input.routes')

const cors = require('cors')
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log('Database is connected')
})

app.use(express.json())
app.use(cors())
app.use('/', inputRoute)

app.listen(3333, () => {
  console.log('Server is Listening on port 3333')
})
