/** Process liveness only; database readiness belongs to the API. */
export function GET() {
  return Response.json(
    { status: 'ok', service: 'nss-web', stage: 'scaffold' },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
