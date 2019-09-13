const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", {
    places: JSON.stringify([[13, 50], [15, 35], [20, 24]])
  });
});

module.exports = router;
