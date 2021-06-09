const router = require("express").Router();
const authRoutes = require("./auth.routes");
const api = require("./api.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ index: "All good in here." });
});

router.use("/auth", authRoutes);
router.use("/api", api);


module.exports = router;
