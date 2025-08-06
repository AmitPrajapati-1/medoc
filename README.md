# 🧪 Sample Collection Backend API

This is a role-based access-controlled backend API built with **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing sample collection requests. Authenticated users (Agents) can create, view, and manage sample requests.

---

## 🚀 Features

- 🔐 JWT-based Authentication
- 👤 Role-based Access Control (`agent`, `admin`)
- 📦 Sample creation and management
- 🏥 MongoDB Models for Hospital, Agent, and Sample
- 🌐 RESTful API structure
- ✅ Middleware-based Authorization

---

## 📂 Folder Structure

.
├── controllers/
├── models/
├── middlewares/
├── routes/
├── config/
├── server.js
├── .env
└── README.md

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Authorization:** Custom middlewares
- **Testing:** Postman

---

## 📦 Setup Instructions

1. **Clone the repository**

    ```bash
    git clone https://github.com/YOUR_USERNAME/Medoc.git
    cd Medoc
    Create a .env file in the root:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/sample-db
JWT_SECRET=your_jwt_secret
Run the server

bash
Copy
Edit
npm run dev
🧪 Sample Postman Tests
🔐 Register Agent
POST /api/agents/register

json
Copy
Edit
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
🔐 Login
POST /api/agents/login

json
Copy
Edit
{
  "email": "john@example.com",
  "password": "securepassword"
}
✅ On success, returns a token — use this in Authorization header for further requests:

makefile
Copy
Edit
Authorization: Bearer <token>
🏥 Create Sample
POST /api/samples/create

Headers:

makefile
Copy
Edit
Authorization: Bearer <token>
Body:

json
Copy
Edit
{
  "hospitalID": "64fca1a2e1fcd7250a8c1234",
  "agentID": "64fcbf3be6dbdf1fd51a1234",
  "patientName": "Ravi Kumar",
  "scheduleAt": "2025-08-07T10:00:00.000Z",
  "collectionAt": "2025-08-07T12:00:00.000Z",
  "status": "pending",
  "notes": "Handle with care"
}
🔐 Middleware Auth Flow
Middleware	Purpose
authenticate	Validates JWT token
isAgent	Ensures only users with agent role can access route

📃 Decisions & Assumptions
Roles are predefined: agent, admin

JWT tokens include id and role

Authorization is middleware-driven

Mongoose handles validation

Postman used for API testing
