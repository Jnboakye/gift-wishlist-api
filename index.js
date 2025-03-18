import express from 'express';
import wishlistRouter from './routes/wishlists_route.js';
import mongoose from 'mongoose';

// Creating a databse connection

await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database is connected')
}).catch((error) => {
    console.log(error)
})
    ;


// Create express app
const app = express();

// Use global middlewares
app.use(express.json());



// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server is listening on port ${port}`);
})
