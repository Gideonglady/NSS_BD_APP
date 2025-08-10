import 'package:flutter/material.dart';
import 'donation_confirmation_screen.dart';  // Import the confirmation screen

class NearbyRequestsPage extends StatelessWidget {
  const NearbyRequestsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8F9FB),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.white,
        title: const Text(
          "Nearby Requests",
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.black),
        ),
        centerTitle: false,
        actions: [
          IconButton(
            icon: const Icon(Icons.settings, color: Colors.black87),
            onPressed: () {},
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: ListView(
          children: [
            _buildRequestCard(
              context: context, // Pass context for navigation
              title: "Meenakshi Mission Hospital, Madurai",
              urgency: "CRITICAL",
              urgencyColor: Colors.red,
              unitsNeeded: 2,
              distance: "4.2 km away",
              onCall: () {},
              onRefer: () {},
            ),
            const SizedBox(height: 12),
            _buildRequestCard(
              context: context,
              title: "Apollo Hospital, Chennai",
              urgency: "URGENT",
              urgencyColor: Colors.orange,
              unitsNeeded: 1,
              distance: "8.1 km away",
              onCall: () {},
              onRefer: () {},
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 1,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home_outlined), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.bloodtype), label: "Requests"),
          BottomNavigationBarItem(icon: Icon(Icons.group_outlined), label: "Community"),
          BottomNavigationBarItem(icon: Icon(Icons.person_outline), label: "Profile"),
        ],
        selectedItemColor: Colors.red,
        unselectedItemColor: Colors.black54,
        onTap: (index) {},
      ),
    );
  }

  Widget _buildRequestCard({
    required BuildContext context,  // Added context parameter
    required String title,
    required String urgency,
    required Color urgencyColor,
    required int unitsNeeded,
    required String distance,
    required VoidCallback onCall,
    required VoidCallback onRefer,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: const [
          BoxShadow(
            color: Colors.black12,
            blurRadius: 4,
            offset: Offset(0, 2),
          ),
        ],
      ),
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Hospital Name & Urgency Badge
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: Text(
                  title,
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: urgencyColor.withOpacity(0.15),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: Text(
                  urgency,
                  style: TextStyle(
                    color: urgencyColor,
                    fontWeight: FontWeight.bold,
                    fontSize: 12,
                  ),
                ),
              )
            ],
          ),
          const SizedBox(height: 8),

          // Details Row (Units + Distance)
          Row(
            children: [
              const Icon(Icons.bloodtype, color: Colors.red, size: 18),
              const SizedBox(width: 4),
              Text(
                "$unitsNeeded units needed",
                style: const TextStyle(fontSize: 14),
              ),
              const SizedBox(width: 16),
              const Icon(Icons.location_on, color: Colors.grey, size: 18),
              const SizedBox(width: 4),
              Text(
                distance,
                style: const TextStyle(fontSize: 14),
              ),
            ],
          ),

          const SizedBox(height: 10),

          // Donate Now Button
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8)),
                padding: const EdgeInsets.symmetric(vertical: 12),
              ),
              onPressed: () {
                // Navigate to DonationConfirmationScreen on button press
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const DonationConfirmationScreen(),
                  ),
                );
              },
              child: const Text(
                "Donate Now",
                style:
                    TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
              ),
            ),
          ),

          const SizedBox(height: 8),

          // Call Hospital & Refer Donor Buttons
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    side: const BorderSide(color: Colors.grey),
                  ),
                  icon: const Icon(Icons.call, size: 18),
                  label: const Text("Call Hospital"),
                  onPressed: onCall,
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: OutlinedButton.icon(
                  style: OutlinedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    side: const BorderSide(color: Colors.grey),
                  ),
                  icon: const Icon(Icons.person_add_alt, size: 18),
                  label: const Text("Refer Donor"),
                  onPressed: onRefer,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
