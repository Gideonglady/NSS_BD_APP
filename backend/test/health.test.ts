import { once } from "node:events";
import type { AddressInfo } from "node:net";
import type { Server } from "node:http";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";

describe("API health boundary", () => {
  let server: Server;
  let baseUrl: string;

  beforeAll(async () => {
    server = createApp().listen(0, "127.0.0.1");
    await once(server, "listening");
    baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  });

  it("reports liveness without asserting dependency readiness", async () => {
    const response = await fetch(`${baseUrl}/health/live`);
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ status: "alive", service: "nss-api" });
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("x-powered-by")).toBeNull();
  });

  it("refuses readiness before the database foundation exists", async () => {
    const response = await fetch(`${baseUrl}/health/ready`);
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      status: "not_ready", service: "nss-api", dependencies: { database: "not_implemented" },
    });
  });

  it("returns a bounded JSON error for unavailable domain routes", async () => {
    const response = await fetch(`${baseUrl}/requests`);
    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: "not_found" });
  });
});
