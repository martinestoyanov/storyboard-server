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

  if (query.userName) {
    const userQuery = User.findOne({ username: query.userName });
    const userRetrievalError = (error) => {
      //handle user retrieval error
      console.log(error);
      next(error);
    };
    if (query.storyName) {
      //comments on (story by user)
      userQuery
        .populate({ path: "stories", populate: { path: "comments" } })
        .then((user) => {
          if (!user)
            return res.status(404).json({
              errorMessage: "User does not exist",
              user: query.userName,
            });
          const story = user.stories.filter(
            (story) => story.title === query.storyName
          )[0];
          if (!story)
            return res.status(404).json({
              errorMessage: "Story does not exist for user",
              story: query.storyName,
            });
          return resHandler(query, story.comments);
        })
        .catch(userRetrievalError);
    } else if (query.videoName) {
      //comments on (video by user)
      userQuery
        .populate({ path: "videos", populate: { path: "comments" } })
        .then((user) => {
          if (!user)
            return res.status(404).json({
              errorMessage: "User does not exist",
              user: query.userName,
            });
          const video = user.videos.filter(
            (video) => video.title === query.videoName
          )[0];
          if (!video)
            return res.status(404).json({
              errorMessage: "Video does not exist for user",
              video: query.videoName,
            });
          return resHandler(query, video.comments);
        })
        .catch(userRetrievalError);
    } else {
      //comments on user
      userQuery
        .populate("comments")
        .then((user) => {
          if (!user)
            return res.status(404).json({
              errorMessage: "User does not exist",
              user: query.userName,
            });
        })
        .catch(userRetrievalError);
    }
  }
  //else there's a problem; handle it
  return res.status(404).json({ errorMessage: "User must be provided" });
});

router.get("/:id", (req, res, next) => {
  Comment.findById(req.params.id)
    .populate()
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

router.post(
  "/create",
  isLoggedIn,
  sentiment.analyzeSentiment,
  (req, res, next) => {
    console.log("You got to the create route!");
    console.log(req.body);
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
  }
);

module.exports = router;
