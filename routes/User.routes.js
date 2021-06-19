const router = require("express").Router();

const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.user("/", isLoggedIn);

router.get("/index", (req, res, next) => {
  const query = req.query;
  const resHandler = (query, videoData) => {
    if (query.start && query.end) {
      //respond with stories in given range
      let videos = videoData.slice(query.start, query.end + 1);
      return res.status(200).json({ videos: videos, total: videoData.length });
    } else if (query.random) {
      //respond with single random story
      const randomStory = [
        videoData[Math.floor(videoData.length * Math.random())],
      ];
      return res
        .status(200)
        .json({ videos: randomStory, total: videoData.length });
    } else {
      //respond with all videos
      return res
        .status(200)
        .json({ videos: videoData, total: videoData.length });
    }
  };
});

router.get("/:id", (req, res, next) => {
  Video.findById(req.params.id)
    .then((video) => {
      console.log("READ: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

module.exports = router;
