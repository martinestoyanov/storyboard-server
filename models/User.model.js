const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    password: String,
    picture: String,
    email: String,
    stories: [{ type: ObjectId, ref: "Story" }],
    videos: [{ type: ObjectId, ref: "Video" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
