const request = require("superagent");

const fetchQuotes = async () => {
  try {
    const response = await request.get(
      "http://futuramaapi.herokuapp.com/api/quotes/"
    );

    const result = response.body
      .slice(0, 1)
      .map(({ character: name, quote: text, image }) => ({
        name,
        text,
        image,
      }));
    return result;
  } catch (err) {
    console.log("Error!: ", err);
  }
};

module.exports = { fetchQuotes };
