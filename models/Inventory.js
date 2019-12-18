const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true,
    },
    thc: {
        type: String,
        required: true
    },
    cbd: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('inventory', InventorySchema);