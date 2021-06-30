const router = require("express").Router();

const User = require("../models/User.model");
const Comment = require("../models/Comment.model");
const Story = require("../models/Story.model");
const Video = require("../models/Video.model");

const sentiment = require("../middleware/sentiment");

const hasBackendAuth = require("../middleware/hasBackendAuth");

function parsePopulate(paths) {
  return Array.isArray(paths) ? paths.join(" ") : paths;
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
 else return res.status(404).json({ errorMessage: "User must be provided" });
});

router.get("/:id", (req, res, next) => {
  const commentQuery = Comment.findById(req.params.id);
  if (req.query?.with) comentQuery.populate(parsePopulate(req.query.with));
  commentQuery
    .then((comment) => {
      console.log("READ: ", comment);
      if (!comment)
        return res.status(404).json({
          errorMessage: "Comment does not exist",
          comment: req.params.id,
        });
      return res.status(200).json(comment);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post(
  "/:id/update",
  hasBackendAuth,
  sentiment.analyzeSentiment,
  async (req, res, next) => {
    const comment_id = req.params.id;
    const comment = await Comment.findById(comment_id).exec();
    if (comment) {
      const {
        story: story_id,
        video: video_id,
        user: user_id,
        upvotes: upvoter_id,
      } = req.body;
      if (upvoter_id) {
        // toggle a like for comment by the given user
        if (comment.upvotes.includes(upvoter_id))
          comment.upvotes.splice(comment.upvotes.indexOf(upvoter_id), 1);
        else comment.upvotes.push(upvoter_id);
        comment
          .save()
          .then((comment) => {
            return res.status(200).json(comment);
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to update comment",
              comment: comment_id,
              error: error,
            });
          });
      } else if (comment.story && !story_id) {
        //reassign story comment
        req.body.story = undefined;
        if (video_id) {
          //to video comment
          const oldStory = await Story.findById(comment.story).exec();
          const newVideo = await Video.findById(video_id).exec();
          if (oldStory && newVideo) {
            oldStory.comments.splice(oldStory.comments.indexOf(comment_id), 1);
            newVideo.comments.push(comment_id);
            const oldStorySave = oldStory.save();
            const newVideoSave = newVideo.save();
            const commentUpdate = Comment.findByIdAndUpdate(
              comment_id,
              req.body
            );
            Promise.all([oldStorySave, newVideoSave, commentUpdate])
              .then((data) =>
                res.status(200).json({
                  originalStory: data[0],
                  newVideo: data[1],
                  comment: data[2],
                })
              )
              .catch((error) =>
                res.status(500).json({
                  errorMessage: "Failed to update comment",
                  comment: comment_id,
                  error: error,
                })
              );
          } else if (!oldStory)
            return res.status(404).json({
              errorMessage: "original story for comment has invalid id",
              story: story_id,
            });
          else if (!newVideo)
            return res.status(404).json({
              errorMessage: "new video for comment has invalid id",
              video: video_id,
            });
        } else if (user_id) {
          //to user comment
          const oldStory = await Story.findById(comment.story).exec();
          const newUser = await User.findById(user_id).exec();
          if (oldStory && newUser) {
            oldStory.comments.splice(oldStory.comments.indexOf(comment_id), 1);
            newUser.comments.push(comment_id);
            const oldStorySave = oldStory.save();
            const newUserSave = newUser.save();
            const commentUpdate = Comment.findByIdAndUpdate(
              comment_id,
              req.body
            );
            Promise.all([oldStorySave, newUserSave, commentUpdate])
              .then((data) =>
                res.status(200).json({
                  originalStory: data[0],
                  newUser: data[1],
                  comment: data[2],
                })
              )
              .catch((error) =>
                res.status(500).json({
                  errorMessage: "Failed to update comment",
                  comment: comment_id,
                  error: error,
                })
              );
          } else if (!oldStory)
            return res.status(404).json({
              errorMessage: "original story for comment has invalid id",
              story: story_id,
            });
          else if (!newUser)
            return res.status(404).json({
              errorMessage: "new user for comment has invalid id",
              user: user_id,
            });
        }
      } else if (comment.video && !video_id) {
        //reassign video comment
        req.body.video = undefined;
        if (story_id) {
          //to story comment
          const oldVideo = await Video.findById(comment.video).exec();
          const newStory = await Story.findById(story_id).exec();
          if (oldVideo && newStory) {
            oldVideo.comments.splice(oldVideo.comments.indexOf(comment_id), 1);
            newStory.comments.push(comment_id);
            const oldVideoSave = oldVideo.save();
            const newStorySave = newStory.save();
            const commentUpdate = Comment.findByIdAndUpdate(
              comment_id,
              req.body
            );
            Promise.all([oldVideoSave, newStorySave, commentUpdate])
              .then((data) =>
                res.status(200).json({
                  originalVideo: data[0],
                  newStory: data[1],
                  comment: data[2],
                })
              )
              .catch((error) =>
                res.status(500).json({
                  errorMessage: "Failed to update comment",
                  comment: comment_id,
                  error: error,
                })
              );
          } else if (!oldVideo)
            return res.status(404).json({
              errorMessage: "original video for comment has invalid id",
              video: comment.video,
            });
          else if (!newStory)
            return res.status(404).json({
              errorMessage: "new story for comment has invalid id",
              story: story_id,
            });
        } else if (user_id) {
          //to user comment
          const oldVideo = await Video.findById(comment.video).exec();
          const newUser = await User.findById(user_id).exec();
          if (oldVideo && newUser) {
            oldVideo.comments.splice(oldVideo.comments.indexOf(comment_id), 1);
            newUser.comments.push(comment_id);
            const oldVideoSave = oldVideo.save();
            const newUserSave = newUser.save();
            const commentUpdate = Comment.findByIdAndUpdate(
              comment_id,
              req.body
            );
            Promise.all([oldVideoSave, newUserSave, commentUpdate])
              .then((data) =>
                res.status(200).json({
                  originalVideo: data[0],
                  newUser: data[1],
                  comment: data[2],
                })
              )
              .catch((error) =>
                res.status(500).json({
                  errorMessage: "Failed to update comment",
                  comment: comment_id,
                  error: error,
                })
              );
          } else if (!oldVideo)
            return res.status(404).json({
              errorMessage: "original video for comment has invalid id",
              video: comment.video,
            });
          else if (!newUser)
            return res.status(404).json({
              errorMessage: "new user for comment has invalid id",
              user: user_id,
            });
        }
      } else if (comment.user && !user_id) {
        //reassign user comment
        req.body.user = undefined;
        if (video_id) {
          //to video comment
          const oldUser = await User.findById(comment.user).exec();
          const newVideo = await Video.findById(video_id).exec();
          if (oldUser && newVideo) {
            oldUser.comments.splice(oldUser.comments.indexOf(comment_id), 1);
            newVideo.comments.push(comment_id);
            const oldUserSave = oldUser.save();
            const newVideoSave = newVideo.save();
            const commentUpdate = Comment.findByIdAndUpdate(
              comment_id,
              req.body
            );
            Promise.all([oldUserSave, newVideoSave, commentUpdate])
              .then((data) =>
                res.status(200).json({
                  originalUser: data[0],
                  newVideo: data[1],
                  comment: data[2],
                })
              )
              .catch((error) =>
                res.status(500).json({
                  errorMessage: "Failed to update comment",
                  comment: comment_id,
                  error: error,
                })
              );
          } else if (!oldUser)
            return res.status(404).json({
              errorMessage: "original user for comment has invalid id",
              user: comment.user,
            });
          else if (!newVideo)
            return res.status(404).json({
              errorMessage: "new video for comment has invalid id",
              video: video_id,
            });
        } else if (story_id) {
          //to story comment
          const oldUser = await User.findById(comment.user).exec();
          const newStory = await Story.findById(story_id).exec();
          if (oldUser && newStory) {
            oldUser.comments.splice(oldUser.comments.indexOf(comment_id), 1);
            newStory.comments.push(comment_id);
            const oldUserSave = oldUser.save();
            const newStorySave = newStory.save();
            const commentUpdate = Comment.findByIdAndUpdate(
              comment_id,
              req.body
            );
            Promise.all([oldUserSave, newStorySave, commentUpdate])
              .then((data) =>
                res.status(200).json({
                  originalUser: data[0],
                  newStory: data[1],
                  comment: data[2],
                })
              )
              .catch((error) =>
                res.status(500).json({
                  errorMessage: "Failed to update comment",
                  comment: comment_id,
                  error: error,
                })
              );
          } else if (!oldUser)
            return res.status(404).json({
              errorMessage: "original user for comment has invalid id",
              user: comment.user,
            });
          else if (!newStory)
            return res.status(404).json({
              errorMessage: "new story for comment has invalid id",
              story: story_id,
            });
        }
      } else if (story_id && comment.story !== story_id) {
        //reassign comment to a different story
        const oldStory = await Story.findById(comment.story).exec();
        const newStory = await Story.findById(story_id).exec();
        if (oldStory && newStory) {
          oldStory.comments.splice(oldStory.comments.indexOf(comment_id), 1);
          newStory.comments.push(comment_id);
          const oldStorySave = oldStory.save();
          const newStorySave = newStory.save();
          const commentUpdate = Comment.findByIdAndUpdate(comment_id, req.body);
          Promise.all([oldStorySave, newStorySave, commentUpdate])
            .then((data) =>
              res.status(200).json({
                originalStory: data[0],
                newStory: data[1],
                comment: data[2],
              })
            )
            .catch((error) =>
              res.status(500).json({
                errorMessage: "Failed to update comment",
                comment: comment_id,
                error: error,
              })
            );
        } else if (!oldStory)
          return res.status(404).json({
            errorMessage: "original story for comment has invalid id",
            story: comment.user,
          });
        else if (!newStory)
          return res.status(404).json({
            errorMessage: "new story for comment has invalid id",
            story: story_id,
          });
      } else if (video_id && comment.video !== video_id) {
        //reassign comment to a different video
        const oldVideo = await Video.findById(comment.video).exec();
        const newVideo = await Video.findById(video_id).exec();
        if (oldVideo && newVideo) {
          oldVideo.comments.splice(oldVideo.comments.indexOf(comment_id), 1);
          newVideo.comments.push(comment_id);
          const oldVideoSave = oldVideo.save();
          const newVideoSave = newVideo.save();
          const commentUpdate = Comment.findByIdAndUpdate(comment_id, req.body);
          Promise.all([oldVideoSave, newVideoSave, commentUpdate])
            .then((data) =>
              res.status(200).json({
                originalVideo: data[0],
                newVideo: data[1],
                comment: data[2],
              })
            )
            .catch((error) =>
              res.status(500).json({
                errorMessage: "Failed to update comment",
                comment: comment_id,
                error: error,
              })
            );
        } else if (!oldVideo)
          return res.status(404).json({
            errorMessage: "original video for comment has invalid id",
            video: comment.video,
          });
        else if (!newVideo)
          return res.status(404).json({
            errorMessage: "new video for comment has invalid id",
            video: video_id,
          });
      } else if (user_id && comment.user !== user_id) {
        //reassign comment to a different user
        const oldUser = await User.findById(comment.user).exec();
        const newUser = await User.findById(user_id).exec();
        if (oldUser && newUser) {
          oldUser.comments.splice(oldUser.comments.indexOf(comment_id), 1);
          newUser.comments.push(comment_id);
          const oldUserSave = oldUser.save();
          const newUserSave = newUser.save();
          const commentUpdate = Comment.findByIdAndUpdate(comment_id, req.body);
          Promise.all([oldUserSave, newUserSave, commentUpdate])
            .then((data) =>
              res.status(200).json({
                originalUser: data[0],
                newUser: data[1],
                comment: data[2],
              })
            )
            .catch((error) =>
              res.status(500).json({
                errorMessage: "Failed to update comment",
                comment: comment_id,
                error: error,
              })
            );
        } else if (!oldUser)
          return res.status(404).json({
            errorMessage: "original user for comment has invalid id",
            user: comment.user,
          });
        else if (!newUser)
          return res.status(404).json({
            errorMessage: "new user for comment has invalid id",
            user: user_id,
          });
      } else
        Comment.findByIdAndUpdate(comment_id, req.body, (error, comment) => {
          if (error)
            return res.status(500).json({
              errorMessage: "Failed to update comment",
              comment: comment_id,
              error: error,
            });
          else if (comment) return res.status(200).json(comment);
        });
    } else if (!comment)
      return res
        .status(404)
        .json({ errorMessage: "Comment not found", comment: comment_id });
  }
);

router.post("/:id/delete", hasBackendAuth, async (req, res, next) => {
  const comment_id = req.params.id;
  const comment = await Comment.findById(comment_id).exec();
  if (comment) {
    const { story: story_id, video: video_id, user: user_id } = comment;
    if (story_id) {
      const story = await Story.findById(story_id).exec();
      if (story) {
        story.comments.splice(story.comments.indexOf(story_id));
        const storySave = story.save();
        const commentDeletion = Comment.findByIdAndDelete(comment_id).exec();
        Promise.all([storySave, commentDeletion])
          .then((data) => {
            return res
              .status(200)
              .json({ story: data[0], deletedComment: data[1] });
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to delete comment",
              story: comment_id,
              error: error,
            });
          });
      } else if (!story)
        return res.status(404).json({
          errorMessage: "story for comment has invalid id",
          story: story_id,
        });
    } else if (video_id) {
      const video = await Video.findById(video_id).exec();
      if (video) {
        video.comments.splice(video.comments.indexOf(video_id));
        const videoSave = video.save();
        const commentDeletion = Comment.findByIdAndDelete(comment_id).exec();
        Promise.all([videoSave, commentDeletion])
          .then((data) => {
            return res
              .status(200)
              .json({ video: data[0], deletedComment: data[1] });
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to delete comment",
              video: comment_id,
              error: error,
            });
          });
      } else if (!video)
        return res.status(404).json({
          errorMessage: "video for comment has invalid id",
          video: video_id,
        });
    } else if (user_id) {
      const user = await User.findById(user_id).exec();
      if (user) {
        user.comments.splice(user.comments.indexOf(user_id));
        const userSave = user.save();
        const commentDeletion = Comment.findByIdAndDelete(comment_id).exec();
        Promise.all([userSave, commentDeletion])
          .then((data) => {
            return res
              .status(200)
              .json({ user: data[0], deletedComment: data[1] });
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to delete comment",
              user: comment_id,
              error: error,
            });
          });
      } else if (!user)
        return res.status(404).json({
          errorMessage: "user for comment has invalid id",
          user: user_id,
        });
    }
  } else
    return res
      .status(400)
      .json({ errorMessage: "Comment not found", comment: comment_id });
});

router.post(
  "/create",
  hasBackendAuth,
  sentiment.analyzeSentiment, //inserts sentiment into req.body
  async (req, res, next) => {
    const { story: story_id, video: video_id, user: user_id } = req.body;
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
            return res
              .status(200)
              .json({ story: data[0], newComment: data[1] });
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
            return res
              .status(200)
              .json({ video: data[0], newComment: data[1] });
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
            return res.status(200).json({ user: data[0], newComment: data[1] });
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
    } else
      return res.status(400).json({
        errorMessage:
          "Comment must have a valid id for a user, story, or video",
      });
  }
);

module.exports = router;
