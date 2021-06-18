require("dotenv").config();

const mongoose = require("mongoose");
const Comments = require("../../models/Comment.model");

const commentStorySeeds = [
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e11",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e11",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e12",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e12",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e13",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e13",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e14",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e14",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e15",
  },
  {
    author: "60c2b91192825713783c6147",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e15",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e17",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e17",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e1a",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e1a",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e19",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e19",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e18",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e18",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e16",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    story: "60ccf74658762c136c266e16",
  },
];

async function seedTheDB() {
  await require("../index");
  Comments.create(commentStorySeeds)
    .then((commentsFromDB) => {
      console.log(
        `Yay, ${commentsFromDB.length} comments have been added to the db!`
      );
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log("Sadly, your seed process has failed. 😭", err);
    });
}

seedTheDB();
