const { copyAndPush } = require("./copyAndPush");

describe("copyAndPush", () => {
  it("given an array and a new item, returns the original array with the passed number appended", () => {
    const numbers = [1, 2, 3, 4];

    expect(numbers).toEqual([1, 2, 3, 4]);
  });
});

/*
Write a test
create your function, use push to add item to array and return array
green, commit
oops we were supposed to return a copy
add another test that makes sure that the original array is unchanged
update code, use spread to copy and append
green, commit
*/
