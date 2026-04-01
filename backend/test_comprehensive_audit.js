// Comprehensive Backend Audit Script

const BASE_URL = 'http://localhost:3000/api';

async function runTests() {
  console.log('🚀 Starting Comprehensive Backend Audit...');

  try {
    // 1. Register User (Test Donor)
    console.log('\n--- 🧪 Testing: User Registration ---');
    const registerRes = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test_donor@example.com',
        password: 'password123',
        firstName: 'Test',
        lastName: 'Donor',
        bloodType: 'OPOS',
        isDonor: true,
        latitude: 9.9320, // Madurai
        longitude: 78.1250,
      }),
    });
    const registerData = await registerRes.json();
    console.log('Registration Status:', registerRes.status);
    console.log('Response:', registerData);

    // 2. Login User
    console.log('\n--- 🧪 Testing: User Login ---');
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test_donor@example.com',
        password: 'password123',
      }),
    });
    const loginData = await loginRes.json();
    const userToken = loginData.token;
    const userId = loginData.userId;
    console.log('Login Status:', loginRes.status);
    console.log('User ID:', userId);

    // 3. Login Admin
    console.log('\n--- 🧪 Testing: Admin Login ---');
    // We assume the admin exists after seeding (which we'll do before running this)
    const adminLoginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@example.com',
        password: 'adminpassword',
      }),
    });
    const adminData = await adminLoginRes.json();
    const adminToken = adminData.token;
    console.log('Admin Login Status:', adminLoginRes.status);

    // 4. Admin Adds Hospital (If not there)
    console.log('\n--- 🧪 Testing: Admin Create Hospital ---');
    const hospitalRes = await fetch(`${BASE_URL}/admin/hospitals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminToken}`,
      },
      body: JSON.stringify({
        name: 'Audit Test Hospital',
        address: '123 Test St, Madurai',
        latitude: 9.9250,
        longitude: 78.1150,
      }),
    });
    const hospitalData = await hospitalRes.json();
    console.log('Hospital Create Status:', hospitalRes.status);

    // 5. User Creates Blood Request (Testing Nearest Hospital Auto-Assignment)
    console.log('\n--- 🧪 Testing: Nearest Hospital Auto-Assignment ---');
    const requestRes = await fetch(`${BASE_URL}/requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        bloodType: 'OPOS',
        unitsRequired: 1,
        urgency: 'HIGH',
        latitude: 9.9200, // Near the test hospital
        longitude: 78.1100,
        notes: 'Audit test request',
      }),
    });
    const requestData = await requestRes.json();
    console.log('Request Create Status:', requestRes.status);
    console.log('Assigned Hospital ID:', requestData.hospitalId);
    
    if (requestData.hospitalId) {
      console.log('✅ PASS: Hospital successfully assigned via GPS!');
    } else {
      console.error('❌ FAIL: Hospital assignment failed!');
    }

    // 6. Sync Device Token
    console.log('\n--- 🧪 Testing: FCM Token Sync ---');
    const deviceRes = await fetch(`${BASE_URL}/users/${userId}/device-token`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        deviceToken: 'audit_test_fcm_token_123',
      }),
    });
    console.log('Device Token Sync Status:', deviceRes.status);
    if (deviceRes.status === 200) {
      console.log('✅ PASS: Device token sync working!');
    }

    console.log('\n🏁 Audit Finished Successfully!');
  } catch (error) {
    console.error('\n❌ Audit Error:', error);
  }
}

runTests();
