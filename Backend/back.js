const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(express.json());
const fs = require("fs");

let users = []; // temporary DB
let wines = [];
//  Signup
app.post("/signup", (req, res) => {
  const { email, pass } = req.body;
  users.push({ email, pass });
  fs.writeFileSync("user.json", JSON.stringify(users));
  res.json({ message: "User Registered" });
});

//  Login
app.post("/login", (req, res) => {
  const { email, pass } = req.body;

  const user = users.find((u) => u.email === email && u.pass === pass);

  if (user) {
    res.json({ message: "Login Success" });
  } else {
    res.json({ message: "Invalid Credentials" });
  }
});

//  Wine Prediction
app.post("/predict", async (req, res) => {
  try {
    const data = req.body;
    wines.push(data);
    console.log("Saved Wine Data:", wines);
    fs.writeFileSync("wine.json", JSON.stringify(wines));
    //flask api call
    const response = await axios.post("http://127.0.0.1:5000/predict", data);
    res.json(response.data);
  } catch (e) {
    res.json({ e: e.message });
  }
});
app.listen(2000, () => {
  console.log("Server running");
});
