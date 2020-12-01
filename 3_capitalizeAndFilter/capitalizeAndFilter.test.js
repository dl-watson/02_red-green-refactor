const { capitalizeAndFilter } = require("./capitalizeAndFilter");

describe("capitalizeAndFilter", () => {
  it("takes in an array of strings and returns an array of all capitalized strings, words beginning with F filtered out", () => {
    const input = ["spot", "rover", "bingo", "fred"];
    const output = capitalizeAndFilter(input);

    expect(output).toEqual(["SPOT", "ROVER", "BINGO"]);
  });
});
