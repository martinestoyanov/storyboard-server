const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const videoSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User" },
    url: String,
    categories: [String],
    upvotes: Number,
  },
  {
    timestamps: true,
  }
);

const Video = model("Video", videoSchema);

module.exports = Video;
