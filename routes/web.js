/*
*
* Web routes will only serve the Web endpoint calls. All the Web routes will be here
*
*/

// Imports - Core
import express from 'express';
// Imports - Controllers
import HomeContoller from "../http/controllers/web/client/HomeController.js";

// Initialize Router
const webRouter = express.Router();

// First Test Route
webRouter.get('/', HomeContoller.index);
webRouter.get('/about', HomeContoller.about);

export default webRouter;