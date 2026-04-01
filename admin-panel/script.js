document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const viewRequestsBtn = document.getElementById('view-requests-btn');
    const createRequestBtn = document.getElementById('create-request-btn');
    const viewPledgesBtn = document.getElementById('view-pledges-btn');
    const manageHospitalsBtn = document.getElementById('manage-hospitals-btn');

    const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:3000/api' 
        : window.location.origin + '/api';

    let adminToken = ''; // Store admin JWT token here

    // Function to handle admin login
    async function adminLogin() {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'admin@example.com',
                    password: 'adminpassword',
                }),
            });
            const data = await response.json();
            if (response.ok) {
                adminToken = data.token;
                console.log('Admin logged in successfully!');
            } else {
                console.error('Admin login failed:', data.error);
            }
        } catch (error) {
            console.error('Error during admin login:', error);
        }
    }

    // Call admin login on page load - moved to init
    // adminLogin();

    async function fetchHospitals() {
        try {
            const response = await fetch(`${API_BASE_URL}/admin/hospitals`, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch hospitals');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching hospitals:', error);
            return [];
        }
    }

    async function renderCreateRequestForm() {
        const hospitals = await fetchHospitals();
        let hospitalOptions = hospitals.map(h => `<option value="${h.id}">${h.name} (${h.address})</option>`).join('');

        contentDiv.innerHTML = `
            <h2>Create New Blood Request</h2>
            <form id="create-request-form">
                <div class="form-group">
                    <label for="hospitalId">Hospital:</label>
                    <select id="hospitalId" required>
                        ${hospitalOptions}
                    </select>
                </div>
                <div class="form-group">
                    <label for="bloodType">Blood Type:</label>
                    <select id="bloodType" required>
                        <option value="APOS">A+</option>
                        <option value="ANEG">A-</option>
                        <option value="BPOS">B+</option>
                        <option value="BNEG">B-</option>
                        <option value="ABPOS">AB+</option>
                        <option value="ABNEG">AB-</option>
                        <option value="OPOS">O+</option>
                        <option value="ONEG">O-</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="unitsRequired">Units Required:</label>
                    <input type="number" id="unitsRequired" min="1" required>
                </div>
                <div class="form-group">
                    <label for="urgency">Urgency:</label>
                    <select id="urgency" required>
                        <option value="LOW">Low</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HIGH">High</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="latitude">Latitude:</label>
                    <input type="text" id="latitude" required>
                </div>
                <div class="form-group">
                    <label for="longitude">Longitude:</label>
                    <input type="text" id="longitude" required>
                </div>
                <div class="form-group">
                    <label for="notes">Notes:</label>
                    <textarea id="notes"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit">Create Request</button>
                </div>
                <div id="message" class="message"></div>
            </form>
        `;

        document.getElementById('create-request-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            const messageDiv = document.getElementById('message');
            messageDiv.className = 'message';
            messageDiv.textContent = '';

            const hospitalId = document.getElementById('hospitalId').value;
            const bloodType = document.getElementById('bloodType').value;
            const unitsRequired = parseInt(document.getElementById('unitsRequired').value);
            const urgency = document.getElementById('urgency').value;
            const latitude = parseFloat(document.getElementById('latitude').value);
            const longitude = parseFloat(document.getElementById('longitude').value);
            const notes = document.getElementById('notes').value;

            try {
                const response = await fetch(`${API_BASE_URL}/admin/requests`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify({ hospitalId, bloodType, unitsRequired, urgency, latitude, longitude, notes }),
                });

                const data = await response.json();
                if (response.ok) {
                    messageDiv.classList.add('success');
                    messageDiv.textContent = 'Blood request created successfully!';
                    document.getElementById('create-request-form').reset();
                } else {
                    messageDiv.classList.add('error');
                    messageDiv.textContent = `Error: ${data.error || JSON.stringify(data.errors)}`;
                }
            } catch (error) {
                messageDiv.classList.add('error');
                messageDiv.textContent = 'An unexpected error occurred.';
                console.error('Error creating blood request:', error);
            }
        });
    }

    async function renderViewRequests() {
        contentDiv.innerHTML = '<h2>Blood Requests</h2><div id="message" class="message"></div><table id="requests-table"></table>';
        const messageDiv = document.getElementById('message');
        const requestsTable = document.getElementById('requests-table');

        try {
            const response = await fetch(`${API_BASE_URL}/requests`, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch blood requests');
            }
            const requests = await response.json();

            if (requests.length === 0) {
                requestsTable.innerHTML = '<p>No blood requests found.</p>';
                return;
            }

            let tableHtml = `
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hospital</th>
                        <th>Blood Type</th>
                        <th>Units</th>
                        <th>Urgency</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            `;
            requests.forEach(request => {
                tableHtml += `
                    <tr>
                        <td>${request.id}</td>
                        <td>${request.hospital ? request.hospital.name : 'N/A'}</td>
                        <td>${request.bloodType}</td>
                        <td>${request.unitsRequired}</td>
                        <td>${request.urgency}</td>
                        <td>
                            <select class="status-select" data-request-id="${request.id}">
                                ${['PENDING', 'FULFILLED', 'CANCELLED'].map(status => `
                                    <option value="${status}" ${request.status === status ? 'selected' : ''}>${status}</option>
                                `).join('')}
                            </select>
                        </td>
                        <td>
                            <button class="view-details-btn" data-request-id="${request.id}">View Details</button>
                        </td>
                    </tr>
                `;
            });
            tableHtml += `</tbody>`;
            requestsTable.innerHTML = tableHtml;

            requestsTable.querySelectorAll('.status-select').forEach(select => {
                select.addEventListener('change', async (event) => {
                    const requestId = event.target.dataset.requestId;
                    const newStatus = event.target.value;
                    try {
                        const updateResponse = await fetch(`${API_BASE_URL}/admin/requests/${requestId}/status`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${adminToken}`,
                            },
                            body: JSON.stringify({ status: newStatus }),
                        });
                        if (updateResponse.ok) {
                            messageDiv.classList.add('success');
                            messageDiv.textContent = `Request ${requestId} status updated to ${newStatus}.`;
                        } else {
                            const errorData = await updateResponse.json();
                            messageDiv.classList.add('error');
                            messageDiv.textContent = `Error updating status: ${errorData.error || 'Unknown error'}`;
                        }
                    } catch (error) {
                        messageDiv.classList.add('error');
                        messageDiv.textContent = 'An unexpected error occurred while updating status.';
                        console.error('Error updating request status:', error);
                    }
                });
            });

            requestsTable.querySelectorAll('.view-details-btn').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const requestId = event.target.dataset.requestId;
                    // Implement logic to show request details in a modal or new section
                    alert(`Viewing details for request ${requestId}`);
                });
            });

        } catch (error) {
            messageDiv.classList.add('error');
            messageDiv.textContent = 'Failed to load blood requests: ' + error.message;
            console.error('Error fetching blood requests:', error);
        }
    }

    async function renderViewPledges() {
        contentDiv.innerHTML = '<h2>Donation Pledges</h2><div id="message" class="message"></div><table id="pledges-table"></table>';
        const messageDiv = document.getElementById('message');
        const pledgesTable = document.getElementById('pledges-table');

        try {
            const response = await fetch(`${API_BASE_URL}/admin/donation-pledges`, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch donation pledges');
            }
            const pledges = await response.json();

            if (pledges.length === 0) {
                pledgesTable.innerHTML = '<p>No donation pledges found.</p>';
                return;
            }

            let tableHtml = `
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Donor</th>
                        <th>Request ID</th>
                        <th>Blood Type</th>
                        <th>Hospital</th>
                        <th>Status</th>
                        <th>Pledged At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            `;
            pledges.forEach(pledge => {
                tableHtml += `
                    <tr>
                        <td>${pledge.id}</td>
                        <td>${pledge.user ? `${pledge.user.firstName} ${pledge.user.lastName}` : 'N/A'}</td>
                        <td>${pledge.bloodRequest ? pledge.bloodRequest.id : 'N/A'}</td>
                        <td>${pledge.bloodRequest ? pledge.bloodRequest.bloodType : 'N/A'}</td>
                        <td>${pledge.bloodRequest && pledge.bloodRequest.hospital ? pledge.bloodRequest.hospital.name : 'N/A'}</td>
                        <td>
                            <select class="pledge-status-select" data-pledge-id="${pledge.id}">
                                ${['PENDING', 'EN_ROUTE', 'DONATED', 'CANCELLED'].map(status => `
                                    <option value="${status}" ${pledge.status === status ? 'selected' : ''}>${status}</option>
                                `).join('')}
                            </select>
                        </td>
                        <td>${new Date(pledge.pledgedAt).toLocaleString()}</td>
                        <td>
                            <button class="view-donor-btn" data-user-id="${pledge.user.id}">View Donor</button>
                        </td>
                    </tr>
                `;
            });
            tableHtml += `</tbody>`;
            pledgesTable.innerHTML = tableHtml;

            pledgesTable.querySelectorAll('.pledge-status-select').forEach(select => {
                select.addEventListener('change', async (event) => {
                    const pledgeId = event.target.dataset.pledgeId;
                    const newStatus = event.target.value;
                    try {
                        const updateResponse = await fetch(`${API_BASE_URL}/admin/donation-pledges/${pledgeId}/status`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${adminToken}`,
                            },
                            body: JSON.stringify({ status: newStatus }),
                        });
                        if (updateResponse.ok) {
                            messageDiv.classList.add('success');
                            messageDiv.textContent = `Pledge ${pledgeId} status updated to ${newStatus}.`;
                        } else {
                            const errorData = await updateResponse.json();
                            messageDiv.classList.add('error');
                            messageDiv.textContent = `Error updating pledge status: ${errorData.error || 'Unknown error'}`;
                        }
                    } catch (error) {
                        messageDiv.classList.add('error');
                        messageDiv.textContent = 'An unexpected error occurred while updating pledge status.';
                        console.error('Error updating pledge status:', error);
                    }
                });
            });

            pledgesTable.querySelectorAll('.view-donor-btn').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const userId = event.target.dataset.userId;
                    // Implement logic to show donor details in a modal or new section
                    alert(`Viewing donor ${userId}`);
                });
            });

        } catch (error) {
            messageDiv.classList.add('error');
            messageDiv.textContent = 'Failed to load donation pledges.';
            console.error('Error fetching donation pledges:', error);
        }
    }

    async function renderManageHospitals() {
        contentDiv.innerHTML = `
            <h2>Manage Hospitals</h2>
            <div id="message" class="message"></div>
            <h3>Add New Hospital</h3>
            <form id="add-hospital-form">
                <div class="form-group">
                    <label for="hospitalName">Name:</label>
                    <input type="text" id="hospitalName" required>
                </div>
                <div class="form-group">
                    <label for="hospitalAddress">Address:</label>
                    <input type="text" id="hospitalAddress" required>
                </div>
                <div class="form-group">
                    <label for="hospitalLatitude">Latitude:</label>
                    <input type="text" id="hospitalLatitude" required>
                </div>
                <div class="form-group">
                    <label for="hospitalLongitude">Longitude:</label>
                    <input type="text" id="hospitalLongitude" required>
                </div>
                <div class="form-group">
                    <label for="hospitalContactInfo">Contact Info:</label>
                    <input type="text" id="hospitalContactInfo">
                </div>
                <div class="form-group">
                    <button type="submit">Add Hospital</button>
                </div>
            </form>
            <h3>Existing Hospitals</h3>
            <table id="hospitals-table"></table>
        `;
        const messageDiv = contentDiv.querySelector('#message');
        const hospitalsTable = document.getElementById('hospitals-table');

        document.getElementById('add-hospital-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            messageDiv.className = 'message';
            messageDiv.textContent = '';

            const name = document.getElementById('hospitalName').value;
            const address = document.getElementById('hospitalAddress').value;
            const latitude = parseFloat(document.getElementById('hospitalLatitude').value);
            const longitude = parseFloat(document.getElementById('hospitalLongitude').value);
            const contactInfo = document.getElementById('hospitalContactInfo').value;

            try {
                const response = await fetch(`${API_BASE_URL}/admin/hospitals`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify({ name, address, latitude, longitude, contactInfo }),
                });

                const data = await response.json();
                if (response.ok) {
                    messageDiv.classList.add('success');
                    messageDiv.textContent = 'Hospital added successfully!';
                    document.getElementById('add-hospital-form').reset();
                    loadHospitalsTable(); // Reload table after adding
                } else {
                    messageDiv.classList.add('error');
                    messageDiv.textContent = `Error: ${data.error || JSON.stringify(data.errors)}`;
                }
            } catch (error) {
                messageDiv.classList.add('error');
                messageDiv.textContent = 'An unexpected error occurred.';
                console.error('Error adding hospital:', error);
            }
        });

        async function loadHospitalsTable() {
            try {
                const hospitals = await fetchHospitals();
                if (hospitals.length === 0) {
                    hospitalsTable.innerHTML = '<p>No hospitals found.</p>';
                    return;
                }

                let tableHtml = `
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Contact Info</th>
                        </tr>
                    </thead>
                    <tbody>
                `;
                hospitals.forEach(hospital => {
                    tableHtml += `
                        <tr>
                            <td>${hospital.id}</td>
                            <td>${hospital.name}</td>
                            <td>${hospital.address}</td>
                            <td>${hospital.latitude}</td>
                            <td>${hospital.longitude}</td>
                            <td>${hospital.contactInfo || 'N/A'}</td>
                        </tr>
                    `;
                });
                tableHtml += `</tbody>`;
                hospitalsTable.innerHTML = tableHtml;
            } catch (error) {
                messageDiv.classList.add('error');
                messageDiv.textContent = 'Failed to load hospitals.';
                console.error('Error loading hospitals:', error);
            }
        }

        loadHospitalsTable();
    }

    viewRequestsBtn.addEventListener('click', renderViewRequests);
    createRequestBtn.addEventListener('click', renderCreateRequestForm);
    viewPledgesBtn.addEventListener('click', renderViewPledges);
    manageHospitalsBtn.addEventListener('click', renderManageHospitals);

    // Initial load
    // Initial load
    async function init() {
        await adminLogin();
        renderViewRequests();
    }
    init();
});