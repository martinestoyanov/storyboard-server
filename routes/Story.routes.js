const router = require("express").Router();
// const storyRoutes = require("./auth");

const Story = require("../models/Story.model");

// router.use("/auth", storyRoutes);
/* GET home page */
router.get("/:id", (req, res, next) => {
  Story.findById(req.params.id)
    .then((story) => {
      console.log("READ: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/update", (req, res, next) => {
  Story.findByIdAndUpdate(req.params.id, req.body)
    .then((story) => {
      console.log("UPDATE: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Story.findByIdAndDelete(req.params.id)
    .then((story) => {
      console.log("DELETE: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/create", (req, res, next) => {
  Story.create(req.body)
    .then((story) => {
      console.log("CREATE: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

module.exports = router;
