const router = require("express").Router();

const Video = require("../models/Video.model");
const User = require("../models/User.model");
const Story = require("../models/Story.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.use("/", isLoggedIn);

function parsePopulate(paths) {
  return Array.isArray(paths) ? paths.join(" ") : paths;
}

function _404Error(res, next, error) {
  console.log(error);
  res.status(404).json(error);
  next(error);
}

router.get("/index", (req, res, next) => {
  const query = req.query;
  const resHandler = (query, videoData) => {
    if (query?.start && query?.end) {
      //respond with videos in given range
      let videos = videoData.slice(query.start, query.end + 1);
      return res.status(200).json({ videos: videos, total: videoData.length });
    } else if (query?.random) {
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
          let videoSearch = user.videos.filter((video) =>
            video.title.toLowerCase().includes(query.searchTerm.toLowerCase())
          );
          if (query.genre) {
            videoSearch = videoSearch.filter(
              (video) => video.genre === query.genre
            );
          }
          return resHandler(query, videoSearch);
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
    const videoQuery = Video.find();
    if (query.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery
      .then((videos) => {
        let videoSearch = videos.filter((video) =>
          video.title.toLowerCase().includes(query.searchTerm.toLowerCase())
        );
        if (query.genre)
          videoSearch = videoSearch.filter(
            (video) => video.genre === query.genre
          );

        return resHandler(query, videoSearch);
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
  if (req.query?.with) videoQuery.populate(parsePopulate(req.query.with));
  videoQuery
    .then((video) => {
      console.log("READ: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/:id/update", (req, res, next) => {
  //need update dependencies
  Video.findByIdAndUpdate(req.params.id, req.body)
    .then((video) => {
      console.log("UPDATE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  //need update dependencies
  Video.findByIdAndDelete(req.params.id)
    .then((video) => {
      console.log("DELETE: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/create", async (req, res, next) => {
  //need update dependencies
  const { user_id, story_id } = req.body;
  if (user_id && story_id) {
    const creator = await User.findById(user_id).exec();
    const story = await Story.findById(story_id).exec();
    if (creator && story) {
      const video = new Video(req.body);
      creator.videos.push(video._id);
      story.video_contributions.push(video._id);
      const creatorSave = creator.save();
      const storySave = story.save();
      const videoSave = video.save();
      Promise.all([creatorSave, storySave, videoSave])
        .then((data) => {
          return res.status(100).json(data);
        })
        .catch((error) => {
          return res
            .status(500)
            .json({ errorMessage: "Failed to save new video", error });
        });
    } else if (!creator)
      return res.status(404).json({
        errorMessage: "creator of video has invalid id",
        creator: user_id,
      });
    else if (!story)
      return res.status(404).json({
        errorMessage: "story for video has invalid id",
        story: story_id,
      });
  } else _404Error(res, next, error);
});

module.exports = router;
