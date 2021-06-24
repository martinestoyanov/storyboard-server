const router = require("express").Router();

const uploader = require("../config/cloudinary.config");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded"));
    return;
  }
  res.json(200).json({ secure_url: req.file.path });
});

module.exports = router;
