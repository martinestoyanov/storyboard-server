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

  //comments by author

  //comments by video

  //comments by story

  //else there's a problem; handle it
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
