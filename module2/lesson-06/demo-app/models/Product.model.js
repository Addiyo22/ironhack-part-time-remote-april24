const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    avatarUrl: {
        type: String,
        default: 'images/default-product.png'
    }
  }, {timestamps:true});
   
  const Product = mongoose.model('Product', productSchema);
   
  module.exports = Product;