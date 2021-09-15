const express = require("express");
const router = express.Router();
const {
  check,
} = require("../controllers/off");


// check product has discount
router.post(
    "/check",
    check
);

module.exports = router;