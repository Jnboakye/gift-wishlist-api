import { Router } from "express";
import { addGift, deleteWishlist, getWishlists, updateWishlist } from "../controllers/wishlists_controller.js";

// Creating a router for the wishlist
const wishlistRouter = Router();

// Defining routes
wishlistRouter.post('/wishlists', addGift)

wishlistRouter.get('/wishlists', getWishlists)

wishlistRouter.patch('/wishlists', updateWishlist)

wishlistRouter.delete('/wishlists', deleteWishlist)

// Exporting WishlistRouter

export default wishlistRouter