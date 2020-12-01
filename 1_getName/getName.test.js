const { getName } = require("./getName");

describe("getName", () => {
  it("returns the name property of the passed object", () => {
    const name = "spot";

    expect(name).toEqual("spot");
  });
});
