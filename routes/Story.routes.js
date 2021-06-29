const router = require("express").Router();

const Story = require("../models/Story.model");
const User = require("../models/User.model");

const hasBackendAuth = require("../middleware/hasBackendAuth");

function parsePopulate(paths) {
  return Array.isArray(paths) ? paths.join(" ") : paths;
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
      return res.status(200).json({ randomStory: randomStory[0] });
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
      if (!story)
        return res
          .status(404)
          .json({ errorMessage: "Story not found", story: req.params.id });
      console.log("READ: ", story);
      return res.status(200).json(story);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/update", hasBackendAuth, async (req, res, next) => {
  const story_id = req.params.id;
  const story = await Story.findById(story_id).exec();
  if (story) {
    const { author: author_id, upvotes: upvoter_id } = req.body;
    if (upvoter_id) {
      // toggle a like for story by the given user
      if (story.upvotes.includes(upvoter_id))
        story.upvotes.splice(story.upvotes.indexOf(upvoter_id), 1);
      else story.upvotes.push(upvoter_id);
      story
        .save()
        .then((story) => {
          return res.status(200).json(story);
        })
        .catch((error) => {
          return res.status(500).json({
            errorMessage: "Failed to update story",
            story: story_id,
            error: error,
          });
        });
    } else if (author_id && !(story.author === author_id)) {
      //reassign story to the new author
      const oldAuthor = await User.findById(story.author).exec();
      const newAuthor = await User.findById(author_id).exec();
      if (oldAuthor && newAuthor) {
        oldAuthor.stories.splice(oldAuthor.stories.indexOf(story_id), 1);
        newAuthor.stories.push(story_id);
        const oldAuthorSave = oldAuthor.save();
        const newAuthorSave = newAuthor.save();
        const storyUpdate = Story.findByIdAndUpdate(story_id, req.body).exec();
        Promise.all([oldAuthorSave, newAuthorSave, storyUpdate])
          .then((data) => {
            return res.status(200).json({
              originalAuthor: data[0],
              newAuthor: data[1],
              story: data[2],
            });
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to update story",
              story: story_id,
              error: error,
            });
          });
      } else if (!oldAuthor)
        return res.status(404).json({
          errorMessage: "original author of story has invalid id",
          original_author: story.user,
        });
      else if (!newAuthor)
        return res.status(404).json({
          errorMessage: "new author of story has invalid id",
          new_author: author_id,
        });
    }
    // change other fields for story
    else
      Story.findByIdAndUpdate(story_id, req.body)
        .then((story) => {
          return res.status(200).json(story);
        })
        .catch((error) => {
          return res.status(500).json({
            errorMessage: "Failed to update story",
            story: story_id,
            error: error,
          });
        });
  } else
    return res
      .status(400)
      .json({ errorMessage: "Story not found", story: story_id });
});

router.post("/:id/delete", hasBackendAuth, async (req, res, next) => {
  const story_id = req.params.id;
  const story = await Story.findById(story_id).exec();
  if (story) {
    const author = await User.findById(story.author).exec();
    if (author) {
      author.stories.splice(author.stories.indexOf(story_id), 1);
      const authorSave = author.save();
      const storyDeletion = Story.findByIdAndDelete(story_id).exec();
      Promise.all([authorSave, storyDeletion])
        .then((data) => {
          return res
            .status(200)
            .json({ author: data[0], deletedStory: data[1] });
        })
        .catch((error) => {
          return res.status(500).json({
            errorMessage: "Failed to delete story",
            story: story_id,
            error: error,
          });
        });
    } else if (!author)
      return res.status(404).json({
        errorMessage: "author of story has invalid id",
        author: author._id,
      });
  } else
    return res
      .status(400)
      .json({ errorMessage: "Story not found", story: story_id });
});

router.post("/create", hasBackendAuth, async (req, res, next) => {
  const { author: author_id } = req.body;
  // console.log("Running create", req.body ,req.body.user);
  if (author_id) {
    // console.log("author_id passed properly");
    const author = await User.findById(author_id).exec();
    if (author) {
      const story = new Story(req.body);
      author.stories.push(story._id);
      const authorSave = author.save();
      const storySave = story.save();
      Promise.all([authorSave, storySave])
        .then((data) => {
          return res.status(200).json({ author: data[0], newStory: data[1] });
        })
        .catch((error) => {
          return res
            .status(500)
            .json({ errorMessage: "Failed to save new story", error: error });
        });
    } else if (!author)
      return res.status(404).json({
        errorMessage: "Author of story has invalid id",
        author: author_id,
      });
  } else
    return res
      .status(400)
      .json({ errorMessage: "Story data is missing author id" });
});

module.exports = router;
