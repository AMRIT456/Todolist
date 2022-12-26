//require mongoose
const mongoose = require("mongoose");
//connecting to db
mongoose.connect("mongodb://localhost/tododb");
//setting up connection
const db = mongoose.connection;
//checking up error for connecting db
db.on("error", console.error.bind(console, "Error Connecting "));
// connection successfully
db.once("open", function () {
  console.log("successfully connected to db");
});
