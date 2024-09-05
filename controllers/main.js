const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequest("Please provide username and password");
  }
  // just for demo, normally provided by DB
  const id = new Date().getDate();
  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value
  // keep JWT_SECRET in .env file
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(200).json({ msg: "User created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100); //0-99
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your secret code ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
