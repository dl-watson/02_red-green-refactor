const { fetchQuotes } = require("./fetchQuotes");
const request = require("superagent");

jest.mock("superagent");

describe("fetchQuotes", () => {
  it("return as the result of an API fetch a single quote as an object with name, text and image properties", async () => {
    request.get.mockResolvedValue({
      body: [
        {
          character: "Bender",
          quote: "I'm a fraud. A poor, lazy, sexy fraud.",
          image:
            "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png",
        },
      ],
    });

    const output = await fetchQuotes();
    expect(output).toEqual([
      {
        character: "Bender",
        quote: "I'm a fraud. A poor, lazy, sexy fraud.",
        image:
          "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png",
      },
    ]);
  });
});
