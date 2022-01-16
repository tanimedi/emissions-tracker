require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
  res.render('index.html');
});

  
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
  
 