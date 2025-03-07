const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    query: String,
});

module.exports = mongoose.model("Form", formSchema);
