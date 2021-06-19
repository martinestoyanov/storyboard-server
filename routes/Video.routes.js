const router = require("express").Router();

const Video = require("../models/Video.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");
const { parse } = require("dotenv");

router.use("/", isLoggedIn);

function parsePopulate(paths) {
  return Array.isArray(paths) ? paths.join(" ") : paths;
}

router.get("/index", (req, res, next) => {
  const query = req.query;
  const resHandler = (query, videoData) => {
    if (query.start && query.end) {
      //respond with stories in given range
      let videos = videoData.slice(query.start, query.end + 1);
      return res.status(200).json({ videos: videos, total: videoData.length });
    } else if (query.random) {
      //respond with single random video
      const randomVideo = [
        videoData[Math.floor(videoData.length * Math.random())],
      ];
      return res
        .status(200)
        .json({ videos: randomVideo, total: videoData.length });
    } else {
      //respond with all videos
      return res
        .status(200)
        .json({ videos: videoData, total: videoData.length });
    }
  };

  if (query?.userName) {
    const userQuery = User.findOne({ username: query.userName });
    query.with
      ? userQuery.populate("videos")
      : userQuery.populate({
          path: "videos",
          populate: { path: parsePopulate(query.with) },
        });
    userQuery
      .then((user) => {
        if (!user)
          return res.status(404).json({
            errorMessage: "User does not exist",
            user: query.userName,
          });
        if (query.searchTerm) {
          const videoSearch = user.videos.filter((video) =>
            video.title.includes(query.searchTerm)
          );
          if (query.genre) {
            const videoSearch = user.videos.filter(
              (video) =>
                video.title.includes(query.searchTerm) &&
                video.genre === query.genre
            );
            return resHandler(query, videoSearch);
          } else return resHandler(query, videoSearch);
        } else if (query.genre) {
          const videoSearch = user.videos.filter(
            (video) => video.genre === query.genre
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
  } else if (query?.searchTerm) {
    //fix
    const videoQuery = Video.find({ title: /query.searchTerm/i });
    if (query.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery
      .then((videos) => {
        if (query.genre) {
          const videoSearch = videos.filter(
            (video) => video.genre === query.genre
          );
          return resHandler(query, videoSearch);
        } else return resHandler(query, videos);
      })
      .catch((error) => {
        //handle video retrieval error
        console.log(error);
        next(error);
      });
  } else if (query?.genre) {
    const videoQuery = Video.find({ genre: query.genre });
    if (query.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery
      .then((videos) => {
        return resHandler(query, videos);
      })
      .catch((error) => {
        //handle video retrieval error
        console.log(error);
        next(error);
      });
  } else {
    const videoQuery = Video.find();
    if (query?.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery.then((videos) => {
      return resHandler(query, videos);
    });
  }
});

router.get("/:id", (req, res, next) => {
  const videoQuery = Video.findById(req.params.id);
  if (req.query?.with) videoQuery.populate(parsePopulate(res.query.with));
  videoQuery
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
