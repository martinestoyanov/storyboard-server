const router = require("express").Router();

const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

const User = require("../models/User.model");

const hasBackendAuth = require("../middleware/hasBackendAuth");

function parsePopulate(paths) {
  return Array.isArray(paths) ? paths.join(" ") : paths;
}

router.get("/index", (req, res, next) => {
  const query = req.query;
  const resHandler = (query, userData) => {
    if (query?.start && query?.end) {
      //respond with users in given range
      let users = userData.slice(query.start, query.end + 1);
      return res.status(200).json({ users: users, total: userData.length });
    } else if (query?.random) {
      //respond with single random user
      const randomUser = [
        userData[Math.floor(userData.length * Math.random())],
      ];
      return res
        .status(200)
        .json({ users: randomUser, total: userData.length });
    } else {
      //respond with all users
      return res.status(200).json({ users: userData, total: userData.length });
    }
  };
  const userQuery = User.find();
  if (query?.with) userQuery.populate(parsePopulate(query.with));
  userQuery
    .then((users) => resHandler(query, users))
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  const userQuery = User.findById(req.params.id);
  if (req.query?.with) userQuery.populate(parsePopulate(req.query.with));
  userQuery
    .then((user) => {
      console.log("READ: ", user);
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json(error);
      next(error);
    });
});

router.post("/:id/update", hasBackendAuth, async (req, res, next) => {
  const {
    username: newName,
    password: newPassword,
    pictureURL: newPicture,
    email: newEmail,
  } = req.body;
  const user_id = req.params.id;
  if (newName) {
    const foundUser = await User.findOne({ username: newName }).exec();
    if (foundUser)
      return res.status(400).json({ errorMessage: "Username already taken" });
  }
  if (newPassword) {
    const passHash = await bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(newPassword, salt));
    req.body.password = passHash;
  }
  if (newEmail) {
    const foundUser = await User.findOne({ email: newEmail }).exec();
    if (foundUser)
      return res.status(400).json({ errorMessage: "Email already taken" });
  }
  if (newName || newPassword || newPicture || newEmail) {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then((user) => {
        if (!user)
          return res
            .status(400)
            .json({ errorMessage: "User has invalid id", user: user_id });
        else return res.status(200).json(user);
      })
      .catch((error) => res.status(500).json(error));
  } else
    return res.status(400).json({
      errorMessage:
        "Nothing to update; provide a new name, password, picture, and/or email",
    });
});

module.exports = router;
