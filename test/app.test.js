const request = require("supertest");
const { createApp } = require("../src/app");

describe("API", () => {
  const app = createApp();

  test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET / returns hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello from API" });
  });

  test("POST /echo returns payload", async () => {
    const payload = { a: 1, b: "two" };
    const res = await request(app).post("/echo").send(payload);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ you_sent: payload });
  });
});