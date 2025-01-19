/*
 * HomeController
 * This is the entrance to the Server APIs
 *
 */

// Imports - Core

// Create A Container for the Controller
const HomeContoller = {};


// All methods of Home Controller

// Index Method
HomeContoller.index = (req, res) => {
  res.render("home/index", {title: "Home"});
};

HomeContoller.about = (req, res) => {
  res.render("home/about", {title: "About"});
};

// Export the HomeController
export default HomeContoller;