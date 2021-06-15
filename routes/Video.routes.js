const router = require("express").Router();

const Video = require("../models/Video.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.use("/", isLoggedIn);

router.get("/index", (req, res, next) => {
  const query = req.query;
  let userData = null;
  if (query.userName) {
    User.findOne({ username: userName })
      .then((user) => {
        userData = user;
      })
      .catch((error) => {
        //handle user retrieval error
        console.log(error);
        next(error);
      });
  }

  let videoData = [];
  if (query.searchTerm) {
    if (userData) {
      //search the named video for the given user
      Video.find({ user: userData._id, title: /query.searchTerm/i })
        .then((stories) => {
          videoData = stories;
        })
        .catch((error) => {
          //handle video retrieval error
          console.log(error);
          next(error);
        });
    } else {
      //search all videos with given name
      Video.find({ title: /query.searchTerm/i })
        .then((videos) => {
          videoData = videos;
        })
        .catch((error) => {
          //handle video retrieval error
          console.log(error);
          next(error);
        });
    }
  } else if (query.genre) {
    if (userData) {
      //list videos for user in supplied genres
      Video.find({ user: userData._id, genre: query.genre })
        .then((videos) => {
          videoData = videos;
        })
        .catch((error) => {
          //handle video retrieval error
          console.log(error);
          next(error);
        });
    } else {
      //list videos for supplied genres
      Video.find({ genre: query.genre })
        .then((videos) => {
          videoData = videos;
        })
        .catch((error) => {
          //handle video retrieval error
          console.log(error);
          next(error);
        });
    }
  }

  if (query.start && query.end) {
    //respond with videos in given range
    let videos = videoData.slice(query.start, query.end + 1);
    res.status(200).json({ videos: videos, total: videoData.length });
  } else if (query.random) {
    //respond with single random video
    const randomStory = [
      videoData[Math.floor(videoData.length * Math.random())],
    ];
    res.status(200).json({ videos: randomStory, total: videoData.length });
  } else {
    //respond with all videos
    res.status(200).json({ videos: videoData, total: videoData.length });
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
