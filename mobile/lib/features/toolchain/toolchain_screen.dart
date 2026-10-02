import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../app.dart';

class ToolchainScreen extends ConsumerWidget {
  const ToolchainScreen({super.key});
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final tamil = ref.watch(localeProvider).languageCode == 'ta';
    return Scaffold(
      appBar: AppBar(
          title: Text(tamil ? 'என்எஸ்எஸ் இரத்த தானம்' : 'NSS Blood Donor')),
      body: SafeArea(
          child: ListView(padding: const EdgeInsets.all(24), children: [
        Text(tamil ? 'உருவாக்கம் நடைபெறுகிறது' : 'Development scaffold',
            style: Theme.of(context).textTheme.headlineSmall),
        const SizedBox(height: 16),
        Text(tamil
            ? 'இந்த செயலி இன்னும் இரத்த தான கோரிக்கைகளை ஒருங்கிணைக்க தயாராக இல்லை.'
            : 'This app is not yet ready to coordinate blood donation requests.'),
        const SizedBox(height: 16),
        Text(tamil
            ? 'முழுமையான மருத்துவ பரிசோதனை மற்றும் இரத்த சேகரிப்பு மருத்துவமனையின் பொறுப்பு.'
            : 'Full clinical screening and blood collection remain with the hospital.'),
        const SizedBox(height: 24),
        SegmentedButton<String>(
          segments: const [
            ButtonSegment(value: 'en', label: Text('English')),
            ButtonSegment(value: 'ta', label: Text('தமிழ்'))
          ],
          selected: {tamil ? 'ta' : 'en'},
          onSelectionChanged: (selection) => ref
              .read(localeProvider.notifier)
              .state = Locale(selection.single),
        ),
      ])),
    );
  }
}
