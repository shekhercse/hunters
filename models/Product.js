const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    slug: {type: String, required:true, unique:true},
    desc: {type: String,required:true},
    image: {type: String,required:true},
    category: {type: String,required:true},
    size: {type: String},
    color: {type: String},
    price: {type: String,required:true},
    availableQty: {type: String,required:true},


    




  

  }); {timestamps: true};


  export default mongoose.model("Product", ProductSchema);