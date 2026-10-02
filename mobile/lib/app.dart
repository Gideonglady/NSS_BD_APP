import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'features/toolchain/toolchain_screen.dart';

final localeProvider = StateProvider<Locale>((ref) => const Locale('en'));
final routerProvider = Provider<GoRouter>((ref) {
  final router = GoRouter(routes: [
    GoRoute(path: '/', builder: (context, state) => const ToolchainScreen()),
  ]);
  ref.onDispose(router.dispose);
  return router;
});

class BloodDonorApp extends ConsumerWidget {
  const BloodDonorApp({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) => MaterialApp.router(
        title: 'NSS Blood Donor',
        locale: ref.watch(localeProvider),
        supportedLocales: const [Locale('en'), Locale('ta')],
        localizationsDelegates: GlobalMaterialLocalizations.delegates,
        theme: ThemeData(
            colorScheme:
                ColorScheme.fromSeed(seedColor: const Color(0xffa32137)),
            useMaterial3: true),
        routerConfig: ref.watch(routerProvider),
      );
}
