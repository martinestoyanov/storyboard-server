const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const videoSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User" },
    url: String,
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
    upvotes: Number,
  },
  {
    timestamps: true,
  }
);

const Video = model("Video", videoSchema);

module.exports = Video;
