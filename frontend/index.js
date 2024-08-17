const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", async (request, response) => {
    response.render("homepage");
  });


app.listen(3000, () => {
    console.log("Started express server at port 3000");
  });