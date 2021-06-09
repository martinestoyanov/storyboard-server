const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const storySchema = new Schema(
  {
    user: { type: ObjectId, ref: "User", required: true },
    title: String,
    text: String,
    genre: {
      type: String,
      enum: ["Action/Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Romantic Comedy", "Sci-Fi", "Thriller/Mystery"]
    },
    video_contributions: [{ type: ObjectId, ref: "Video" }],
  },
  {
    timestamps: true,
  }
);

const Story = model("Story", storySchema);

module.exports = Story;
