const router = require("express").Router();
const authRoutes = require("./auth.routes");
const commentRoutes = require("./Comment.routes");
const storyRoutes = require("./Story.routes");
const videoRoutes = require("./Video.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ index: "All good in here." });
});

router.use("/auth", authRoutes);
router.use("/comment", commentRoutes);
router.use("/story", storyRoutes);
router.use("/video", videoRoutes);

module.exports = router;
