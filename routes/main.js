const express = require("express");
const routes = express.Router();
const { login, dashboard } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/auth");

routes.route("/dashboard").get(authenticationMiddleware, dashboard);
routes.route("/login").post(login);

module.exports = routes;
