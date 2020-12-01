const copyAndPush = (arr, val) => {
  let newarr = [];
  newarr = [...arr, val];
  return newarr;
};

module.exports = { copyAndPush };
