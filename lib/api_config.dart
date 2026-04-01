import 'package:flutter/foundation.dart';
import 'dart:io';

class ApiConfig {
  // Replace this with your actual live server URL for production
  static const String liveBaseUrl = 'https://your-nss-bd-api.herokuapp.com'; // Example

  static String get baseUrl {
    if (kReleaseMode) {
      return liveBaseUrl;
    }

    if (kIsWeb) {
      return 'http://localhost:3000';
    }

    if (Platform.isAndroid) {
      // 10.0.2.2 is the special alias for the host machine in Android emulators
      return 'http://10.0.2.2:3000';
    }

    // Default for iOS Simulators or Desktop
    return 'http://localhost:3000';
  }

  static String get apiUrl => '$baseUrl/api';
}
