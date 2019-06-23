/************************************
 * UNH Bootcamp
 * 
 * @author Jennifer Grace
 * 
 * Friendface Api Routes
 ************************************/

 // file to store and retrieve friend data
var friendData = require("../data/friends");

// routing
module.exports = function (app) {

  // Displays all possible friends
  app.get("/api/friends", function (req, res) {
    console.log(friends);
    // return res.json(friends);
  });

  // Create New Friend
  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    // remove spaces from newFriend
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

      friendsData.push(newFriend);

      // res.json(newFriend);
  });
};

