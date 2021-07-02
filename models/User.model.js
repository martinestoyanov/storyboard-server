const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pictureURL: {
      type: String,
      default:
        "../images/profile-silhouette.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    stories: [{ type: ObjectId, ref: "Story" }],
    videos: [{ type: ObjectId, ref: "Video" }],
    comments: [{ type: ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
