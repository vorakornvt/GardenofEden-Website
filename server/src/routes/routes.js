// CENTRAL ROUTE FILE
// Import express and router
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Import sub-routes
// NOTE: As our application grows in complexity, the need for refactoring grows, as we want to keep our code as readable as possible despite growing scale.  We will segment our routes according to collection, to help for easier readibility.
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");

module.exports = () => {
  // Test GET Route
  router.get("/", (req, res, next) => {
    res.send("Welcome to the Garden of Eden API");
  });

  //  route for filtered products
  router.get("store/products/filtered", productController.getFilteredProducts);

  // SUBROUTES
  // auth routes: http://localhost:5000/api/auth
  router.use("/auth", authRoutes());
  // product routes: http://localhost:5000/api/products
  router.use("/products", productRoutes());

  return router;
};
