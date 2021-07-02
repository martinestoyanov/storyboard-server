const router = require("express").Router();

const hasBackendAuth = require("../middleware/hasBackendAuth");

const uploader = require("../config/cloudinary.config");

router.post(
  "/",
  hasBackendAuth,
  uploader.single("pictureURL"),
  (req, res, next) => {
    if (!req.file) {
      next(new Error("No file uploaded"));
      return;
    }
    res.json(200).json({ secure_url: req.file.path });
  }
);

module.exports = router;
