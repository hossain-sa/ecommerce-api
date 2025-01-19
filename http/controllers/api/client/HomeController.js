/*
 * HomeController
 * This is the entrance to the Server APIs
 *
 */

// Imports - Core
import validationResult from "express-validator";

// Create A Container for the Controller
const HomeContoller = {};


// All methods of Home Controller

// Index Method
HomeContoller.index = (req, res) => {
  res.status(200).json({ message: "Hello, Welcome to API" });
};

// Export the HomeController
export default HomeContoller;