
async function loginAdmin() {
    const url = 'http://127.0.0.1:3000/api/auth/login';
    const body = {
        email: "admin@example.com",
        password: "adminpassword"
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
        if (response.ok) {
            console.log('Login Successful. Token received.');
            // console.log('Token:', data.token);
        } else {
            console.log('Login Failed:', data);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

loginAdmin();
