const { capitalizeAndFilter } = require("./capitalizeAndFilter");

describe("capitalizeAndFilter", () => {
  it("takes in an array of strings and returns an array of all capitalized strings, words beginning with F filtered out", () => {
    const input = ["spot", "rover", "bingo", "fred"];
    const output = ["SPOT", "ROVER", "BINGO"];

    expect(output).toEqual(["SPOT", "ROVER", "BINGO"]);
  });
});
