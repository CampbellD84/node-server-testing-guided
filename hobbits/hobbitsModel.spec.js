const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");

describe("hobbits model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("hobbits").truncate();
    });

    it("should insert 2 hobbts", async () => {
      await Hobbits.insert({ name: "Gaffer" });
      await Hobbits.insert({ name: "Sam" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });
  });
});
