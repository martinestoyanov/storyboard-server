const router = require("express").Router();

const User = require("../models/User.model");

const isLoggedIn = require("../middleware/isLoggedIn");

router.use("/", isLoggedIn);

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

module.exports = router;
