const express = require("express");
const { handlegenerateNewShortURL } = require("../controllers/url")

const router = express.Router();

router.post("/", handlegenerateNewShortURL);

module.exports = router;