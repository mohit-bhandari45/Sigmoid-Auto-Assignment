const express = require('express')
const mongoose=require("mongoose")
const router=require("./routes/router")
const app = express()
const port = 3000

mongoose.connect("mongodb://localhost:27017/fooditems")

app.use("/",router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})