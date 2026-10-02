import { createApp } from "./app.js";
import { readConfig } from "./config.js";

try {
  const config = readConfig();
  const server = createApp().listen(config.API_PORT, config.API_HOST, () => {
    console.info(JSON.stringify({ event: "api_started", host: config.API_HOST, port: config.API_PORT }));
  });
  server.on("error", (error: NodeJS.ErrnoException) => {
    console.error(JSON.stringify({ event: "api_start_failed", code: error.code ?? "UNKNOWN" }));
    process.exitCode = 1;
  });

  let stopping = false;
  const stop = () => {
    if (stopping) return;
    stopping = true;
    console.info(JSON.stringify({ event: "api_stopping" }));
    const timeout = setTimeout(() => {
      server.closeAllConnections();
      process.exitCode = 1;
    }, 10_000);
    timeout.unref();
    server.close((error) => {
      clearTimeout(timeout);
      if (error) process.exitCode = 1;
    });
  };
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);
} catch (error) {
  console.error(error instanceof Error ? error.message : "Backend startup failed");
  process.exitCode = 1;
}
