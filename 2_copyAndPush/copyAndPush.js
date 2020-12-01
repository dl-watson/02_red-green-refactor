const numbers = [1, 2, 3];
const val = 4;

const copyAndPush = (arr, val) => {
  let newarr = [];
  newarr = [...arr, val];
  return newarr;
};

module.exports = { copyAndPush };
