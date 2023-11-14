const Port = require("../src/Port");

describe("Port", () => {
  it("can be instantiated", () => {
    const port = new Port();

    expect(new Port()).toBeInstanceOf(Object);
  });
});

describe("Port name", () => {
  it("port has a name", () => {
    const port = new Port("name");

    expect(port.name).toBeDefined();
  });
});
