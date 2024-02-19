// Setup the dependencies
const express = require("express");
const mongoose = require("mongoose");

const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");
// Server setup
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Mongoose Connection
mongoose.connect("mongodb+srv://daveoyangorin:admin1234@batch364.njbbrbz.mongodb.net/");

let db = mongoose.connection;

// Error in connection
db.on("error", console.error.bind(console, "Connection Error!"));

// Once opened
db.once("open", () => console.log("We're connected to the cloud database!"))


//post route
app.use("/post" , postRoute);
app.use("/user" , userRoute);
// Server listening
if(require.main === module){
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

//user route



module.exports = { app, mongoose };