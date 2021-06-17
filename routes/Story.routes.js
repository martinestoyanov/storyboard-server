const router = require("express").Router();

const Story = require("../models/Story.model");
const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.use("/", isLoggedIn);

router.get("/index", (req, res, next) => {
  const query = req.query;
  const resHandler = (query, storyData) => {
    if (query.start && query.end) {
      //respond with stories in given range
      let stories = storyData.slice(query.start, query.end + 1);
      return res
        .status(200)
        .json({ stories: stories, total: storyData.length });
    } else if (query.random) {
      //respond with single random story
      const randomStory = [
        storyData[Math.floor(storyData.length * Math.random())],
      ];
      return res
        .status(200)
        .json({ stories: randomStory, total: storyData.length });
    } else {
      //respond with all stories
      return res
        .status(200)
        .json({ stories: storyData, total: storyData.length });
    }
  };

  if (query.userName) {
    User.findOne({ username: userName })
      .populate("stories")
      .then((user) => {
        if (!user)
          return res
            .status(404)
            .json({
              errorMessage: "User does not exist",
              user: query.userName,
            });
        if (query.searchTerm) {
          const storySearch = user.stories.filter((story) =>
            story.title.includes(query.searchTerm)
          );
          if (query.genre) {
            const storySearch = user.stories.filter(
              (story) =>
                story.title.includes(query.searchTerm) &&
                story.genre === query.genre
            );
            return resHandler(query, storySearch);
          } else return resHandler(query, storySearch);
        } else if (query.genre) {
          const storySearch = user.stories.filter(
            (story) => story.genre === query.genre
          );
          return resHandler(query, storySearch);
        } else {
          return resHandler(query, user.stories);
        }
      })
      .catch((error) => {
        //handle user retrieval error
        console.log(error);
        next(error);
      });
  } else if (query.searchTerm) {
    Story.find({ title: /query.searchTerm/i })
      .populate("comments")
      .then((stories) => {
        if (query.genre) {
          const storySearch = stories.filter(
            (story) => story.genre === query.genre
          );
          return resHandler(query, storySearch);
        } else return resHandler(query, stories);
      })
      .catch((error) => {
        //handle story retrieval error
        console.log(error);
        next(error);
      });
  } else if (query.genre) {
    Story.find({ genre: query.genre })
      .populate("comments")
      .then((stories) => {
        return resHandler(query, stories);
      })
      .catch((error) => {
        //handle story retrieval error
        console.log(error);
        next(error);
      });
  } else {
    Story.find().then((stories) => {
      return resHandler(query, stories);
    });
  }
});

router.get("/:id", (req, res, next) => {
  Story.findById(req.params.id)
    .populate()
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
