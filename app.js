require("dotenv").config();
require("express-async-errors");
const connectDB = require("./db/connect");
const routes = require("./routes/main");
const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>JWT-Basics</h1>");
});

app.use("/api/v1", routes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  // connectDB
  await connectDB(process.env.MONGO_URI);
  console.log("Connected to the DB");
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};

start();
