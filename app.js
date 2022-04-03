require('dotenv').config();
const eiaKey = process.env.API_KEY;
const express = require("express");
const app = express();
const path = require('path');
var bodyParser = require("body-parser");
const { ALL } = require('dns');


app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

let api1, api2, api3 = "";
let state1, state2, state3 = "";
app.get('/', function(req, res) {
  let api1='none';
  res.render('index.html' , { api1: api1, api2: api2, api3: api3, state1: state1, state2: state2, state3: state3 });
});



app.post('/', function(req, res) {
  let obj ={
    "Alabama":"AL",
    "Alaska":"AK",
    "Arizona":"AZ",
    "Arkansas":"AR",
    "California":"CA",
    "Colorado":"CO",
    "Connecticut":"CT",
    "Delaware":"DE",
    "Florida":"FL",
    "Georgia":"GA",
    "Hawaii":"HI",
    "Idaho":"ID",
    "Illinois":"IL",
    "Indiana":"IN",
    "Iowa":"IA",
    "Kansas":"KS",
    "Kentucky":"KY",
    "Louisiana":"LA",
    "Maine":"ME",
    "Maryland":"MD",
    "Massachusetts":"MA",
    "Michigan":"MI",
    "Minnesota":"MN",
    "Mississippi":"MS",
    "Missouri":"MO",
    "Montana":"MT",
    "Nebraska":"NE",
    "Nevada":"NV",
    "New Hampshire":"NH",
    "New Jersey":"NJ",
    "New Mexico":"NM",
    "New York":"NY",
    "North Carolina":"NC",
    "North Dakota":"ND",
    "Ohio":"OH",
    "Oklahoma":"OK",
    "Oregon":"OR",
    "Pennsylvania":"PA",
    "Rhode Island":"RI",
    "South Carolina":"SC",
    "South Dakota":"SD",
    "Tennessee":"TN",
    "Texas":"TX",
    "Utah":"UT",
    "Vermont":"VT",
    "Virginia":"VA",
    "Washington":"WA",
    "West Virginia":"WV",
    "Wisconsin":"WI",
    "Wyoming":"WY"
  };
  let state1 = req.body.state1;
  let state2 = req.body.state2;
  let state3 = req.body.state3;

  console.log('***'+state1);

  for (var key of Object.keys(obj)) {
   if (key = state1){
    api1 = `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=EMISS.CO2-TOTV-TT-TO-${obj[key]}.A`
   
  }
   if (key = state2){
   api2 = `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=EMISS.CO2-TOTV-TT-TO-${obj[key]}.A`
   console.log('***'+ api2) 
  }
   if (key = state3){
   api3 = `https://api.eia.gov/series/?api_key=${eiaKey}&series_id=EMISS.CO2-TOTV-TT-TO-${obj[key]}.A`
   }
  
}

res.render('index.html' , { api1: api1, api2: api2, api3: api3, state1: state1, state2: state2, state3: state3 })
});

  
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
  

 