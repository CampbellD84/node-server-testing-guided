const request = require("supertest");

const server = require("./server");

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  // http status codes (ex. 200, 401, 500)
  // format of the data (JSON, XML)
  //structure of the return data ({field: value})

  describe("GET /", () => {
    // Status Code Test
    it("should return 200 OK", async () => {
      const res = await request(server).get("/");

      expect(res.status).toBe(200);
    });

    // Test for Format
    it("should return a JSON object", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    // Test for JSON body structure
    it('should return {api: "up"}', async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
