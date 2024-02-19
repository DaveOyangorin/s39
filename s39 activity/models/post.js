const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: String,
    content: String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", schema)