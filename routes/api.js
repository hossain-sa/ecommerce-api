/*
*
* Api routes will only serve the API endpoint calls. All the API routes will be here
*
*/

// Imports - Core
import express from 'express';

// Imports - Custom Codes
import HomeContoller from "../http/controllers/api/client/HomeController.js";

// Imports - Controllers
const apiRouter = express.Router();

// Routes - EntryController routes
apiRouter.get('/api/v1/home', HomeContoller.index);

// Export Routes
export default apiRouter;