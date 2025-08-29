const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who owns the cart
        required: true,
        unique: true // Each user has only one cart
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1,
                default: 1
            },
            price: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

// Pre-save hook to update total price and timestamp
cartSchema.pre('save', function(next) {
    this.totalPrice = this.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Cart', cartSchema);
