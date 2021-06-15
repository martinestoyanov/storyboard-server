const router = require("express").Router();

const Story = require("../models/Story.model");
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

  let storyData = [];
  if (query.searchTerm) {
    if (userData) {
      //search the named story for the given user
      Story.find({ user: userData._id, title: /query.searchTerm/i })
        .then((stories) => {
          storyData = stories;
        })
        .catch((error) => {
          //handle story retrieval error
          console.log(error);
          next(error);
        });
    } else {
      //search all stories with given name
      Story.find({ title: /query.searchTerm/i })
        .then((stories) => {
          storyData = stories;
        })
        .catch((error) => {
          //handle story retrieval error
          console.log(error);
          next(error);
        });
    }
  } else if (query.genre) {
    if (userData) {
      //list stories for user in supplied genres
      Story.find({ user: userData._id, genre: query.genre })
        .then((stories) => {
          storyData = stories;
        })
        .catch((error) => {
          //handle story retrieval error
          console.log(error);
          next(error);
        });
    } else {
      //list stories for supplied genres
      Story.find({ genre: query.genre })
        .then((stories) => {
          storyData = stories;
        })
        .catch((error) => {
          //handle story retrieval error
          console.log(error);
          next(error);
        });
    }
  }

  if (query.start && query.end) {
    //respond with stories in given range
    let stories = storyData.slice(query.start, query.end + 1);
    res.status(200).json({ stories: stories, total: storyData.length });
  } else if (query.random) {
    //respond with single random story
    const randomStory = [
      storyData[Math.floor(storyData.length * Math.random())],
    ];
    res.status(200).json({ stories: randomStory, total: storyData.length });
  } else {
    //respond with all stories
    res.status(200).json({ stories: storyData, total: storyData.length });
  }
});

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
