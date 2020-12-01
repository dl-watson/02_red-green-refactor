const input = ["spot", "rover", "bingo", "fred"];

const capitalizeAndFilter = (input) => {
  const inputCopy = [...input];
  let output = [];
  for (let i = 0; i < input.length; i++) {
    const word = inputCopy[i];
    if (word.charAt(0) !== "f") {
      output.push(word.toUpperCase());
    }
  }
  return output;
};

module.exports = { capitalizeAndFilter };

console.log(capitalizeAndFilter(input));
