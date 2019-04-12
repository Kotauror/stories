// Import express
const express = require('express');
// Define the router using the express router
const storyRouter = express.Router();

// Import the storyController
const storyController = require('../controllers/story-controller');

// For each route access the correct controller method

// Request all quotes, send it to the / route
storyRouter.get('/', storyController.findAll);

// Request single quote, send it to the /:id route
storyRouter.get('/:id', storyController.findById);

// Export the router
module.exports = storyRouter;