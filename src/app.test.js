const app = require("./index");

const supertest = require("supertest");
const request = supertest(app);
const { describe } = require("jest-circus");

describe("/testmode endpoint", () => {
  it("shoud retrun the response", async () => {
    const res = await request.get("/testmode");
    expect(res.status).toBe(200);
    expect(res.text).toBe("App is working");
  });
});
