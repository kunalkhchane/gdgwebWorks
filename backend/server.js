const express = require("express");
const mongoose = require("mongoose");
const Form = require("./model");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.post("/submit", async (req, res) => {
    const { name, email, password, query } = req.body;

    const form = new Form({
        name,
        email,
        password,
        query
    });

    try {
        await form.save();
        res.status(200).json({ message: "Data Submitted Successfully" });
    } catch (err) {
        res.status(400).json({ message: "Failed to Submit Data" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
