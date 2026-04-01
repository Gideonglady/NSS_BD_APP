import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'api_config.dart';
import 'login_screen.dart';
import 'requests_list_screen.dart';


void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);
  runApp(const MyApp());
}

@pragma('vm:entry-point')
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await Firebase.initializeApp();
  print('Handling a background message: ${message.messageId}');
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Widget _initialScreen = const Scaffold(body: Center(child: CircularProgressIndicator()));

  @override
  void initState() {
    super.initState();
    _checkLoginStatus();
    _initFirebaseMessaging();
  }

  Future<void> _checkLoginStatus() async {
    final prefs = await SharedPreferences.getInstance();
    final token = prefs.getString('jwt_token');

    if (token != null) {
      setState(() {
        _initialScreen = const RequestsListScreen();
      });
    } else {
      setState(() {
        _initialScreen = const LoginScreen();
      });
    }
  }

  Future<void> _initFirebaseMessaging() async {
    FirebaseMessaging messaging = FirebaseMessaging.instance;

    // Request permission for notifications
    NotificationSettings settings = await messaging.requestPermission(
      alert: true,
      announcement: false,
      badge: true,
      carPlay: false,
      criticalAlert: false,
      provisional: false,
      sound: true,
    );

    print('User granted permission: ${settings.authorizationStatus}');

    // Get the device token
    String? token = await messaging.getToken();
    print('FCM Device Token: $token');

    // Send this token to the backend and associate it with the logged-in user
    if (token != null) {
      await _sendTokenToBackend(token);
    }



    // Handle foreground messages
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      print('Got a message whilst in the foreground!');
      print('Message data: ${message.data}');

      if (message.notification != null) {
        print('Message also contained a notification: ${message.notification}');
        // You can display a local notification here
      }
    });

    // Handle messages when the app is opened from a terminated state
    FirebaseMessaging.onMessageOpenedApp.listen((RemoteMessage message) {
      print('A new onMessageOpenedApp event was published!');
      // Navigate to a specific screen based on message data
    });
  }

  Future<void> _sendTokenToBackend(String deviceToken) async {
    final prefs = await SharedPreferences.getInstance();
    final jwtToken = prefs.getString('jwt_token');
    final userId = prefs.getString('userId');

    if (jwtToken == null || userId == null) {
      print('User not logged in, skipping FCM token sync.');
      return;
    }

    try {
      final response = await http.put(
        Uri.parse('${ApiConfig.apiUrl}/users/$userId/device-token'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $jwtToken',
        },
        body: json.encode({'deviceToken': deviceToken}),
      );

      if (response.statusCode == 200) {
        print('FCM device token updated successfully on backend.');
      } else {
        print('Failed to update FCM token: ${response.body}');
      }
    } catch (e) {
      print('Error sending FCM token to backend: $e');
    }
  }


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Blood Donation App',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: _initialScreen,
      debugShowCheckedModeBanner: false,
    );
  }
}
