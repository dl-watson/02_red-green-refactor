const request = require("superagent");
const _ = require("lodash");

const fetchQuotes = async () => {
  try {
    const response = await request.get(
      "http://futuramaapi.herokuapp.com/api/quotes/"
    );

    return response.body.slice(0, 1);

    // return response.body.
    //   .map(({ character: name }) => name)
    //   .map(({ quote: text }) => text)
    //   .map(({ image }) => image);
  } catch (err) {
    console.log("Error!: ", err);
  }
};

module.exports = { fetchQuotes };

fetchQuotes();
