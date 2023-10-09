const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    Discount: {
        type: Number,
    }
  
},  { collection: "Product", versionKey: false })


  
const Product = mongoose.model('Product', productSchema);


module.exports = Product