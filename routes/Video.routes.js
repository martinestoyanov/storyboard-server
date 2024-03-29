const router = require("express").Router();

const Video = require("../models/Video.model");
const User = require("../models/User.model");
const Story = require("../models/Story.model");

const hasBackendAuth = require("../middleware/hasBackendAuth");

function parsePopulate(paths) {
  return Array.isArray(paths) ? paths.join(" ") : paths;
}

async function isTitleInUse(creator_id, title) {
  if (!title) return false;
  const titleUsedAlready = await Video.findOne({
    user: creator_id,
    title: title,
  }).exec();
  return titleUsedAlready ? true : false;
}

function invalidTitleResponse(title, res) {
  return res
    .status(400)
    .json({ errorMessage: "Title for video is invalid", title: title });
}

router.get("/index", async (req, res, next) => {
  const query = req.query;
  const resHandler = (query, videoData) => {
    if (query?.start && query?.end) {
      //respond with videos in given range
      let videos = videoData.slice(query.start, query.end + 1);
      return res.status(200).json({ videos: videos, total: videoData.length });
    } else if (query?.random) {
      //respond with single random video
      const randomVideo = [
        videoData[Math.floor(videoData.length * Math.random())],
      ];
      return res
        .status(200)
        .json({ videos: randomVideo, total: videoData.length });
    } else {
      //respond with all videos
      return res
        .status(200)
        .json({ videos: videoData, total: videoData.length });
    }
  };
  if (query?.userName && query?.storyName) {
    const videos = await Video.find()
      .populate("user", "username")
      .populate({
        path: "story",
        populate: [{ path: "author"}],
      })
      .exec();
    if (videos.length > 0) {
      // console.log("all found videos", videos[0]);
      const foundVideos = videos.filter(
        (vid) =>
          vid.story?.author.username === query.userName &&
          vid.story?.title === query.storyName
      );
      // console.log("foundVideos", foundVideos);
      return resHandler(query, foundVideos);
    } else
      return res.status(400).json({
        errorMessage: "No videos exist for given username and story",
        creator: query.userName,
        story: query.storyName,
      });
  } else if (query?.userName) {
    const userQuery = User.findOne({ username: query.userName });
    query.with
      ? userQuery.populate("videos")
      : userQuery.populate({
          path: "videos",
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
          let videoSearch = user.videos.filter((video) =>
            video.title.toLowerCase().includes(query.searchTerm.toLowerCase())
          );
          if (query.genre) {
            videoSearch = videoSearch.filter(
              (video) => video.genre === query.genre
            );
          }
          return resHandler(query, videoSearch);
        } else if (query.genre) {
          const videoSearch = user.videos.filter(
            (video) => video.genre === query.genre
          );
          return resHandler(query, videoSearch);
        } else {
          return resHandler(query, user.videos);
        }
      })
      .catch((error) => {
        //handle user retrieval error
        console.log(error);
        next(error);
      });
  } else if (query?.searchTerm) {
    const videoQuery = Video.find();
    if (query.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery
      .then((videos) => {
        let videoSearch = videos.filter((video) =>
          video.title.toLowerCase().includes(query.searchTerm.toLowerCase())
        );
        if (query.genre)
          videoSearch = videoSearch.filter(
            (video) => video.genre === query.genre
          );

        return resHandler(query, videoSearch);
      })
      .catch((error) => {
        //handle video retrieval error
        console.log(error);
        next(error);
      });
  } else if (query?.genre) {
    const videoQuery = Video.find({ genre: query.genre });
    if (query.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery
      .then((videos) => {
        return resHandler(query, videos);
      })
      .catch((error) => {
        //handle video retrieval error
        console.log(error);
        next(error);
      });
  } else {
    const videoQuery = Video.find();
    if (query?.with) videoQuery.populate(parsePopulate(query.with));
    videoQuery.then((videos) => {
      return resHandler(query, videos);
    });
  }
});

router.get("/:id", (req, res, next) => {
  const videoQuery = Video.findById(req.params.id);
  if (req.query?.with) videoQuery.populate(parsePopulate(req.query.with));
  videoQuery
    .then((video) => {
      if (!video)
        return res
          .status(404)
          .json({ errorMessage: "Video not found", video: req.params.id });
      // console.log("READ: ", video);
      res.status(200).json(video);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/update", hasBackendAuth, async (req, res, next) => {
  const video_id = req.params.id;
  const video = await Video.findById(video_id).exec();
  if (video) {
    const {
      user: creator_id,
      title,
      story: story_id,
      upvotes: upvoter_id,
    } = req.body;
    if (upvoter_id) {
      // toggle a like for video by the given user
      if (video.upvotes.includes(upvoter_id))
        video.upvotes.splice(video.upvotes.indexOf(upvoter_id), 1);
      else video.upvotes.push(upvoter_id);
      video
        .save()
        .then((video) => {
          return res.status(200).json(video);
        })
        .catch((error) => {
          return res.status(500).json({
            errorMessage: "Failed to update video",
            video: video_id,
            error: error,
          });
        });
    } else if (
      creator_id &&
      video.user !== creator_id &&
      story_id &&
      video.story !== story_id
    ) {
      //reassign video to the new creator and a new story
      const oldStory = await Story.findById(video.story).exec();
      const newStory = await Story.findById(story_id).exec();
      const oldCreator = await User.findById(video.user).exec();
      const newCreator = await User.findById(creator_id).exec();
      if (oldCreator && newCreator && oldStory && newStory) {
        if (titleUsedAlready(title)) return invalidTitleResponse(title, res);
        else {
          oldCreator.videos.splice(oldCreator.videos.indexOf(video_id), 1);
          newCreator.videos.push(video_id);
          oldStory.video_contributions.splice(
            oldStory.video_contributions.indexOf(video_id),
            1
          );
          newStory.video_contributions.push(video_id);
          const oldCreatorSave = oldCreator.save();
          const newCreatorSave = newCreator.save();
          const oldStorySave = oldStory.save();
          const newStorySave = newStory.save();
          const videoUpdate = Video.findByIdAndUpdate(video_id, req.body, {
            new: true,
          }).exec();
          Promise.all([
            oldCreatorSave,
            newCreatorSave,
            oldStorySave,
            newStorySave,
            videoUpdate,
          ])
            .then((data) => {
              return res.status(200).json({
                originalCreator: data[0],
                newCreator: data[1],
                originalStory: data[2],
                newStory: data[3],
                video: data[4],
              });
            })
            .catch((error) => {
              return res.status(500).json({
                errorMessage: "Failed to update video",
                video: video_id,
                error: error,
              });
            });
        }
      } else if (!oldCreator)
        return res.status(404).json({
          errorMessage: "original creator for video has invalid id",
          creator: video.user,
        });
      else if (!newCreatory)
        return res.status(404).json({
          errorMessage: "new creator for video has invalid id",
          story: creator_id,
        });
      else if (!oldStory)
        return res.status(404).json({
          errorMessage: "original story for video has invalid id",
          story: video.story,
        });
      else if (!newStory)
        return res.status(404).json({
          errorMessage: "new story for video has invalid id",
          story: story_id,
        });
    } else if (creator_id && video.user !== creator_id) {
      //reassign video to a new creator
      const oldCreator = await User.findById(video.user).exec();
      const newCreator = await User.findById(creator_id).exec();
      if (oldCreator && newCreator) {
        if (titleUsedAlready(title)) return invalidTitleResponse(title, res);
        else {
          oldCreator.videos.splice(oldCreator.videos.indexOf(video_id), 1);
          newCreator.videos.push(video_id);
          const oldCreatorSave = oldCreator.save();
          const newCreatorSave = newCreator.save();
          const videoUpdate = Video.findByIdAndUpdate(video_id, req.body, {
            new: true,
          }).exec();
          Promise.all([oldCreatorSave, newCreatorSave, videoUpdate])
            .then((data) => {
              return res.status(200).json({
                originalCreator: data[0],
                newCreator: data[1],
                video: data[2],
              });
            })
            .catch((error) => {
              return res.status(500).json({
                errorMessage: "Failed to update video",
                video: video_id,
                error: error,
              });
            });
        }
      } else if (!oldCreator)
        return res.status(404).json({
          errorMessage: "original creator for video has invalid id",
          creator: video.user,
        });
      else if (!newCreatory)
        return res.status(404).json({
          errorMessage: "new creator for video has invalid id",
          story: creator_id,
        });
    } else if (story_id && video.story !== story_id) {
      //reassign video to a new story
      const oldStory = await Story.findById(video.story).exec();
      const newStory = await Story.findById(story_id).exec();
      if (oldStory && newStory) {
        if (titleUsedAlready(title)) return invalidTitleResponse(title, res);
        else {
          oldStory.video_contributions.splice(
            oldStory.video_contributions.indexOf(video_id),
            1
          );
          newStory.video_contributions.push(video_id);
          const oldStorySave = oldStory.save();
          const newStorySave = newStory.save();
          const videoUpdate = Video.findByIdAndUpdate(video_id, req.body, {
            new: true,
          }).exec();
          Promise.all([oldStorySave, newStorySave, videoUpdate])
            .then((data) => {
              return res.status(200).json({
                originalStory: data[0],
                newStory: data[1],
                video: data[2],
              });
            })
            .catch((error) => {
              return res.status(500).json({
                errorMessage: "Failed to update video",
                video: video_id,
                error: error,
              });
            });
        }
      } else if (!oldStory)
        return res.status(404).json({
          errorMessage: "original story for video has invalid id",
          story: video.story,
        });
      else if (!newStory)
        return res.status(404).json({
          errorMessage: "new story for video has invalid id",
          story: story_id,
        });
    }
    //change other fields for video
    else {
      if (titleUsedAlready(title)) return invalidTitleResponse(title, res);
      else {
        Video.findByIdAndUpdate(video_id, req.body, {
          new: true,
        })
          .then((video) => {
            return res.status(200).json(video);
          })
          .catch((error) => {
            return res.status(500).json({
              errorMessage: "Failed to update video",
              video: video_id,
              error: error,
            });
          });
      }
    }
  } else
    return res
      .status(400)
      .json({ errorMessage: "Video not found", video: video_id });
});

router.post("/:id/delete", hasBackendAuth, async (req, res, next) => {
  const video_id = req.params.id;
  const video = await Video.findById(video_id).exec();
  if (video) {
    const creator = await User.findById(video.user).exec();
    const story = await Story.findById(video.story).exec();
    if (creator && story) {
      creator.videos.splice(creator.videos.indexOf(video_id), 1);
      story.video_contributions.splice(
        story.video_contributions.indexOf(video_id)
      );
      const creatorSave = creator.save();
      const storySave = story.save();
      const videoDeletion = Video.findByIdAndDelete(video_id).exec();
      Promise.all([creatorSave, storySave, videoDeletion])
        .then((data) => {
          return res
            .status(200)
            .json({ creator: data[0], story: data[1], deletedVideo: data[2] });
        })
        .catch((error) => {
          return res.status(500).json({
            errorMessage: "Failed to delete video",
            video: video_id,
            error: error,
          });
        });
    } else if (!creator)
      return res.status(400).json({
        errorMessage: "creator for video has invalid id",
        creator: creator_id,
      });
    else if (!story)
      return res.status(400).json({
        errorMessage: "story for video has invalid id",
        story: story_id,
      });
  } else
    return res
      .status(400)
      .json({ errorMessage: "Video not found", video: video_id });
});

router.post("/create", hasBackendAuth, async (req, res, next) => {
  const { user: creator_id, title, story: story_id } = req.body;
  console.log("user: ", creator_id, "title: ", title, "story: ", story_id);
  if (creator_id && story_id) {
    if (!title) return invalidTitleResponse(title, res);
    const creator = await User.findById(creator_id).exec();
    const story = await Story.findById(story_id).exec();
    if (creator && story) {
      if (await isTitleInUse(creator_id, title))
        return invalidTitleResponse(title, res);
      else {
        const video = new Video(req.body);
        creator.videos.push(video._id);
        story.video_contributions.push(video._id);
        const creatorSave = creator.save();
        const storySave = story.save();
        const videoSave = video.save();
        Promise.all([creatorSave, storySave, videoSave])
          .then((data) => {
            return res
              .status(200)
              .json({ creator: data[0], story: data[1], newVideo: data[2] });
          })
          .catch((error) => {
            return res
              .status(500)
              .json({ errorMessage: "Failed to save new video", error: error });
          });
      }
    } else if (!creator)
      return res.status(400).json({
        errorMessage: "creator of video has invalid id",
        creator: user_id,
      });
    else if (!story)
      return res.status(400).json({
        errorMessage: "story for video has invalid id",
        story: story_id,
      });
  } else
    return res
      .status(400)
      .json({ errorMessage: "Must supply valid user id and story id" });
});

module.exports = router;
