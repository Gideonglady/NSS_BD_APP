import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

const developmentApiUrl = String.fromEnvironment('API_BASE_URL',
    defaultValue: 'http://127.0.0.1:4000');
// No identity, refresh handling or domain mutations exist in this scaffold.
final apiClientProvider = Provider<Dio>((ref) {
  final client = Dio(BaseOptions(
      baseUrl: developmentApiUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10)));
  ref.onDispose(() => client.close(force: true));
  return client;
});
