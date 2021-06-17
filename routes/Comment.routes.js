const router = require("express").Router();
const User = require("../models/User.model");
const Video = require("../models/Video.model");
const Story = require("../models/Session.model");
const Comment = require("../models/Comment.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const { query } = require("express");
const { compareSync } = require("bcryptjs");

router.use("/", isLoggedIn);

router.get("/index", (req, res, next) => {
  const query = req.query;
  const resHandler = (query, commentData) => {
    if (query.start && query.end) {
      const comments = commentData.slice(query.start, query.end + 1);
      return res
        .status(200)
        .json({ comments: comments, total: commentData.length });
    } else {
      return res
        .status(200)
        .json({ comments: commentData, total: commentData.length });
    }
  };

  if (query.user) {
    console.log(query.user);
    if (query.storyName) {
      console.log(query.storyName);
      const { user: userName, storyName } = query;
      //find comments by user for given story
      const findUserForComment = User.findOne({ username: userName })
        .exec()
        .then((user) => {
          // console.log("GOT user: ", user);
          // console.log(query);
          return user;
        })
        .catch((error) => {
          //handle user retrieval error
          console.log(error);
          next(error);
        });
      const findStoryForComment = Story.findOne({ title: storyName })
        .exec()
        .then((story) => {
          // console.log("GOT story: ", story);
          // console.log(query);
          return story;
        })
        .catch((error) => {
          //handle story retrieval error
          console.log(error);
          next(error);
        });

      Promise.all([findUserForComment, findStoryForComment]).then((values) => {
        const [user, story] = values;
        if (!user)
          return res
            .status(404)
            .json({ errorMessage: "User does not exist", user: userName });
        if (!story)
          return res.status(404).json({
            errorMessage: "Story does not exist",
            story: storyName,
          });
        Comment.find({ user: user._id, story: story._id })
          .then((comments) => {
            if (!comments)
              return res.status(404).json({
                errorMessage: "No comments from user exist for this story",
                user: userName,
                story: storyName,
              });
            return resHandler(query, comments);
          })
          .catch((error) => {
            //handle comments retrieval error
            console.log(error);
            next(error);
          });
      });
    } else if (query.videoName) {
      console.log(query.videoName);
      //find comments by user for given video
      const { user: userName, videoName } = query;
      const findUserForComment = User.findOne({ username: userName })
        .exec()
        .then((user) => {
          return user;
        })
        .catch((error) => {
          //handle user retrieval error
          console.log(error);
          next(error);
        });
      const findVideoForComment = Video.findOne({ title: videoName })
        .exec()
        .then((video) => {
          // console.log("GOT video: ", video);
          // console.log(query);
          return video;
        })
        .catch((error) => {
          //handle video retrieval error
          console.log(error);
          next(error);
        });

      Promise.all([findUserForComment, findVideoForComment]).then((values) => {
        const [user, video] = values;
        if (!user)
          return res
            .status(404)
            .json({ errorMessage: "User does not exist", user: userName });
        if (!video)
          return res.status(404).json({
            errorMessage: "Video does not exist",
            video: videoName,
          });
        Comment.find({ user: user._id, video: video._id })
          .then((comments) => {
            if (!comments)
              return res.status(404).json({
                errorMessage: "No comments from user exist for this video",
                user: userName,
                video: storyName,
              });
            return resHandler(query, comments);
          })
          .catch((error) => {
            //handle comments retrieval error
            console.log(error);
            next(error);
          });
      });
    } else {
      //all comments by user
      userPromise
        .then((user) => {
          Comment.find({ user: user._id })
            .then((comments) => {
              if (!user)
                return res.status(404).json({
                  errorMessage: "User does not exist",
                  user: userName,
                });
              return resHandler(query, comments);
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
  }
  //else there's a problem; handle it
});

router.get("/:id", (req, res, next) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      console.log("READ: ", comment);
      if (!comment)
        return res.status(404).json({ errorMessage: "Comment does not exist" });
      return res.status(200).json(comment);
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
      res.status(200).json({ result: "Update success" });
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
      res.status(200).json({ result: "Delete success" });
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
