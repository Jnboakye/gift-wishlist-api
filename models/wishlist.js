import joi from "joi";
import { Schema, model } from "mongoose";

const wishlistSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    storeLink: { type: String, required: true }
}, { timestamps: true })


export const WishlistModel = model('Wishlist', wishlistSchema);