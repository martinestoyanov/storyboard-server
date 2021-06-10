const router = require("express").Router();
const videoRoutes = require("./auth");

const Video = require("../models/Video.model");

router.use("/auth", videoRoutes);
/* GET home page */
router.get("/video/:id", (req, res, next) => {
  Video.findById(req.params.id)
    .then((video) => {
      console.log("READ: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.post("/video/:id/update", (req, res, next) => {
  Video.findByIdAndUpdate(req.params.id, req.body)
    .then((video) => {
      console.log("UPDATE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.post("/video/:id/delete", (req, res, next) => {
  Video.findByIdAndDelete(req.params.id)
    .then((video) => {
      console.log("DELETE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.post("/video/create", (req, res, next) => {
  Video.create(req.body)
    .then((video) => {
      console.log("CREATE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
