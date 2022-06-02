const fs = require("fs");

const data = fs.readFileSync(__dirname + "/../database/news.json", 'utf-8');

console.log(data);

exports.getTimeStories = (req, res) => {
  res.status(200).json(JSON.parse(data));
};
