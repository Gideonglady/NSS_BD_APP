# Repository Guidelines

## Source of truth

Read `docs/plan.md` for product scope, architecture, clinical boundaries, and release gates. Use `docs/featurelist.json` to choose work: start a feature only when every `dependsOn` item is done. A `parallel` tag means it need not wait for the preceding feature. Record partial work, verified progress, and blockers in `docs/progress.md`. The current rebuild is incomplete; many `package.json` scripts are declarations without implementations. Treat `legacy/` as reference, not the active app.

## Work loop

1. **Refer:** Read the relevant plan section, feature acceptance criteria, and current code.
2. **Plan:** State the smallest complete change and its validation before editing.
3. **Act:** Implement one coherent feature, including its API, data, and user flow where applicable. Preserve the owner's nine-step flow, including preliminary checkbox responses privately shared with assigned admins and a dialler-based validation call. Keep hospital test results, diagnoses/detailed medical histories and blood-stock tracking out of this app.
4. **Test:** Run the relevant checks and permission/workflow tests. Never treat a command name as proof that a test exists or passed.
5. **Observe:** Exercise the real behavior, inspect errors and logs, then fix and retest failures.
6. **Finish:** Mark the feature done only with acceptance evidence; update `docs/progress.md` after partial or complete work. Commit and push feature-owned changes once safe and verified, then select the next ready feature. Preserve unrelated working-tree changes.

## Project checks

The target stack follows the common layers of the Xerox Booking App guide recorded in `docs/plan.md`: Flutter/Dart with Riverpod/Dio/GoRouter for mobile, Next.js/React/TypeScript for web, Node.js/Express/Zod for the API, Prisma with PostgreSQL 17/PostGIS, FCM, scoped Socket.IO, and private R2. Use pnpm for Node/web and Flutter SDK/pub for mobile. Validate Prisma migrations and permission SQL, Vitest/Playwright, Flutter analysis/unit/widget/integration tests and appropriate Maestro device flows. Existing `supabase/` configuration and unapplied SQL are previous-stack references to port; current command declarations are not proof of the new stack. Check `package.json` for available commands and `docs/DOCKER-RECOVERY.md` if local Docker fails. Before release, verify scoped staff access, custom authentication/session revocation, the handler check, hospital-evidenced outcomes, Tamil/English journeys, real-device notifications, Socket.IO access/reconnect, backup restoration, and the gates in `docs/plan.md`.

## Resolved implementation contracts

Use the request transition table and canonical contracts in `docs/plan.md`, not
previous SQL behavior. Both authorized hospital staff and NSS coordinators may publish assigned requests
without a mandatory second publisher, including their own creation. Urgency is
`NORMAL`/`URGENT`/`CRITICAL`/`EMERGENCY`. Donor activation requires a private valid
E.164 contact number; confirmed travel also requires coordinator call validation.
Hospital holds suspend commitments; closure ends coordination. Consent withdrawal
revokes access immediately and follows the documented cancellation/slot rules.
Donors submit the editable versioned checkbox questionnaire after Accept; assigned
admins receive the private responses/details before the validation call. The owner
selected opening the phone dialler. Health answers stay out of public/requester
views, notifications/logs/analytics; full clinical screening remains with hospital.

F002 owns the reviewed baseline and actual pnpm/Flutter/Compose configuration;
F003 owns database/identity/organization foundation; F004 owns donor/request
workflow schema and constraints. Never start a consumer before its data-model
prerequisites are done. Production policy, checklist and retention approvals are
launch configuration gates; labelled synthetic policies enable local testing.
