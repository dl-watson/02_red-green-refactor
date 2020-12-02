const { fetchQuotes } = require("./fetchQuotes");
const request = require("superagent");

jest.mock("superagent");

describe("fetchQuotes", () => {
  it("return as the result of an API fetch a single quote as an object with name, text and image properties", async () => {
    const mocked = {
      body: [
        {
          character: "Bender",
          quote: "I'm a fraud. A poor, lazy, sexy fraud.",
          image:
            "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png",
        },
      ],
    };
    request.get.mockResolvedValue(mocked);

    const actual = await fetchQuotes();
    expect(actual).toEqual([
      {
        name: "Bender",
        text: "I'm a fraud. A poor, lazy, sexy fraud.",
        image:
          "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png",
      },
    ]);
  });
});
