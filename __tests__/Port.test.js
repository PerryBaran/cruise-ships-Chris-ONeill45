const Port = require("../src/Port");

describe("Port", () => {
  it("can be instantiated", () => {
    const port = new Port();

    expect(new Port()).toBeInstanceOf(Object);
  });

  it("can add a ship", () => {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });

  it("can remove a ship", () => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});

describe("Port name", () => {
  it("port has a name", () => {
    const port = new Port("name");

    expect(port.name).toBeDefined();
  });
});
