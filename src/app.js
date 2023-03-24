const express = require("express");
const bodyParser = require("body-parser");
const subscriberModel = require("./models/subscribers");
const subscribers = require("./models/subscribers");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Your code goes here

app.get("/", (request, response, next) => {
  response.send({ message: "almabetter  capstone project by Priya Singh" });
});



//get subscribers

app.get("/subscribers", async (req, res) => {
    const subscribers = await subscriberModel.find({});
  
    try {
      //Since no parameters have been provided, it will return all of the items in the database.
      res.send(subscribers);
    } catch (error) {
      //send error if route not found
      res.status(404).send(error);
    }
  });






module.exports = app;
