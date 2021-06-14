const router = require("express").Router();
const Comment = require("../models/Comment.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const sentiment = require("../middleware/sentiment");

// router.use("/", isLoggedIn);
/* GET home page */
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
