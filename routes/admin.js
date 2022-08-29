const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");
const {
  getAddProduct,
  postAddProduct,
  getContact,
  getSuccess
} = require("../controllers/product");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", getAddProduct);

// /admin/add-product => POST
router.post("/add-product", postAddProduct);

// /admin/contactus => GET
router.get("/contact", getContact);

// /admin/success => GET
router.get("/success", getSuccess);
// exports.routes = router;
// exports.products = products;

module.exports = router;
