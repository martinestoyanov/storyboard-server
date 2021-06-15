const router = require("express").Router();
const User = require("../models/User.model");
const Video = require("../models/Video.model");
const Story = require("../models/Session.model");
const Comment = require("../models/Comment.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const { query } = require("express");

router.use("/", isLoggedIn);

router.get("/index", (req, res, next) => {
  const query = req.query;
  if (query.user) {
    let commentData = [];
    const userPromise = User.findOne({ username: query.user });
    if (query.storyName) {
      //index story comments from user
      userPromise
        .then((user) => {
          Story.findOne({ title: query.storyName })
            .then((story) => {
              Comment.find({ user: user._id, story: story._id })
                .then((comments) => {
                  commentData = comments;
                })
                .catch((error) => {
                  //handle comments retrieval error
                  console.log(error);
                  next(error);
                });
            })
            .catch((error) => {
              //handle story retrieval error
              console.log(error);
              next(error);
            });
        })
        .catch((error) => {
          //handle user retrieval error
          console.log(error);
          next(error);
        });
    } else if (query.videoName) {
      //index video comments from user
      userPromise
        .then((user) => {
          Video.findOne({ title: query.videoName })
            .then((video) => {
              Comment.find({ user: user._id, video: video._id })
                .then((comments) => {
                  commentData = comments;
                })
                .catch((error) => {
                  //handle comments retrieval error
                  console.log(error);
                  next(error);
                });
            })
            .catch((error) => {
              //handle video retrieval error
              console.log(error);
              next(error);
            });
        })
        .catch((error) => {
          //handle user retrieval error
          console.log(error);
          next(error);
        });
    } else {
      //all comments
      userPromise
        .then((user) => {
          Comment.find({ user: user._id })
            .then((comments) => {
              commentData = comments;
            })
            .catch((error) => {
              //handle comments retrieval error
              console.log(error);
              next(error);
            });
        })
        .catch((error) => {
          //handle user retrieval error
          console.log(error);
          next(error);
        });
    }

    if (query.start && query.end) {
      const comments = commentData.slice(query.start, query.end + 1);
      res.status(200).json({ comments: comments, total: commentData.length });
    } else {
      res
        .status(200)
        .json({ comments: commentData, total: commentData.length });
    }
  }
  //else there's a problem; handle it
});

router.get("/:id", (req, res, next) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      console.log("READ: ", comment);
      res.status(200).json(comment);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/update", (req, res, next) => {
  Comment.findByIdAndUpdate(req.params.id, req.body)
    .then((comment) => {
      console.log("UPDATE: ", comment);
      res.status(200).json(comment);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => {
      console.log("DELETE: ", comment);
      res.status(200).json(comment);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/create", (req, res, next) => {
  Comment.create(req.body)
    .then((comment) => {
      console.log("CREATE: ", comment);
      res.status(200).json(comment);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

module.exports = router;
