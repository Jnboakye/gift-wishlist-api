import { Router } from "express";
import { addGift, deleteWishlist, getWishlists, updateWishlist } from "../controllers/wishlists.js";

// Creating a router for the wishlist
const wishlistRouter = Router();

// Defining routes
wishlistRouter.post('/wishlists', addGift)

wishlistRouter.get('/wishlists', getWishlists)

wishlistRouter.update('/wishlists', updateWishlist)

wishlistRouter.delete('/wishlists', deleteWishlist)

// Exporting WishlistRouter

export default wishlistRouter