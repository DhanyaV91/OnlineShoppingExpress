const mongoose = require('mongoose');

const ShopSchema = mongoose.Schema(
    {
        prod_id:{
            type: Number,
            required: true
        },
        prod_name:{
            type: String,
            required: true
        },        
        prod_type:{
            type: String,
            required: true
        },    
        sizes:{
            type: Array,
            required: true
        },            
        price:{
            type: Number,
            required: true
        }             
    }
);

module.exports = mongoose.model('shop', ShopSchema);