const express = require("express");
const router = express.Router();

const Resturant =  require('../models/Resturant');


router.get("/getFood", async (req, res) => {
    try {
        const Food = await Resturant.find({});
        res.send(Food);
    } catch (error) {
        return  res.status(400).json({message: error});
    }
}) 
module.exports = router;