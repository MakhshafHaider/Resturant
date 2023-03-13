const mongoose = require('mongoose');

const ResturantSchema = mongoose.Schema({
    name: {type : String, require},
    price:{type: Number, require },
    description: {type: String, require},
    image:{type: String, require}
},{
    timestamps: true,
})

const ResturantModel = mongoose.model('Resturant', ResturantSchema);
module.exports = ResturantModel;