// Creating a model for gifts wishlist

import { WishlistModel } from "../models/wishlist_model.js";



export const addGift = async (req, res, next) => {
    try {
        // Add gifts 


        // Save products list in the database 
        const result = await WishlistModel.create(req.body);

        // Return response
        res.json(result);
    } catch (error) {
        next(error);
    };

}

export const getWishlists = async (req, res,) => {
    try {
        //fetch wishlits from database
        const result = await WishlistModel.find();

        // Return response 
        res.json(results);
    } catch (error) {
        next(error);
    }
}

export const updateWishlist = (req, res) => {
    res.send(`Wishlist with id ${req.params.id} updated`)
}

export const deleteWishlist = (res, req) => {
    res.send(`Wishlist with id ${req.params.id} deleted!`)
}