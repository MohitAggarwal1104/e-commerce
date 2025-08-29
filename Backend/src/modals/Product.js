const { default: mongoose } = require("mongoose");

const mongoose = require(mongoose)

const ProductSechema = new mongoose.Schema({
    ProductName:{
        type : String,
        required : [true,'Product name is required'],
        trim : true
    },
    description:{
        type : String,
        required : [true,'Product description is reQuired'],
        trim : true
    },
    Price:{
        type:Number,
        required : [true,'Price Of Product is required'],
        min : [0,'Price cannot be Negative']
    },
    Category:{
        type : String,
        required  : [true,'Category of product is reqired']
    },
    Brand:{
        type : String
    },
    Stoke:{
        type : Number,
        required : [true,'Stock of Product is Required'],
        min : [0,'Stock cannot be Negative']
    },
    Rating : {
        type : Number,
        default : 0,
        min : 0,
        max : 5
    },
    Image : [{
        url:{type :String},
        alt : {type : String}
    }],
    CratedAt : {
        type : Date,
        default : Date.now
    },
    upDatedAt : {
        type : Date,

    }
});

// Export the model
module.exports = mongoose.model('Product', ProductSechema);