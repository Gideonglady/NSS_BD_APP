import express from "express";

/** F002 only proves process health. Dependency readiness belongs to F003. */
export function createApp() {
  const app = express();
  app.disable("x-powered-by");

  app.use((_request, response, next) => {
    response.setHeader("Cache-Control", "no-store");
    next();
  });

  app.get("/health/live", (_request, response) => {
    response.json({ status: "alive", service: "nss-api" });
  });

  app.get("/health/ready", (_request, response) => {
    response.status(503).json({
      status: "not_ready",
      service: "nss-api",
      dependencies: { database: "not_implemented" },
    });
  });

  app.use((_request, response) => {
    response.status(404).json({ error: "not_found" });
  });
  return app;
}
