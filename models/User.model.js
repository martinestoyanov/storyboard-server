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
        "https://www.pngjoy.com/preview/c2q7b4g4u1u9p2_gray-circle-login-user-icon-png-transparent-png/",
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    stories: [{ type: ObjectId, ref: "Story" }],
    videos: [{ type: ObjectId, ref: "Video" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
