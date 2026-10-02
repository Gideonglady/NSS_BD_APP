import { describe, expect, it } from "vitest";
import { readConfig } from "../src/config.js";

describe("startup configuration", () => {
  it("binds development to loopback by default", () => {
    expect(readConfig({})).toEqual({ API_HOST: "127.0.0.1", API_PORT: 4000, NODE_ENV: "development" });
  });

  it("accepts a configured port", () => {
    expect(readConfig({ API_PORT: "4100" }).API_PORT).toBe(4100);
  });

  it.each(["", "-1", "0", "65536", "4.1", "secret-value"])("rejects invalid port %j without echoing values", (API_PORT) => {
    expect(() => readConfig({ API_PORT })).toThrow("Invalid backend configuration: API_PORT");
  });

  it("rejects unsupported environments and blank host", () => {
    expect(() => readConfig({ NODE_ENV: "staging" })).toThrow("NODE_ENV");
    expect(() => readConfig({ API_HOST: " " })).toThrow("API_HOST");
  });
});
