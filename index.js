const express = require("express");
const mongoose = require("mongoose");
const { URL } = require("./models/url");
const { connectMongoDB } = require("./connection");

const urlRoute = require("./routes/url");
const app = express();
const PORT = 8001;

connectMongoDB("mongodb://127.0.0.1:27017/URL-Shortner")
.then(() => console.log(`Connected to MongoDB.`))

app.use(express.json());

app.use("/url", urlRoute);

app.get('/:shortId', async (req,res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },
    {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    }
    );
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => {
    console.log(`Server started at PORT: 8001`);
})