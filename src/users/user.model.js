// const mongoose  = require('../db/db');
// const{ Schema } = mongoose;
// const objectID = Schema.objectID;
import { mongoose } from '../db/db.js'

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            // required : true,
            trim: true
        },
        email : {
            type : String,
            // required : true,
            trim: true
        },
        password : {   
            type : String,
            // required : true,
            trim: true   
        }
    },
    { timestamps: true, versionKey: false, toJSON: { virtuals: true }, toObject: { virtuals: true} }
);

// module.exports = mongoose.model('User', userSchema);   
userSchema.virtual('user-email').get(function() {
    return this.username + ' ' + this.email;
    // return `${this.username} ${this.email}`
})
const User = mongoose.model('User', userSchema);
export { User };



