# Project progress scrapbook

This is the live record of work on the NSS Blood Donor project. `plan.md` defines
the target; `featurelist.json` defines features, dependencies and acceptance
criteria. Update this file after **partial work, completed work, failed checks,
blockers and decisions**. Do not treat drafted code or a declared command as a
verified feature.

## Current snapshot — 2026-10-02

**Overall:** Foundation in progress. Runnable API/web/Flutter development
scaffolds exist; identity, database workflow and donor journeys are not implemented.

**Target stack — 2026-10-01:** Aligned with the owner's Xerox Booking App guide:
Flutter/Riverpod/Dio/GoRouter mobile, Next.js web on Vercel, Express/TypeScript/Zod
backend with Prisma/PostgreSQL 17/PostGIS, Node durable worker, FCM/APNs, scoped
Socket.IO and private R2. Backend-owned identity replaces the former Supabase
Auth target. F002 workspace/environment/runtime scaffolds now use the selected
stack; Supabase SQL remains previous-stack reference for F003/F004 only.

**Scope clarification — 2026-10-02:** Preserve all nine steps of the owner's
registered-donor flow. Either authorized hospital staff or NSS coordinator can
publish without a mandatory second publisher. Normal FCM expands 10/25/50 km then
all configured Tamil Nadu coverage; emergencies immediately use all matching zones.
Donors Accept/Reject, complete an editable checkbox questionnaire and share private
responses/details with assigned admin for a phone-dialler validation call (owner's
selected option). Atomic slots/waiting offers, admin donors-ready notice, compressed
private R2 hospital certificate upload, hospital/NSS validation with verified-unit
closure, and failed-donor reason/admin alert/replacement are all required. Approved
preliminary responses are private app records; earlier no-answer-storage/read-only
questionnaire and mandatory-other-reviewer wording is superseded. Hospital test
reports, diagnoses/detailed histories and inventory remain excluded. Supabase is
not selected. These are requirements, not implemented features.

**Plan readiness:** Contract gaps from the audit are resolved in current plan/spec/
tracker/agent guide. Domain consumers now depend on F004; backend auth acceptance
has no dependency on later clients. F002 remains the implementation entry point.
Partner policies/checklist-response retention and clinical/privacy signoff remain
real-publication/enrollment gates, not unspecified workflow semantics.

**Feature tracker:** 1 done (`F001` project plan), 1 in progress (`F002` local
toolchain), 43 not started by acceptance status. Drafts for later database
features exist, but have not passed their acceptance criteria. `parallel` features
can start when their listed dependencies are done.

**What exists:** Pinned Node/pnpm and Flutter/pub workspaces, Express API/idle worker,
Next.js and Flutter bilingual development screens, guarded Compose commands,
PostgreSQL 17/PostGIS and actual scaffold tests. Previous Supabase drafts remain
reference only. See [LOCAL-DEVELOPMENT.md](LOCAL-DEVELOPMENT.md).

**What is missing:** F003 identity/organization migrations and seeds, F004 workflow
schema, authentication/session transports, real donor/staff journeys, durable
notification jobs, CI, provider setup and real-device validation. Reset, generation
and integration commands reject missing prerequisites instead of claiming success.

**Current limits:** The owner resumed implementation with parallel subagents.
Docker Compose start/health/stop/restart and PostGIS queries now pass with host
access; ordinary Docker Desktop restart reliability remains unresolved. No new
Desktop recovery/restart was attempted. Database migration/permission tests remain
unrun pending F003/F004. See [Docker recovery notes](DOCKER-RECOVERY.md).

**Repository/tooling gaps observed on 2026-09-30:** The installed pnpm is 11.19.0
while `package.json` declares 10.32.1; `pnpm-lock.yaml`, the backend runner,
synthetic seed, secret checker, application packages and test suites are absent.
These historical gaps are being resolved under F002: pinned Corepack pnpm works,
registry installation generated the lockfile and cumulative scaffold checks pass.
Clean-checkout frozen installs, cumulative checks and Compose lifecycle pass.

**Next work:** Obtain explicit authorization to push the verified
`codex/f002-toolchain` baseline to the configured GitHub origin; automatic approval
review rejected this export because destination trust/authorization was unverified.
F002 remains in progress until its remote-baseline gate passes. Then select F003
identity/organization Prisma foundation; F004 owns donor/request schema. Unrelated
working-tree deletions remain preserved and unstaged.

## Open release gates

- [ ] Database migrations, constraints and direct-access permission tests.
- [ ] API workflows, concurrency, idempotency and account lifecycle tests.
- [ ] Web/mobile journeys, Tamil/English, accessibility and responsive tests.
- [ ] Real-device FCM/APNs, foreground display and deep-link tests.
- [ ] Provider credentials, verified SMTP, partner/clinical/privacy approvals.
- [ ] Security review, load measurements, backups and tested restoration.
- [ ] Staff training, staffed-hours escalation drill and supervised pilot evidence.

## Dated work log

### 2026-10-02 — F002 Docker gate: recovered engine, restart defect reproduced

- **Scope:** Owner required Docker to run properly before implementation. Paused
  the parallel mobile scaffold agent before it changed files; no application
  implementation or dependent feature was started.
- **Observed:** Desktop 4.90.0.238679 could not rename `sailor-ingest.sock` to
  `.stale`, matching both owner screenshots. Host-access guarded recovery
  preserved only the two checked runtime socket directories and restored Linux
  engine 29.7.2. Sandbox WSL access denied does not establish a host WSL defect.
- **Verified:** Disposable network-isolated tmpfs PostgreSQL 17.11 container
  passed readiness and table/write/read checks with one row, then auto-removed.
  Normal `docker desktop restart --timeout 45` reproduced the host crash and
  timed out; guarded recovery restored Docker again. One transient process-path
  refusal was retried after shutdown without weakening safety checks.
- **Research:** Matching open Docker issues #676/#554 and official 4.93.0 release
  notes establish reports and available changes, not a permanent fix for this
  host. Exact underlying cause remains unconfirmed. Links and fresh evidence
  are recorded in `docs/DOCKER-RECOVERY.md`.
- **Limits/state:** F002 remains in progress; no PostGIS, migration, permission,
  application, Flutter or clean-checkout acceptance claimed. No upgrade, reset,
  data deletion or diagnostic upload. Unrelated working-tree changes preserved.
- **Next:** Resolve or explicitly accept the recurring Desktop startup limitation
  before resuming F002. A backed-up, controlled official-version upgrade and
  restart validation is a possible investigation; otherwise seek Docker support
  with separately authorized diagnostic sharing.

### 2026-10-02 — Implementation contracts resolved; owner flow preserved

- **Owner correction:** Both authorized staff and NSS coordinators may publish
  assigned requests without another mandatory publisher. All nine workflow steps
  remain required, with a feature-ownership coverage table in plan.md. The owner
  selected opening the phone dialler for the admin-to-donor validation call.
- **Superseded scope:** Earlier no-response-storage/read-only-question and separate
  personal-request approver restrictions do not apply. Donors submit exclusive
  Yes/No/Unsure checkbox responses after Accept; private versioned answers/details
  reach assigned admins before validation. Questionnaire consent/access/encryption/
  redaction/retention are included; no diagnoses, test results or detailed histories.
- **Resolved contracts:** Required private E.164 donor number, successful contact-
  version call validation, request origin as provenance only, canonical NORMAL/
  URGENT/CRITICAL/EMERGENCY urgency, independent hospital holds with timer suspension,
  immediate consent/access withdrawal and atomic slot/replacement effects. Defined
  admin donors-ready notice and verified-unit closure with notifications/dashboard.
- **Dependency/ownership:** Added F004 gates to F011/F012/F016/F017/F018/F023 and
  identity prerequisites to F007/F009; removed F007's now-inapplicable parallel tag.
  F006 accepts backend auth; browser/mobile transports belong to F008/F009. F002
  owns actual configuration/baseline/Compose readiness, F003 foundation and F004
  donor/request domain schema. Updated all active docs and agent instructions.
- **Readiness boundary:** Documentation is ready to guide implementation; old
  configuration, missing runner/lockfiles/manifests and unavailable Docker remain
  F002 implementation work. No tooling/runtime fix, migration/test suite, provider
  deployment or clinical approval is claimed; all 45 statuses/evidence are preserved.
- **Validation:** Feature graph, transitive model/auth gates, status/evidence,
  parallel tags, Markdown links/fences and current-contract contradiction scans
  are checked. Earlier audit and progress entries remain historical, superseded
  where this entry records the owner's clarification.
- **Next:** Implement/verify F002 and capture a reviewed explicit-path baseline;
  then F003/F004. Configure approved publication policies, questionnaires and
  response/evidence retention before real use.

### 2026-10-02 — Pre-implementation consistency audit

- **State:** Read the active agent guide, all five files in docs/, workspace/env
  configuration and previous-stack SQL references. No implementation feature
  started or completed; statuses and dependencies were not changed by this audit.
- **Verified:** 45 unique feature IDs; ordered/acyclic dependencies; 25 local
  Markdown links resolve; fences balance. Only F002 is ready. Node is 24.19.0,
  pnpm is 11.19.0 against declared 10.32.1, and Flutter is on PATH (SDK version
  and builds not checked). Docker info cannot reach the desktop-linux named pipe;
  no recovery/restart was attempted and no application tests ran.
- **Documentation gaps to resolve:** F012/F018 and matching/worker paths lack an
  F004 prerequisite despite requiring its workflow/policy tables. Some acceptance
  text still says pledge-target instead of slot/confirmed-coverage policy. Donor
  onboarding omits an explicit callable number/verification policy although the
  private call flow requires it; the old draft makes contact_number optional.
  Safety-hold wording both resolves and suspends commitments. The publication
  flow does not distinguish staff-originated requests from requester submission
  with no self-approval. Canonical urgency values are undefined; old SQL accepts
  LOW/MEDIUM/HIGH while the new requirement names critical/emergency. Consent
  withdrawal during an active pledge still leaves a handoff decision open.
- **Foundation gaps:** package.json/env/workspace/TypeScript config still target
  Supabase/Hono and apps/* rather than the selected stack; pnpm lockfile, runner,
  secret checker, Prisma schema and active web/mobile manifests are absent. These
  are already assigned to F002/F003, not evidence that new-stack features work.
  Current documentation/config drafts remain untracked and must be captured in
  an isolated, reviewed baseline without staging unrelated legacy deletions.
- **Next:** Correct prerequisite/wording gaps and settle callable contact,
  staff-originated publication, urgency and withdrawal semantics before their
  schema/API implementation. F002 foundation work can begin now; F003/F004 require
  the corrected contract and F002 acceptance. Partner coverage/timer/checklist/
  retention approvals remain required before real publication/enrollment.

### 2026-10-02 — Registered-donor workflow and edge cases incorporated

- **Feature/state:** Requirements amendment to F001 and acceptance criteria for
  dependent workflow/client/security features; all 45 IDs, statuses and existing
  evidence are unchanged. No implementation feature started or marked done.
- **Changed:** Aligned plan.md, techspec.md and featurelist.json with normal
  10/25/50 km then all-coverage fallback, immediate critical/emergency broadcasts,
  consent/group filtering, accept/reject, scoped coordinator click-to-call,
  bounded reservations, waiting order, expiring fresh replacement offers and
  failure/cancellation/no-show handling. Distinguish pending/confirmed donors,
  pending proof and hospital-verified units; donation reduces remaining capacity
  need before any replacement. Added quantity changes, outside-app fulfillment,
  holds, corrections, stale alerts and durable outage recovery acceptance cases.
- **Guidance/privacy:** Added five draft discussion prompts and hospital-approved
  immutable Tamil/English question versions. No donor answers/clinical reasons
  are sent or stored; calls record only contact metadata and coordination outcome.
  Full screening and medication decisions remain with the hospital.
- **Evidence/storage:** Reused Xerox private presign/direct-R2/finalize/review
  flow for readable compressed donation acknowledgements, with reference/attestation
  fallback. Documented 2 MiB default, five-minute grants, content validation, scoped
  access, metadata removal, suspicious-file quarantine, 24-hour orphan cleanup,
  approved retention, private backups and no medical-record uploads.
- **Dependency changes:** Dashboard, security verification and evidence backup now
  explicitly depend on F022. Other feature dependencies/tags and readiness remain
  preserved; F002 is still the only ready unfinished feature.
- **Validation:** Parsed feature JSON; checked 45 unique ordered IDs, valid/acyclic
  prerequisites, statuses/evidence preservation, readiness, local documentation
  links and Markdown fences. Reviewed conflicting Supabase-hosting and 50 km-cap
  statements; previous dated log entries are historical. No app/database/device
  tests, upload implementation, provider provisioning or clinical approval claimed.
- **Open/next:** Partners approve service coverage, urgency/contact/offer timers,
  hospital checklist versions and retention before publication/enrollment. Complete
  F002 toolchain and F003 Prisma port before implementing the workflow. Existing
  unrelated working-tree changes and historical drafts are preserved.

### 2026-10-01 — Stack aligned with Xerox Booking App guide

- **Reference:** Read the owner's
  `V:\xerox-booking-app\docs\PROJECT_TECHNICAL_GUIDE.md`, including mobile,
  web, API/database, identity, deployment and testing sections.
- **Changed:** Replaced the mobile target with Flutter/Dart, Riverpod, Dio,
  GoRouter, secure storage and Firebase Messaging. Aligned common layers to
  Next.js/TanStack Query/Zustand/Axios/Recharts, Express/TypeScript/Zod,
  Prisma/PostgreSQL, FCM, Socket.IO, R2 and the guide's hosting layout. Specified
  typed Dart/TypeScript API models and ARB/i18next locale parity rather than
  shared React/TypeScript mobile code. Updated plan, techspec, feature acceptance
  criteria, agent guidance and Docker notes consistently.
- **Domain decisions:** Retained PostGIS 10/25/50 km alert expansion, registration,
  clinical/data boundaries, staff TOTP/scoped access, secure web cookies,
  hospital-evidenced outcomes and durable jobs. Printing/payment/file-upload
  features were not added. Node outbox workers preserve delivery guarantees;
  Socket.IO provides scoped notices with REST fallback, not workflow authority.
- **Migration boundary:** `package.json`, workspace/env and `supabase/` drafts
  remain unchanged pending `F002`/`F003` implementation. Port database rules and
  remove Supabase identity/queue assumptions before acceptance; one migration
  path and backend identity system only. Older log entries remain historical.
- **Validation:** JSON parsed; 45 feature IDs and statuses retained (1 done,
  1 in progress, 43 not started). Ordered/acyclic dependencies, `parallel` tags
  and only `F002` being ready remain valid. Checked 24 local links and Markdown
  fences; confirmed Flutter and common guide layers across plan/spec/tracker,
  removal of old mobile/API/hosting targets, and retained registration,
  10/25/50 km expansion and clinical boundaries. Reviewed Prisma's custom SQL
  migration guidance and Flutter JSON serialization docs for cross-language/data
  contracts. No package installation, application/database tests, deployment or
  feature completion is claimed by this documentation change.
- **Next:** Complete `F002` for the new stack, then review/apply/test the Prisma
  port. Provider choice, region/PostGIS support, versions and hosting budgets
  remain release decisions; preserve existing unrelated working-tree changes.

### 2026-10-01 — Donor registration and zone-expansion coverage audit

- **Found:** Registration was covered by authentication, the donor journey and
  profile/consent (`F006`, `F016`), but activation/resume criteria were implicit.
  Distance filtering and consent-aware matching existed; automatic expansion
  when nearby donors were unavailable was not specified.
- **Changed:** Aligned `plan.md`, `techspec.md` and `featurelist.json` on explicit
  donor onboarding and hospital-centred 10 → 25 → 50 km alert zones. Defined
  immediate empty-zone expansion, partner-approved response windows and pledge
  targets, pause/resume, durable evaluation/deduplication, stop conditions,
  privacy-safe milestones and manual handoff after final-zone exhaustion.
  Discovery retains its independent 25 km default. Added data/API/client/test
  contracts and dependency gates for matching, worker and client delivery.
- **Status:** No implementation feature started or marked done; all 45 feature
  IDs and prior statuses retained. `F002` remains the next ready feature.
- **Validation:** JSON parsed; all 45 IDs and status counts retained (1 done,
  1 in progress, 43 not started). Dependencies are acyclic and ordered, `parallel`
  tags remain valid, and only `F002` is ready. Checked 21 local documentation
  links, Markdown fences and worker/client matching dependencies; reviewed
  registration, radii, response triggers, privacy and stop rules across the four
  product documents. No application/database tests run for this docs-only change.
- **Open:** Partners must approve urgency response windows and pledge targets
  before publication. Implementation remains behind the existing toolchain and
  database gates. Existing unrelated working-tree changes are preserved.

### 2026-09-30 — Foundation gap audit

- **Dependency gate:** Only `F002` is ready with `F001` done. `F003` and later
  foundation work still depend on a validated local toolchain.
- **Observed:** Node 24.19.0 matches `.node-version`; installed pnpm 11.19.0
  differs from the declared 10.32.1. No lockfile, backend runner, seed,
  secret-check script, active app packages, shared packages, tests or CI workflow
  exists in the current rebuild.
- **Validation limit:** `pnpm typecheck` and `pnpm test` attempted registry
  access, received `ECONNREFUSED`, and were stopped before any project check ran.
  No Docker/database test was run during this audit.
- **Next:** Reconcile pnpm, create and commit a lockfile and toolchain runner,
  prove local-only start/stop/reset and clean-checkout setup, then apply and test
  migrations and authorization before progressing to user journeys.

### 2026-09-30 — Documentation organized

- **Scope:** Moved the plan, feature tracker and live progress log into `docs/`;
  folded the historical progress snapshot into this file and removed the duplicate.
- **Planning:** Added unchecked completion boxes to plan success criteria,
  delivery stages and required tests. No feature or release gate was marked done.
- **Specification:** Added `techspec.md` as a draft engineering contract based on
  the plan, current SQL drafts and the incomplete workspace.
- **Validation:** Checked JSON parsing, local documentation links and tracker
  paths. No application or database test was run for this documentation change.

### 2026-09-30 — Progress scrapbook created

- **Feature:** `F002` in progress; no feature marked done by this entry.
- **Observed:** `plan.md`, `featurelist.json` (45 dependency-tracked features),
  `AGENTS.md`, workspace drafts and SQL migration drafts are present. The
  two-stage donor workflow is drafted in SQL but not applied or runtime-tested.
- **Validation:** The feature list parsed as JSON; its dependencies were checked
  for forward references and the `parallel` tags were checked against the graph.
  Local links in `plan.md` were checked. These checks do not validate the app.
- **Blocker/next:** Docker startup failed on 2026-09-30; restore a working local
  database, then execute migration and authorization tests.

### 2026-09-29 — Initial foundation drafts

- **Partial:** Workspace, Supabase configuration and two SQL migrations drafted;
  none applied. Old application source was preserved under `legacy/`, apart from
  removed credentials, generated binaries and development database artifacts.
- **Verified:** A guarded Docker recovery command restored the Linux engine for
  an isolated PostgreSQL 17 write/read smoke test. This did not test application
  migrations. A normal Docker restart reproduced the host socket failure.
- **Open:** The exposed historical Firebase key still needs owner-confirmed
  revocation. Git history still contains the old credential even though the
  working-tree copy was removed. A normal Docker Desktop restart reproduced
  error 1920 on its runtime sockets; the permanent host fix remains unresolved.
  The new API, clients, worker and CI had not been implemented.

## Entry rule for future work

Append a dated heading with the feature ID and state. Record **what changed,
what was actually tested, observed behavior, evidence paths, unresolved risks,
and the next action**. Update the current snapshot and `featurelist.json` at the
same time. Preserve earlier entries; add a correction entry if a previous claim
proves wrong. Mark a feature `done` only when all of its acceptance criteria have
verified evidence. After a safe, tested feature is committed and pushed, record
the commit or PR link here.

### 2026-10-02 — F002 parallel toolchain implementation

- **Scope:** Owner resumed implementation and requested parallel subagents. Only
  F002 was dependency-ready; backend, web and mobile scaffold slices ran in
  parallel. No dependent domain feature was started.
- **Changed:** Pinned Node 24/pnpm 10.32.1 and Flutter 3.24.5/Dart 3.5.4; pnpm/pub
  lockfiles, Express liveness/readiness and idle supervised worker, bilingual
  Next.js/Flutter screens, Compose PostgreSQL17/PostGIS image digest, guarded
  local commands and credential-pattern checks. Replaced active Supabase/Hono
  and TypeScript-mobile workspace declarations. F003/F010/F024 prerequisites
  fail explicitly; health/readiness and worker logs identify scaffold limitations.
- **Verified:** pnpm install; cumulative pnpm check passed: credential-pattern
  scan, backend/web TypeScript, 3 toolchain guard tests, 12 real-HTTP/config backend
  tests, Next production build, Flutter analysis and 2 widget tests. Separate
  Flutter enforced offline lockfile and web release build passed. Prisma7.10.0
  CLI runs; client/schema belongs to F003. Backend real combined supervisor
  returned live200/ready503, failed invalid config, stopped its children on Ctrl+C.
- **Observed/fixed:** Nested scripts initially selected host pnpm11.19.0; routed
  through Corepack. Vitest inherited obsolete discovery; added package config.
  Browser test found Tamil overflow at320px; wrapping fix rebuilt and retested.
  Playwright English/Tamil document language, narrow layout, health and page-error
  checks pass. Compose start/wait/down/up passes, preserves local volume; SQL
  confirms PostgreSQL17.5/PostGIS3.5. No migration/permission acceptance claimed.
- **Baseline review:** Explicit staged paths include new scaffolds and governing
  docs. Only conflicting old backend entry/seed and previously removed exposed
  .env/Firebase credential files are removed in this baseline. Unrelated old-app
  deletions, binaries, database drafts and legacy moves remain unstaged. No secret
  value is printed; credential revocation/history remediation remains an owner gate.
- **Pending:** Reviewed baseline commit/push and clean-checkout acceptance. Native
  builds/device tests are unrun: installed JDK21 does not match Gradle8.3 (JDK17
  documented), no mobile device, iOS requires macOS. Desktop startup defect remains
  documented; no host configuration changes. F002 remains in progress until the
  baseline/clean-checkout requirement is verified.

### 2026-10-02 — F002 clean-checkout verification; remote baseline blocked

- **Baseline:** Commit 8086470 contains reviewed F002 scaffolds and governing
  documentation. Follow-up 9dfe9aa excludes generated TypeScript build cache.
  Explicit-path staging preserved unrelated legacy deletions. The clone under
  .cache/f002-clean uses committed files, not the working tree.
- **Clean evidence:** Frozen pnpm install and enforced offline Flutter/pub lockfile
  install pass. The clean-clone pnpm check passes: active credential-pattern scan,
  backend/web typechecks, 3 reset/provider/foundation guard tests, 12 backend tests,
  Next production build, Flutter analysis and 2 widget tests. Backend build passes.
  Node/pub lockfiles remain unchanged. Next warns about the outer nested workspace;
  its build completes. The only clone tracked change is generated tsbuildinfo,
  excluded by the follow-up commit; no source/dependency drift.
- **Lifecycle:** Clean-clone backend:down/up/down passes; PostgreSQL/PostGIS becomes
  healthy and the project data volume is preserved. Docker services and browser
  verification server are stopped. Original-workspace API and web runtime checks
  passed as recorded above; clean API observation is recorded in the next entry.
- **Failure evidence:** Remote database URL reset is rejected before any mutation;
  local reset/types/integration commands reject absent F003 schema/seed; FCM-enabled
  startup rejects missing fields without values. These failures are intentional
  prerequisite checks, not claims of database migrations or provider delivery.
- **Blocked push:** Automatic approval review rejected git push to
  https://github.com/Gideonglady/NSS_BD_APP.git, explaining that repository export
  could contain sensitive contents and destination trust/authorization was not
  verified. No alternative upload, retry or bypass was attempted. Obtain explicit
  owner authorization for this exact branch/destination before pushing.
- **Status/next:** F002 remains in_progress with partial evidence. F003 and all
  consumers remain not_started, respecting dependency gates. Once remote baseline
  acceptance passes, complete F002 and select F003 identity/organization foundation.
  Native builds/devices, production credentials/policies, history credential
  revocation, permissions/workflows and ordinary Desktop restart remain unverified.

### 2026-10-02 — F002 clean API startup and shutdown observed

- Clean clone dev:all started API on127.0.0.1:49178 and the idle worker.
  /health/live returned200; /health/ready returned503 with database not_implemented.
  Ctrl+C logged both stopping events, closed the listener and left no backend
  source-process descendants. No clone edits or commits were made by this probe.
- Local implementation and clean acceptance checks are verified. Remote-baseline
  publication remains the sole outstanding F002 acceptance gate; automatic review
  requires explicit destination/export authorization. No dependent feature started.
