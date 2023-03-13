const express = require('express');
const fastFood = require('./models/Resturant');
const app = express();
app.use(express.json());
const db = require("./db");
const foodRoute = require('./routes/foodRoute');

app.use('/api/food', foodRoute);

app.get("/", (req,res) => {
    res.send("Server Working");
})

// app.get("/getFood", async (req, res) => {
//     try {
//       const data = await fastFood.find({});
//       console.log(data);
//       res.send(data);
//     } catch (err) {
//       console.log(err);
//     }
//   });
  
const port = process.env.PORT || 8000;
app.listen(port, () => "Server running on the port");