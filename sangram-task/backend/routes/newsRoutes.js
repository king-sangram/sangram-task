const express = require("express");
const { getTimeStories } = require("../controllers/newsController");

const router = express.Router();

router.route("/getTimeStories").get(getTimeStories);

module.exports = router;
