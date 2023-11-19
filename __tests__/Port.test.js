const Port = require("../src/Port");

describe("Port", () => {
  describe("ports and ships", () => {
    let port;
    let ship;
    let titanic;
    let queenMary;

    beforeEach(() => {
      port = new Port("name");
      ship = {};
      titanic = {};
      queenMary = {};
    });

    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it("port has a name", () => {
      expect(port.name).toBeDefined();
    });

    it("can add a ship", () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it("can remove a ship", () => {
      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});
