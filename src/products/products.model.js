// const mongoose  = require('../db/db');
// const{ Schema } = mongoose;
// const objectID = Schema.objectID;
import { mongoose } from '../db/db.js'
import { enumValue } from './products.enum.js'
const productSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            // required : true,
            trim: true
        },
        desc : {
            type : String,
            // required : true,
            trim: true
        },
        priceType : {   
            type : String,
            // required : true,
            enum: enumValue.priceTypes,
            trim: true   
        },
        productType : {   
            type : String,
            enum: enumValue.productTypes,
            // required : true,
            trim: true   
        },
        quantity : {   
            type : String,
            // required : true,
            trim: true   
        },
        isPublished : {   
            type : String,
            // required : true,
            trim: true   
        },
        userId: String,
        faq: [
            {
                question: {
                    type: String,
                    trim: true,
                },
                answer: {
                    type: String,
                    trim: true,
                } 
            }
        ]
    },
    { timestamps: true, versionKey: false, toJSON: { virtuals: true }, toObject: { virtuals: true} }
);

// module.exports = mongoose.model('User', userSchema);   
const Product = mongoose.model('Product', productSchema);
export { Product };



