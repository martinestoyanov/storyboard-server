const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const videoSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User", required: true },
    url: {
      type: String,
      required: true,
    },
    title: String,
    genre: {
      type: String,
      enum: [
        "Action/Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Romance",
        "Romantic Comedy",
        "Sci-Fi",
        "Thriller/Mystery",
      ],
    },
    upvotes: { type: ObjectId, ref: "User" },
    story: { type: ObjectId, ref: "Story", required: true },
    comments: [{ type: ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

const Video = model("Video", videoSchema);

module.exports = Video;
