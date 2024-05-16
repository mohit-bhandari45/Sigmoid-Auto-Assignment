const express = require('express')
const router = express.Router()
const { foodOrder, getItems } = require("../controllers/controller")
const cors=require("cors")

router.use(express.json())
router.use(cors())

router.get("/getitems", getItems)
router.post("/handleadd", foodOrder)

module.exports = router