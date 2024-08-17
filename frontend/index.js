const express = require("express");
const http = require('http');
const axios = require('axios');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("homepage.ejs");
  });

app.listen(3000, () => {
    console.log("Started express server at port 3000");
  });