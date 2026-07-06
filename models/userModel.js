const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

})

const User = mongoose.model("User", userSchema)
// 2nd User: "Create (or retrieve) a model named User using this schema."
// Mongoose uses this name internally.
// It also uses the model name to determine the MongoDB collection name.

module.exports = User;