const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const videoSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User", required: true },
    url: {
      type: String,
      required: true,
    },
    categories: [String],
    upvotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Video = model("Video", videoSchema);

module.exports = Video;
