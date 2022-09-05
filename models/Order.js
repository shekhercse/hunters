const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: {type: String,equired:true},
    products: [{productId: {type: string},
        quantity: {type: Number,default: 1}    
    
    }],
   address: {type: String, required: true},
   amount:  {type: String, required: true},
   status: {type: String, default: 'pending',required: true},

  }); {timestamps: true};


  export default mongoose.model("Order", OrderSchema);