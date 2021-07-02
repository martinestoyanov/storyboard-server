const axios = require("axios");

const analyzeText = axios.create({
  baseURL: `${process.env.AZURE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": `${process.env.AZURE_KEY}`,
  },
});

const analyzeSentiment = async (req, _, next) => {
  if (!req.body.text) next();
  console.log("Running sentiment service");
  const text = { documents: [{ id: "1", text: req.body.text }] };
  // console.log(text);
  const data = await analyzeText
    .post(`/text/analytics/v3.1-preview.5/sentiment`, commentText)
    .then((result) => {
      req.body.sentiment = result.data;
      console.log("This is the data from the API :", req.body.sentiment);
      next();
    })
    .catch((error) => {
      req.body.sentiment = error;
    });
};

module.exports.analyzeSentiment = analyzeSentiment;
