const router = require("express").Router();

const Video = require("../models/Video.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.use("/", isLoggedIn);

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

  if (query.userName) {
    User.findOne({ username: userName })
      .populate("videos")
      .then((user) => {
        if (!user)
          return res.status(404).json({
            errorMessage: "User does not exist",
            user: query.userName,
          });
        if (query.searchTerm) {
          const videoSearch = user.videos.filter((story) =>
            story.title.includes(query.searchTerm)
          );
          if (query.genre) {
            const videoSearch = user.videos.filter(
              (story) =>
                story.title.includes(query.searchTerm) &&
                story.genre === query.genre
            );
            return resHandler(query, videoSearch);
          } else return resHandler(query, videoSearch);
        } else if (query.genre) {
          const videoSearch = user.videos.filter(
            (story) => story.genre === query.genre
          );
          return resHandler(query, videoSearch);
        } else {
          return resHandler(query, user.videos);
        }
      })
      .catch((error) => {
        //handle user retrieval error
        console.log(error);
        next(error);
      });
  } else if (query.searchTerm) {
    Video.find({ title: /query.searchTerm/i })
      .populate("comments")
      .then((videos) => {
        if (query.genre) {
          const videoSearch = videos.filter(
            (story) => story.genre === query.genre
          );
          return resHandler(query, videoSearch);
        } else return resHandler(query, videos);
      })
      .catch((error) => {
        //handle story retrieval error
        console.log(error);
        next(error);
      });
  } else if (query.genre) {
    Video.find({ genre: query.genre })
      .populate("comments")
      .then((videos) => {
        return resHandler(query, videos);
      })
      .catch((error) => {
        //handle story retrieval error
        console.log(error);
        next(error);
      });
  } else {
    Video.find().then((videos) => {
      return resHandler(query, videos);
    });
  }
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

router.post("/:id/update", (req, res, next) => {
  Video.findByIdAndUpdate(req.params.id, req.body)
    .then((video) => {
      console.log("UPDATE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Video.findByIdAndDelete(req.params.id)
    .then((video) => {
      console.log("DELETE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/create", (req, res, next) => {
  Video.create(req.body)
    .then((video) => {
      console.log("CREATE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

module.exports = router;
