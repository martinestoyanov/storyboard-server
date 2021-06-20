const router = require("express").Router();
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const sentiment = require("../middleware/sentiment");

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

  console.log(query.userName);
  if (query?.userName) {
    const userQuery = User.findOne({ username: query.userName });
    const userRetrievalError = (error) => {
      //handle user retrieval error
      console.log(error);
      next(error);
    };
    if (query.storyName) {
      //comments on (story by user)
      if (query.with)
        userQuery.populate({
          path: "stories",
          populate: {
            path: "comments",
            populate: { path: parsePopulate(query.with) },
          },
        });
      else
        userQuery.populate({ path: "stories", populate: { path: "comments" } });
      userQuery
        .then((user) => {
          if (!user)
            return res.status(404).json({
              errorMessage: "User does not exist",
              user: query.userName,
            });
          const story = user.stories.filter(
            (story) =>
              story.title.toLowerCase() === query.storyName.toLowerCase()
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
      if (query.with)
        userQuery.populate({
          path: "videos",
          populate: {
            path: "comments",
            populate: { path: parsePopulate(query.with) },
          },
        });
      else
        userQuery.populate({ path: "videos", populate: { path: "comments" } });
      userQuery
        .then((user) => {
          if (!user)
            return res.status(404).json({
              errorMessage: "User does not exist",
              user: query.userName,
            });
          const video = user.videos.filter(
            (video) =>
              video.title.toLowerCase() === query.videoName.toLowerCase()
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
      if (query.with)
        userQuery.populate({
          path: "comments",
          populate: { path: parsePopulate(query.with) },
        });
      else userQuery.populate("comments");
      userQuery
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
  const commentQuery = Comment.findById(req.params.id);
  if (req.query?.with) comentQuery.populate(parsePopulate(req.query.with));
  commentQuery
    .then((comment) => {
      console.log("READ: ", comment);
      if (!comment)
        return res.status(404).json({ errorMessage: "Comment does not exist" });
      return res.status(200).json(comment);
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/:id/update", (req, res, next) => {
  Comment.findByIdAndUpdate(req.params.id, req.body)
    .then((comment) => {
      console.log("UPDATE: ", comment);
      res.status(200).json({ result: "Update success" });
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post("/:id/delete", (req, res, next) => {
  Comment.findByIdAndDelete(req.params.id)
    .then((comment) => {
      console.log("DELETE: ", comment);
      res.status(200).json({ result: "Delete success" });
    })
    .catch((error) => {
      _404Error(res, next, error);
    });
});

router.post(
  "/create",
  isLoggedIn,
  sentiment.analyzeSentiment, //inserts sentiment into req.body
  async (req, res, next) => {
    const { story_id, video_id, user_id } = req.body;
    if (story_id) {
      //create a comment on a story
      const story = await Story.findById(story_id).exec();
      if (story) {
        const comment = new Comment(req.body);
        story.comments.push(comment._id);
        const storySave = story.save();
        const commentSave = comment.save();
        Promise.all([storySave, commentSave])
          .then((data) => {
            return res.status(100).json(data);
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to save new comment",
              error: error,
            });
          });
      } else if (!story)
        return res.status(404).json({
          errorMessage: "story for comment has invalid id",
          story: story_id,
        });
    } else if (video_id) {
      //create a comment on a video
      const video = await Video.findById(video_id).exec();
      if (video) {
        const comment = new Comment(req.body);
        video.comments.push(comment._id);
        const videoSave = video.save();
        const commentSave = comment.save();
        Promise.all([videoSave, commentSave])
          .then((data) => {
            return res.status(100).json(data);
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to save new comment",
              error: error,
            });
          });
      } else if (!video)
        return res.status(404).json({
          errorMessage: "video for comment has invalid id",
          video: video_id,
        });
    } else if (user_id) {
      //create a comment on a user
      const user = await User.findById(user_id).exec();
      if (user) {
        const comment = new Comment(req.body);
        user.comments.push(comment._id);
        const userSave = user.save();
        const commentSave = comment.save();
        Promise.all([userSave, commentSave])
          .then((data) => {
            return res.status(100).json(data);
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to save new comment",
              error: error,
            });
          });
      } else if (!user)
        return res.status(404).json({
          errorMessage: "user for comment has invalid id",
          user: user_id,
        });
    } else _404Error(res, next, error);
  }
);

module.exports = router;
