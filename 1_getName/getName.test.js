const { getName } = require("./getName");

describe("getName", () => {
  it("returns the name property of the passed object", () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    const name = getName(spot);

    expect(name).toEqual("spot");
  });
});

/* 
create your function, use bracket notation to get the objects name property
pass tests and commit
refactor, use dot notation to get the objects name
tests stay green, commit
refactor, destructure to get the objects name
tests stay green, commit
refactor, destructure function parameters and return name
tests stay green, commit
*/
