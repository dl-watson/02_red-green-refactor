const input = ["spot", "rover", "bingo", "fred"];

const capitalizeAndFilter = (input) => {
  return input
    .filter((word) => word.charAt(0) !== "f")
    .map((name) => name.toUpperCase());
};

module.exports = { capitalizeAndFilter };

console.log(capitalizeAndFilter(input));
