// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the stories database.
// Specifically, the stories table.
const Story = {};

// Define methods for the Story object

// Returns all stories from the table
Story.findAll = () => {
  return db.query(
    `SELECT * FROM stories`
  );
};

// Return one story with the specific id
Story.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM stories
      WHERE id = $1
    `,
    [id]
  );
};

// Export the Story object
module.exports = Story;