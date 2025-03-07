const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    query: String,
});

module.exports = mongoose.model("Form", formSchema);
