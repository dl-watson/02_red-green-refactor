const { copyAndPush } = require("./copyAndPush");

describe("copyAndPush", () => {
  it("given an array and a new item, returns the original array with the passed number appended", () => {
    const array = [1, 2, 3];
    const value = 4;
    const numbers = copyAndPush(array, value);

    expect(numbers).toEqual([1, 2, 3, 4]);
  });
});

/*
create your function, use push to add item to array and return array
green, commit
oops we were supposed to return a copy
add another test that makes sure that the original array is unchanged
update code, use spread to copy and append
green, commit
*/
