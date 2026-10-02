// F003 supplies durable job tables; later features supply handlers and leases.
// Keep this scaffold alive to exercise process supervision without inventing jobs.
console.info(JSON.stringify({
  event: "worker_scaffold_started",
  status: "idle",
  durableJobs: "not_implemented",
}));
const heartbeat = setInterval(() => {}, 60_000);
const stop = () => {
  clearInterval(heartbeat);
  console.info(JSON.stringify({ event: "worker_scaffold_stopped" }));
};
process.once("SIGINT", stop);
process.once("SIGTERM", stop);
