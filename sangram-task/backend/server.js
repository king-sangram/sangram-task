const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.use("", require("./routes/newsRoutes"));

app.listen(5000, err => {
  if (err) throw err;
  console.log("Server is running ");
});
