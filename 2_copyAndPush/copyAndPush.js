const numbers = [1, 2, 3];
const val = 4;

const copyAndPush = (arr, val) => {
  arr.push(val);
  return arr;
};

module.exports = { copyAndPush };

console.log(copyAndPush(numbers, val));
