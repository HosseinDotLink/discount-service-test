const express = require("express");
const router = express.Router();
const {
  addProduct,
  addCategory,
  addDiscount
} = require("../controllers/add");


router.post(
    "/product",
    addProduct
);

router.post(
  "/category",
  addCategory
);

router.post(
  "/discount",
  addDiscount
);

module.exports = router;