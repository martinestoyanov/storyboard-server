const axios = require("axios");

const analyzeText = axios.create({
  baseURL: `${process.env.AZURE_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Ocp-Apim-Subscription-Key": `${process.env.AZURE_KEY}`,
  },
});

const analyzeSemantics = async (req, _, next) => {
  const text = { documents: [{ id: "1", text: req.body.text }] };
  const data = await analyzeText
    .post(`/text/analytics/v3.1-preview.5/sentiment`, text)
    .then((result) => {
      req.body.semantics = result;
    })
    .catch((error) => {
      req.body.semantics = error;
    });
  next();
};

module.exports.analyzeSemantics = analyzeSemantics;
