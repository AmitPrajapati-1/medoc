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
