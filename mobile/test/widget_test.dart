import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:nss_blood_donor/app.dart';

void main() {
  testWidgets('scaffold is honest about readiness and changes language',
      (tester) async {
    await tester.pumpWidget(const ProviderScope(child: BloodDonorApp()));
    await tester.pumpAndSettle();
    expect(find.text('Development scaffold'), findsOneWidget);
    expect(find.textContaining('not yet ready'), findsOneWidget);
    await tester.tap(find.text('தமிழ்'));
    await tester.pumpAndSettle();
    expect(find.text('உருவாக்கம் நடைபெறுகிறது'), findsOneWidget);
    expect(find.text('Development scaffold'), findsNothing);
  });
  testWidgets('small screen and enlarged Tamil text have no layout errors',
      (tester) async {
    tester.view.physicalSize = const Size(320, 640);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);
    tester.platformDispatcher.textScaleFactorTestValue = 2;
    addTearDown(tester.platformDispatcher.clearTextScaleFactorTestValue);
    await tester.pumpWidget(ProviderScope(
      overrides: [localeProvider.overrideWith((ref) => const Locale('ta'))],
      child: const BloodDonorApp(),
    ));
    await tester.pumpAndSettle();
    expect(tester.takeException(), isNull);
  });
}
