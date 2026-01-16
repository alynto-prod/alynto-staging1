const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String, // URL to image
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    inStock: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Product', productSchema);
