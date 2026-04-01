import 'package:flutter/material.dart';
import 'donation_certificate_screen.dart';  // Import the certificate screen here
import 'package:url_launcher/url_launcher.dart';

class DonationStatusScreen extends StatelessWidget {
  const DonationStatusScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: const Text(
          'Donation Status',
          style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w600,
            color: Colors.black,
          ),
        ),
        centerTitle: true,
        elevation: 0,
        backgroundColor: Colors.white,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.black),
          onPressed: () => Navigator.pop(context),
        ),
      ),
      body: Column(
        children: [
          // Map section
          Container(
            height: 250,
            width: double.infinity,
            color: Colors.grey[200],
            child: Stack(
              children: [
                CustomPaint(
                  painter: GridMapPainter(),
                  size: const Size(double.infinity, 250),
                ),
                const Center(
                  child: Icon(
                    Icons.location_on,
                    size: 40,
                    color: Colors.red,
                  ),
                ),
              ],
            ),
          ),
          // Hospital info card
          Container(
            width: double.infinity,
            margin: const EdgeInsets.all(16.0),
            padding: const EdgeInsets.all(20.0),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 8,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'City General Hospital',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: Colors.black,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  '123 Medical Center Dr, Metro City, 45678',
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.grey[600],
                  ),
                ),
                const SizedBox(height: 20),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.red,
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      elevation: 0,
                    ),
                    onPressed: () async {
                      final lat = 0.0; // TODO: replace with real lat
                      final lng = 0.0; // TODO: replace with real lng
                      final query = Uri.encodeComponent('City General Hospital');
                      final googleMapsUrl = Uri.parse('https://www.google.com/maps/search/?api=1&query=$query');
                      if (await canLaunchUrl(googleMapsUrl)) {
                        await launchUrl(googleMapsUrl, mode: LaunchMode.externalApplication);
                      }
                    },
                    child: const Text(
                      'Get Directions',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: OutlinedButton.icon(
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8),
                      ),
                      side: const BorderSide(color: Colors.red, width: 1.5),
                    ),
                    onPressed: () async {
                      final telUri = Uri(scheme: 'tel', path: '+1800123456');
                      if (await canLaunchUrl(telUri)) {
                        await launchUrl(telUri);
                      }
                    },
                    icon: const Icon(
                      Icons.phone,
                      color: Colors.red,
                      size: 18,
                    ),
                    label: const Text(
                      'Call Hospital',
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.red,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          // Status timeline section
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0),
              child: SingleChildScrollView(
                child: Column(
                  children: [
                    _buildTimelineItem(
                      icon: Icons.check_circle,
                      iconColor: Colors.green,
                      title: 'Donation Confirmed',
                      subtitle: 'Your pledge was received at 9:01 PM, July 29.',
                      isCompleted: true,
                      showLine: true,
                    ),
                    _buildTimelineItem(
                      icon: Icons.schedule,
                      iconColor: Colors.blue,
                      title: 'Awaiting Your Arrival',
                      subtitle: 'Please proceed to the hospital registration desk.',
                      isCompleted: false,
                      isActive: true,
                      showLine: true,
                    ),
                    _buildTimelineItem(
                      icon: Icons.water_drop,
                      iconColor: Colors.grey,
                      title: 'Donation In Progress',
                      subtitle: 'This will update once the process begins.',
                      isCompleted: false,
                      isActive: false,
                      showLine: true,
                    ),
                    _buildTimelineItem(
                      icon: Icons.favorite,
                      iconColor: Colors.grey,
                      title: 'Donation Successful & Completed',
                      subtitle: '',
                      isCompleted: false,
                      isActive: false,
                      showLine: false,
                    ),
                    const SizedBox(height: 40),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTimelineItem({
    required IconData icon,
    required Color iconColor,
    required String title,
    required String subtitle,
    bool isCompleted = false,
    bool isActive = false,
    bool showLine = true,
  }) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Column(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: isCompleted || isActive ? iconColor : Colors.grey,
              ),
              child: Icon(
                icon,
                color: Colors.white,
                size: 20,
              ),
            ),
            if (showLine)
              Container(
                width: 2,
                height: 60,
                margin: const EdgeInsets.symmetric(vertical: 4),
                color: isCompleted
                    ? Colors.green
                    : (isActive ? Colors.blue : Colors.grey[300]),
              ),
          ],
        ),
        const SizedBox(width: 16),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 8),
              Text(
                title,
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: isCompleted || isActive ? Colors.black : Colors.grey,
                ),
              ),
              if (subtitle.isNotEmpty) ...[
                const SizedBox(height: 4),
                Text(
                  subtitle,
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.grey[600],
                  ),
                ),
              ],
              const SizedBox(height: 20),
            ],
          ),
        ),
      ],
    );
  }
}

class GridMapPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final gridPaint = Paint()
      ..color = Colors.grey[400]!
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;

    // Vertical grid lines
    for (int i = 0; i <= 4; i++) {
      double x = (size.width / 4) * i;
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), gridPaint);
    }

    // Horizontal grid lines
    for (int i = 0; i <= 3; i++) {
      double y = (size.height / 3) * i;
      canvas.drawLine(Offset(0, y), Offset(size.width, y), gridPaint);
    }

    final riverPaint = Paint()
      ..color = Colors.blue[400]!
      ..strokeWidth = 20
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    final riverPath = Path();
    riverPath.moveTo(0, size.height * 0.4);
    riverPath.quadraticBezierTo(
      size.width * 0.3,
      size.height * 0.1,
      size.width * 0.25,
      size.height * 0.8,
    );

    canvas.drawPath(riverPath, riverPaint);

    final parkPaint = Paint()
      ..color = Colors.green[400]!
      ..style = PaintingStyle.fill;

    canvas.drawRect(
      Rect.fromLTWH(size.width * 0.05, size.height * 0.05,
          size.width * 0.15, size.height * 0.15),
      parkPaint,
    );

    canvas.drawRect(
      Rect.fromLTWH(size.width * 0.6, size.height * 0.1,
          size.width * 0.35, size.height * 0.25),
      parkPaint,
    );

    canvas.drawRect(
      Rect.fromLTWH(size.width * 0.65, size.height * 0.5,
          size.width * 0.2, size.height * 0.15),
      parkPaint,
    );

    canvas.drawRect(
      Rect.fromLTWH(size.width * 0.45, size.height * 0.75,
          size.width * 0.1, size.height * 0.1),
      parkPaint,
    );
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}
