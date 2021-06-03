const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const storySchema = new Schema(
  {
    user: { type: ObjectId, ref: "User" },
    text: String,
    category: [String],
    video_contributions: [{ type: ObjectId, ref: "Video" }],
  },
  {
    timestamps: true,
  }
);

const Story = model("Story", storySchema);

module.exports = Story;
