const express = require('express')
const mongoose=require("mongoose")
const router=require("./routes/router")
require("dotenv").config();
const app = express()
const port = 3000

mongoose.connect(process.env.MONGO_URL)

app.use("/",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})