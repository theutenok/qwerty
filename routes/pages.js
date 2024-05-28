// routes/pages.js
const pagesRouter = require("express").Router();
const { checkCookiesJWT, checkAuth } = require("../middlewares/users");
const { sendIndex, sendDashboard } = require("../controllers/auth");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;
