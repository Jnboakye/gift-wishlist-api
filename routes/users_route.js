import { Router } from "express";
import { registerUser } from "../controllers/users_controller.js";


// creating mote routesn
const notesRouter = Router();

//Defining the routes

notesRouter.post('/users', registerUser)

//exporting router
export default notesRouter;
