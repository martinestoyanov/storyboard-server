const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema(
  {
    author: { type: ObjectId, ref: "User", required: true },
    text: String,
    story: { type: ObjectId, ref: "Story" },
    video: { type: ObjectId, ref: "Video" },
    user: { type: ObjectId, ref: "User" },
    sentiment: Object,
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
