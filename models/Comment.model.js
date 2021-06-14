const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema(
  {
    user: { type: ObjectId, ref: "User", required: true },
    text: String,
    story: { type: ObjectId, ref: "Story" },
    video: { type: ObjectId, ref: "Video" },
    sentiment: Object,
  },
  {
    timestamps: true,
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
