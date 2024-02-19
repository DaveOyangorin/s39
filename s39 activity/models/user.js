const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Users", schema)