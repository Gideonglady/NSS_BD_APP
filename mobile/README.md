# Mobile development scaffold

Use Flutter **3.24.5 stable** with bundled Dart **3.5.4** (pinned in
`.flutter-version` and `sdk-versions.json`). Run from this directory:

```powershell
flutter pub get --enforce-lockfile
flutter analyze
flutter test
flutter run --dart-define=API_BASE_URL=http://127.0.0.1:4000
```

Riverpod, Dio and GoRouter power this toolchain-only Tamil/English scaffold.
It has no account, request, donor workflow, push or clinical functionality.
Client contracts, ARB localization and secure session integration belong to F009
after the backend prerequisites are complete. The screen explicitly states its
development status and performs no network mutations.

Android emulators reach the host API using `http://10.0.2.2:4000`; physical devices
need a reachable development host and explicit local-network configuration.
The default localhost API URL applies to browser development.

Generated Android scaffolding uses Gradle 8.3: use JDK 17 (Java 21 is not
compatible). iOS builds need macOS/Xcode and release signing. Native builds and
real-device tests remain separate gates; generated folders do not prove they pass.
