// const mongoose = require('mongoose');
import mongoose from 'mongoose';

// const mongoURI = 'mongodb+srv://rahad:rahad@cluster0.5y0hy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect(
//     mongoURI,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true
//     },
//     (error) => {
//         if(error) {
//             console.error(`Failed to connect using mongoose. ${error}`)
//         } else {
//             console.info(`Connected to DB server.( ${mongoURI})`)
//         }
//     }
// );

// module.exports = mongoose;

const mongoURI = 'mongodb+srv://rahad:rahad@cluster0.5y0hy.mongodb.net/E-commerce?retryWrites=true&w=majority';

mongoose.connect(mongoURI);

// export {mongoose};
// module.exports = mongoose;   
export { mongoose };


