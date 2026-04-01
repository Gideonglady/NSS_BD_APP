import fetch from 'node-fetch';

async function registerUser() {
    const url = 'http://localhost:3000/api/auth/register';
    const body = {
        email: "test@example.com",
        password: "password123",
        firstName: "Test",
        lastName: "User",
        bloodType: "APOS",
        isDonor: true,
        isRecipient: false,
        latitude: 0.0,
        longitude: 0.0,
        contactNumber: "+1234567890",
        medicalHistory: "None"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        console.log('Response Status:', response.status);
        console.log('Response Body:', data);
    } catch (error) {
        console.error('Error during registration:', error);
    }
}

registerUser();