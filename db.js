
const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/resturants';
mongoose.connect( mongoURL,
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.on("connected",  ()=> {
  console.log("Connected successfully");
});

module.exports = mongoose;