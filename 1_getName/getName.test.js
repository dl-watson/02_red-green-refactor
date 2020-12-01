const { getName } = require("./getName");

describe("getName", () => {
  it("returns the name property of the passed object", () => {
    const spot = { name: "spot", age: 5, weight: "20 lbs" };
    const name = getName(spot);

    expect(name).toEqual("spot");
  });

  it("works with any object containing a name property", () => {
    const character = { _id: "5cf5679a915ecad153ab68c9", name: "Aang" };
    const name = getName(character);

    expect(name).toEqual("Aang");
  });
});

/* 
refactor, use dot notation to get the objects name
tests stay green, commit
refactor, destructure to get the objects name
tests stay green, commit
refactor, destructure function parameters and return name
tests stay green, commit
*/
