const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User" },
    text: String,
    story: { type: ObjectId, ref: "Story" },
    video: { type: ObjectId, ref: "Video" },
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
