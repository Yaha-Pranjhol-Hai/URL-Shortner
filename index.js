const express = require("express");
const mongoose = require("mongoose");
const { connectMongoDB } = require("./connection");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

app.use(express.json());

app.use("/url", urlRoute);

connectMongoDB("mongodb://127.0.0.1:27017/URL-Shortner")
.then(() => console.log(`Connected to MongoDB.`))


app.listen(PORT, () => {
    console.log(`Server started at PORT: 8001`);
})