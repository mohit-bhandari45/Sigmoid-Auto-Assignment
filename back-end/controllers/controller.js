const { FoodItems } = require("../models/fooditem.js")

const sortItems = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let food = await FoodItems.findOne({ "image": arr[i].image });
        if (!food) {
            let item = arr[i];
            let quantity = 0;
            for (let j = i; j < arr.length; j++) {
                if (arr[j].image == item.image) {
                    quantity++;
                }
            }
            let foodcreate = { ...arr[i], "quantity": quantity };
            await FoodItems.create(foodcreate)

        } else {
            continue
        }
    }
}


const foodOrder = async (req, res) => {
    await sortItems(req.body)
    
    res.json({success:true})
}

const getItems=async (req,res)=>{
    let allitems = await FoodItems.find({})
    res.json(allitems)
}

module.exports = {
    foodOrder,
    getItems
}