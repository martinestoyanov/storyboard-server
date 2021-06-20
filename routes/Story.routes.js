const router = require("express").Router();

const Story = require("../models/Story.model");
const User = require("../models/User.model");

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
  const resHandler = (query, storyData) => {
    if (query?.start && query?.end) {
      //respond with stories in given range
      let stories = storyData.slice(query.start, query.end + 1);
      return res
        .status(200)
        .json({ stories: stories, total: storyData.length });
    } else if (query?.random) {
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

  if (query?.userName) {
    const userQuery = User.findOne({ username: query.userName });
    query.with
      ? userQuery.populate("stories")
      : userQuery.populate({
          path: "stories",
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
          let storySearch = user.stories.filter((story) =>
            story.title.toLowerCase().includes(query.searchTerm.toLowerCase())
          );
          if (query.genre) {
            storySearch = storySearch.filter(
              (story) => story.genre === query.genre
            );
          }
          return resHandler(query, storySearch);
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
  } else if (query?.searchTerm) {
    const storyQuery = Story.find();
    if (query.with) storyQuery.populate(parsePopulate(query.with));
    storyQuery
      .then((stories) => {
        let storySearch = stories.filter((story) =>
          story.title.toLowerCase().includes(query.searchTerm.toLowerCase())
        );
        if (query.genre)
          storySearch = storySearch.filter(
            (story) => story.genre === query.genre
          );

        return resHandler(query, storySearch);
      })
      .catch((error) => {
        //handle story retrieval error
        console.log(error);
        next(error);
      });
  } else if (query?.genre) {
    const storyQuery = Story.find({ genre: query.genre });
    if (query.with) storyQuery.populate(parsePopulate(query.with));
    storyQuery
      .then((stories) => {
        return resHandler(query, stories);
      })
      .catch((error) => {
        //handle story retrieval error
        console.log(error);
        next(error);
      });
  } else {
    const storyQuery = Story.find();
    if (query?.with) storyQuery.populate(parsePopulate(query.with));
    storyQuery.then((stories) => {
      return resHandler(query, stories);
    });
  }
});

router.get("/:id", (req, res, next) => {
  const storyQuery = Story.findById(req.params.id);
  if (req.query?.with) storyQuery.populate(parsePopulate(req.query.with));
  storyQuery
    .then((story) => {
      console.log("READ: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/:id/update", (req, res, next) => {
  Story.findByIdAndUpdate(req.params.id, req.body)
    .then((story) => {
      console.log("UPDATE: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Story.findByIdAndDelete(req.params.id)
    .then((story) => {
      console.log("DELETE: ", story);
      res.status(200).json(story);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/create", async (req, res, next) => {
  //need update dependencies
  const { user_id } = req.body;
  if (user_id) {
    const creator = await User.findById(user_id).exec();
    if (creator) {
      const story = new Video(req.body);
      creator.stories.push(story._id);
      const creatorSave = creator.save();
      const storySave = story.save();
      Promise.all([creatorSave, storySave])
        .then((data) => {
          return res.status(100).json(data);
        })
        .catch((error) => {
          return res
            .status(500)
            .json({ errorMessage: "Failed to save new story", error });
        });
    } else if (!creator)
      return res.status(404).json({
        errorMessage: "author of story has invalid id",
        author: user_id,
      });
  } else _404Error(res, next, error);
});

module.exports = router;
