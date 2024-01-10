const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", postRoutes);

module.exports = app;
