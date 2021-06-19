require("dotenv").config();

const mongoose = require("mongoose");
const Comments = require("../../models/Comment.model");

const commentVideoSeeds = [
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c29",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c29",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2a",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2a",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2b",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2b",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2c",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2c",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2d",
  },
  {
    author: "60c2b91192825713783c6147",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2d",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2e",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2e",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2f",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c2f",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c30",
  },
  {
    author: "60c025122524913ea661432c",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c30",
  },
  {
    author: "60c0251d2524913ea6614330",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c31",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c31",
  },
  {
    author: "60c2a7faf125df63803d9cd7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c32",
  },
  {
    author: "60c025182524913ea661432e",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nisi sapiente voluptas voluptates dignissimos quibusdam.",
    video: "60cd0af15532425d34df6c32",
  },
];

async function seedTheDB() {
  await require("../index");
  Comments.create(commentVideoSeeds)
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
