import express from 'express';
import wishlistRouter from './routes/wishlists.js';
import mongoose from 'mongoose';

// Creating a databse connection

await mongoose.connect(process.env.MONGO_URI);

// Create express app
const app = express();

// Use global middlewares
app.use(express.json());



// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
})
