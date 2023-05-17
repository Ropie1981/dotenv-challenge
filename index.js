// index.js
require("dotenv").config();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;
const language2 = process.env.MY_LANGUAGE2;

console.log(
  `I am ${name}, wilder in ${city}, and I love ${language} & ${language2} !!`
);
