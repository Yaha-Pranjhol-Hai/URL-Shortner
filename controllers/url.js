const { URL } = require("../models/url");
const shortid = require('shortid');


async function handlegenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: "URL is required."});
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visiHistory: [],
    });

    return res.json({ id: shortID});
};

module.exports = {
    handlegenerateNewShortURL,
}