# Blood Donation App Backend API Documentation

This document outlines the API endpoints for the blood donation application backend.

## Base URL
`/api`

## Authentication

All protected endpoints require a JSON Web Token (JWT) in the `Authorization` header: `Bearer YOUR_JWT_TOKEN`.

## 1. User Management

### 1.1 Register a New User

*   **Endpoint:** `POST /api/auth/register`
*   **Description:** Registers a new user as a donor or recipient.
*   **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword",
      "firstName": "John",
      "lastName": "Doe",
      "bloodType": "APOS", // e.g., APOS, ANEG, BPOS, BNEG, ABPOS, ABNEG, OPOS, ONEG
      "isDonor": true,
      "isRecipient": false,
      "latitude": 34.0522,
      "longitude": -118.2437,
      "contactNumber": "+1234567890",
      "medicalHistory": "No known conditions"
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "message": "User registered successfully",
      "userId": "clx0z9m000000000000000000"
    }
    ```
*   **Error Responses (400 Bad Request, 409 Conflict, 500 Internal Server Error):**
    ```json
    {
      "errors": [
        {
          "value": "invalid-email",
          "msg": "Invalid email address",
          "param": "email",
          "location": "body"
        }
      ]
    }
    // or
    {
      "error": "Email already registered"
    }
    ```

### 1.2 User Login

*   **Endpoint:** `POST /api/auth/login`
*   **Description:** Authenticates a user and returns a JWT.
*   **Request Body:**
    ```json
    {
      "email": "user@example.com",
      "password": "securepassword"
    }
    ```
*   **Response (200 OK):**
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```
*   **Error Response (400 Bad Request):**
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

### 1.3 Get User Profile

*   **Endpoint:** `GET /api/users/:id`
*   **Description:** Retrieves a user's profile. Requires authentication. Users can only view their own profile unless they have an 'ADMIN' role.
*   **Response (200 OK):**
    ```json
    {
      "id": "clx0z9m000000000000000000",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "bloodType": "APOS",
      "isDonor": true,
      "isRecipient": false,
      "latitude": 34.0522,
      "longitude": -118.2437,
      "contactNumber": "+1234567890",
      "lastDonationDate": null,
      "medicalHistory": "No known conditions",
      "role": "USER",
      "createdAt": "2025-09-17T08:00:00.000Z",
      "updatedAt": "2025-09-17T08:00:00.000Z"
    }
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found):**

### 1.4 Update User Profile

*   **Endpoint:** `PUT /api/users/:id`
*   **Description:** Updates a user's profile. Requires authentication. Users can only update their own profile unless they have an 'ADMIN' role.
*   **Request Body:** (Partial updates are allowed)
    ```json
    {
      "firstName": "Jonathan",
      "contactNumber": "+1987654321"
    }
    ```
*   **Response (200 OK):** Returns the updated user object.
*   **Error Responses (401 Unauthorized, 403 Forbidden, 500 Internal Server Error):**

### 1.5 Delete User Account

*   **Endpoint:** `DELETE /api/users/:id`
*   **Description:** Deletes a user account. Requires authentication. Users can only delete their own account unless they have an 'ADMIN' role.
*   **Response (204 No Content):**
*   **Error Responses (401 Unauthorized, 403 Forbidden, 500 Internal Server Error):**

### 1.6 Get All Donors

*   **Endpoint:** `GET /api/users/donors`
*   **Description:** Retrieves a list of all registered donors. Requires authentication.
*   **Response (200 OK):**
    ```json
    [
      {
        "id": "clx0z9m000000000000000000",
        "firstName": "John",
        "lastName": "Doe",
        "bloodType": "APOS",
        "latitude": 34.0522,
        "longitude": -118.2437,
        "contactNumber": "+1234567890",
        "lastDonationDate": "2025-08-01T00:00:00.000Z"
      }
    ]
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden):**

### 1.7 Get All Recipients

*   **Endpoint:** `GET /api/users/recipients`
*   **Description:** Retrieves a list of all registered recipients. Requires authentication.
*   **Response (200 OK):**
    ```json
    [
      {
        "id": "clx0z9m000000000000000000",
        "firstName": "Jane",
        "lastName": "Smith",
        "bloodType": "ONEG",
        "latitude": 34.0522,
        "longitude": -118.2437,
        "contactNumber": "+1122334455"
      }
    ]
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden):**

## 2. Blood Requests

### 2.1 Create a New Blood Request

*   **Endpoint:** `POST /api/requests`
*   **Description:** Creates a new blood request. Requires authentication.
*   **Request Body:**
    ```json
    {
      "bloodType": "ONEG",
      "unitsRequired": 2,
      "urgency": "HIGH", // LOW, MEDIUM, HIGH
      "latitude": 34.0522,
      "longitude": -118.2437,
      "notes": "Urgent need for O- blood."
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "id": "clx0z9m000000000000000001",
      "requesterId": "clx0z9m000000000000000000",
      "bloodType": "ONEG",
      "unitsRequired": 2,
      "urgency": "HIGH",
      "latitude": 34.0522,
      "longitude": -118.2437,
      "status": "PENDING",
      "notes": "Urgent need for O- blood.",
      "createdAt": "2025-09-17T08:00:00.000Z",
      "updatedAt": "2025-09-17T08:00:00.000Z"
    }
    ```
*   **Error Responses (400 Bad Request, 401 Unauthorized, 500 Internal Server Error):**

### 2.2 Get All Blood Requests

*   **Endpoint:** `GET /api/requests`
*   **Description:** Retrieves a list of all blood requests. Can be filtered by `status`, `bloodType`, and `requesterId`. Requires authentication.
*   **Query Parameters:**
    *   `status`: (Optional) Filter by request status (e.g., `PENDING`, `FULFILLED`, `CANCELLED`).
    *   `bloodType`: (Optional) Filter by blood type.
    *   `requesterId`: (Optional) Filter by the ID of the user who made the request.
*   **Response (200 OK):**
    ```json
    [
      {
        "id": "clx0z9m000000000000000001",
        "requesterId": "clx0z9m000000000000000000",
        "bloodType": "ONEG",
        "unitsRequired": 2,
        "urgency": "HIGH",
        "latitude": 34.0522,
        "longitude": -118.2437,
        "status": "PENDING",
        "notes": "Urgent need for O- blood.",
        "createdAt": "2025-09-17T08:00:00.000Z",
        "updatedAt": "2025-09-17T08:00:00.000Z",
        "requester": {
          "id": "clx0z9m000000000000000000",
          "firstName": "Jane",
          "lastName": "Smith",
          "contactNumber": "+1122334455"
        }
      }
    ]
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden):**

### 2.3 Get a Specific Blood Request

*   **Endpoint:** `GET /api/requests/:id`
*   **Description:** Retrieves details of a specific blood request. Requires authentication.
*   **Response (200 OK):**
    ```json
    {
      "id": "clx0z9m000000000000000001",
      "requesterId": "clx0z9m000000000000000000",
      "bloodType": "ONEG",
      "unitsRequired": 2,
      "urgency": "HIGH",
      "latitude": 34.0522,
      "longitude": -118.2437,
      "status": "PENDING",
      "notes": "Urgent need for O- blood.",
      "createdAt": "2025-09-17T08:00:00.000Z",
      "updatedAt": "2025-09-17T08:00:00.000Z",
      "requester": {
        "id": "clx0z9m000000000000000000",
        "firstName": "Jane",
        "lastName": "Smith",
        "contactNumber": "+1122334455"
      }
    }
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found):**

### 2.4 Update a Blood Request

*   **Endpoint:** `PUT /api/requests/:id`
*   **Description:** Updates a blood request. Only the requester or an 'ADMIN' can update a request. Requires authentication.
*   **Request Body:** (Partial updates are allowed)
    ```json
    {
      "status": "FULFILLED",
      "unitsRequired": 1,
      "urgency": "MEDIUM",
      "notes": "Partially fulfilled, still need 1 unit."
    }
    ```
*   **Response (200 OK):** Returns the updated blood request object.
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error):**

### 2.5 Delete a Blood Request

*   **Endpoint:** `DELETE /api/requests/:id`
*   **Description:** Deletes a blood request. Only the requester or an 'ADMIN' can delete a request. Requires authentication.
*   **Response (204 No Content):**
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error):**

### 2.6 Get Nearby Blood Requests

*   **Endpoint:** `GET /api/requests/nearby`
*   **Description:** Retrieves blood requests near a specified location. Requires authentication.
*   **Query Parameters:**
    *   `latitude`: (Required) User's current latitude.
    *   `longitude`: (Required) User's current longitude.
    *   `radius`: (Optional) Search radius in kilometers (default: 50km).
*   **Response (200 OK):**
    ```json
    [
      {
        "id": "clx0z9m000000000000000002",
        "requesterId": "clx0z9m000000000000000003",
        "bloodType": "APOS",
        "unitsRequired": 1,
        "urgency": "LOW",
        "latitude": 34.0600,
        "longitude": -118.2500,
        "status": "PENDING",
        "notes": "Need A+ blood.",
        "createdAt": "2025-09-17T08:05:00.000Z",
        "updatedAt": "2025-09-17T08:05:00.000Z",
        "requester": {
          "id": "clx0z9m000000000000000003",
          "firstName": "Bob",
          "lastName": "Johnson",
          "contactNumber": "+1555123456"
        }
      }
    ]
    ```
*   **Error Responses (400 Bad Request, 401 Unauthorized, 403 Forbidden):**

## 3. Donations

### 3.1 Record a New Donation

*   **Endpoint:** `POST /api/donations`
*   **Description:** Records a new blood donation. Requires authentication.
*   **Request Body:**
    ```json
    {
      "requestId": "clx0z9m000000000000000001", // Optional, if linked to a specific request
      "bloodType": "ONEG",
      "unitsDonated": 1,
      "donationDate": "2025-09-17T10:00:00.000Z",
      "status": "COMPLETED", // COMPLETED, SCHEDULED, CANCELLED
      "notes": "Donated at City Hospital."
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "id": "clx0z9m000000000000000004",
      "donorId": "clx0z9m000000000000000000",
      "requestId": "clx0z9m000000000000000001",
      "bloodType": "ONEG",
      "unitsDonated": 1,
      "donationDate": "2025-09-17T10:00:00.000Z",
      "status": "COMPLETED",
      "notes": "Donated at City Hospital.",
      "createdAt": "2025-09-17T10:00:00.000Z",
      "updatedAt": "2025-09-17T10:00:00.000Z"
    }
    ```
*   **Error Responses (400 Bad Request, 401 Unauthorized, 500 Internal Server Error):**

### 3.2 Get All Donations

*   **Endpoint:** `GET /api/donations`
*   **Description:** Retrieves a list of all donation records. Can be filtered by `donorId`, `requestId`, and `status`. Requires authentication.
*   **Query Parameters:**
    *   `donorId`: (Optional) Filter by the ID of the donor.
    *   `requestId`: (Optional) Filter by the ID of the associated blood request.
    *   `status`: (Optional) Filter by donation status (e.g., `COMPLETED`, `SCHEDULED`, `CANCELLED`).
*   **Response (200 OK):**
    ```json
    [
      {
        "id": "clx0z9m000000000000000004",
        "donorId": "clx0z9m000000000000000000",
        "requestId": "clx0z9m000000000000000001",
        "bloodType": "ONEG",
        "unitsDonated": 1,
        "donationDate": "2025-09-17T10:00:00.000Z",
        "status": "COMPLETED",
        "notes": "Donated at City Hospital.",
        "createdAt": "2025-09-17T10:00:00.000Z",
        "updatedAt": "2025-09-17T10:00:00.000Z",
        "donor": {
          "id": "clx0z9m000000000000000000",
          "firstName": "John",
          "lastName": "Doe",
          "contactNumber": "+1234567890"
        },
        "bloodRequest": {
          "id": "clx0z9m000000000000000001",
          "bloodType": "ONEG",
          "unitsRequired": 2
        }
      }
    ]
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden):**

### 3.3 Get a Specific Donation Record

*   **Endpoint:** `GET /api/donations/:id`
*   **Description:** Retrieves details of a specific donation record. Requires authentication.
*   **Response (200 OK):**
    ```json
    {
      "id": "clx0z9m000000000000000004",
      "donorId": "clx0z9m000000000000000000",
      "requestId": "clx0z9m000000000000000001",
      "bloodType": "ONEG",
      "unitsDonated": 1,
      "donationDate": "2025-09-17T10:00:00.000Z",
      "status": "COMPLETED",
      "notes": "Donated at City Hospital.",
      "createdAt": "2025-09-17T10:00:00.000Z",
      "updatedAt": "2025-09-17T10:00:00.000Z",
      "donor": {
        "id": "clx0z9m000000000000000000",
        "firstName": "John",
        "lastName": "Doe",
        "contactNumber": "+1234567890"
      },
      "bloodRequest": {
        "id": "clx0z9m000000000000000001",
        "bloodType": "ONEG",
        "unitsRequired": 2
      }
    }
    ```
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found):**

### 3.4 Update a Donation Record

*   **Endpoint:** `PUT /api/donations/:id`
*   **Description:** Updates a donation record. Only the donor or an 'ADMIN' can update a donation. Requires authentication.
*   **Request Body:** (Partial updates are allowed)
    ```json
    {
      "status": "CANCELLED",
      "notes": "Donor fell ill."
    }
    ```
*   **Response (200 OK):** Returns the updated donation object.
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error):**

### 3.5 Delete a Donation Record

*   **Endpoint:** `DELETE /api/donations/:id`
*   **Description:** Deletes a donation record. Only the donor or an 'ADMIN' can delete a donation. Requires authentication.
*   **Response (204 No Content):**
*   **Error Responses (401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error):**