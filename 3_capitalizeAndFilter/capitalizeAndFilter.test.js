const { capitalizeAndFilter } = require("./capitalizeAndFilter");

describe("capitalizeAndFilter", () => {
  it("takes in an array of strings and returns an array of all capitalized strings, words beginning with F filtered out", () => {
    const input = ["spot", "rover", "bingo", "fred"];
    const output = capitalizeAndFilter(input);

    expect(output).toEqual(["SPOT", "ROVER", "BINGO"]);
  });
});

/*
Write a test
create a function, use a for loop to get test to pass
green, commit
refactor, use array methods to instead of a for loop
*/
