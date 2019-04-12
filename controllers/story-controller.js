// Import the Story model.
const Story =  require('../models/story');

// Instantiate the controller object
const storyController = {};

// Controller method for handling a request for all stories
storyController.findAll = (req, res) => {
  // Uses the findAll method from Story
  Story.findAll()
  .then(stories => {
    // Sends the stories as a JSON object
    res.json({
      message: 'Success',
      data: stories
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single story
storyController.findById = (req, res) => {
  // Story method for finding by id, passes the id as an argument
  Story.findById(req.params.id)
  .then(story => {
    // Sends the story as a JSON object
    res.json({
      message: "Success",
      data: story
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = storyController;
