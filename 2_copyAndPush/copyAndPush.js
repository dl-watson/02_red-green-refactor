const numbers = [1, 2, 3];
const val = 4;

const copyAndPush = (arr, val) => {
  let newarr = [...arr];
  newarr.push(val);
  return newarr;
};

module.exports = { copyAndPush };
