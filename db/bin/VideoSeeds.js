require("dotenv").config();

const mongoose = require("mongoose");
const Videos = require("../../models/Video.model");

const videoSeeds = [
  {
    user: "60c025122524913ea661432c",
    url: "https://youtu.be/Gv1I0y6PHfg",
    title: "Dagon",
    genre: "Horror",
    story: "60ccf74658762c136c266e11",
  },
  {
    user: "60c025122524913ea661432c",
    url: "https://youtu.be/D4OExDImgm8",
    title: "The Field Bazaar",
    genre: "Thriller/Mystery",
    story: "60ccf74658762c136c266e12",
  },
  {
    user: "60c025182524913ea661432e",
    url: "https://youtu.be/qDHvTXeLN3Q",
    title: "The Damned Thing",
    genre: "Horror",
    story: "60ccf74658762c136c266e13",
  },
  {
    user: "60c025182524913ea661432e",
    url: "https://youtu.be/V8P7rgXa2-A",
    title: "A Dream of Armageddon",
    genre: "Sci-Fi",
    story: "60ccf74658762c136c266e14",
  },
  {
    user: "60c2a7faf125df63803d9cd7",
    url: "https://youtu.be/KAT0iHS3woo",
    title: "A Witch Shall Be Born",
    genre: "Fantasy",
    story: "60ccf74658762c136c266e15",
  },
  {
    user: "60c2a7faf125df63803d9cd7",
    url: "https://youtu.be/Z4sNcFfKNq0",
    title: "Mahalo King Cod Filet",
    genre: "Action/Adventure",
    story: "60ccf74658762c136c266e17",
  },
  {
    user: "60c2b91192825713783c6147",
    url: "https://youtu.be/WeOuKguaBec",
    title: "Broken Love",
    genre: "Romance",
    story: "60ccf74658762c136c266e1a",
  },
  {
    user: "60c2b91192825713783c6147",
    url: "https://youtu.be/Vw14zcvGmnI",
    title: "Golden Cheekbones and the Rising Sun",
    genre: "Romantic Comedy",
    story: "60ccf74658762c136c266e19",
  },
  {
    user: "60c77c65c3f357d34b633613",
    url: "https://youtu.be/qEeAQJSZaOw",
    title: "The Duplicity of Hargraves",
    genre: "Comedy",
    story: "60ccf74658762c136c266e16",
  },
  {
    user: "60c77c65c3f357d34b633613",
    url: "https://youtu.be/QrKJ9pNz0Jg",
    title: "On the Origin of Shadows",
    genre: "Drama",
    story: "60ccf74658762c136c266e18",
  },
];

async function seedTheDB() {
  await require("../index");
  Videos.create(videoSeeds)
    .then((videosFromDB) => {
      console.log(
        `Yay, ${videosFromDB.length} short films have been added to the db!`
      );
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log("Sadly, your seed process has failed. 😭", err);
    });
}

seedTheDB();
