/************************************
 * UNH Bootcamp
 * 
 * @author Jennifer Grace
 * 
 * Friendface Api Routes
 ************************************/

 // Displays all possible friends
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Create New Friend
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  // remove spaces from newFriend
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

//   friends.push(newFriend);

//   res.json(newFriend);
});