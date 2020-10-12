const express = require("express");

const router = express.Router();

const carRoute = require("./cars");

module.exports = (params) => {
  router.use("/carlist", carRoute(params));

  return router;
};
