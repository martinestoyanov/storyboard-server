const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const storySchema = new Schema(
  {
    author: { type: ObjectId, ref: "User", required: true },
    title: String,
    text: String,
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
    video_contributions: [{ type: ObjectId, ref: "Video" }],
    comments: [{ type: ObjectId, ref: "Comment" }],
    upvotes: { type: ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Story = model("Story", storySchema);

module.exports = Story;
