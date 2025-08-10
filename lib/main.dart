import 'package:flutter/material.dart';
import 'nearby_requests_page.dart';  // import your file here

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Blood Donation App',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: const NearbyRequestsPage(),  // launch your page here
      debugShowCheckedModeBanner: false,
    );
  }
}
