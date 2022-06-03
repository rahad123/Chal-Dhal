// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://rahad:rahad@cluster0.5y0hy.mongodb.net/E-commerce?retryWrites=true&w=majority';

mongoose.connect(mongoURI);
   
export { mongoose };


