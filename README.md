# 🛠 Local Vendor Discovery Platform (MERN Stack)

A full-stack MERN application that allows users to discover nearby local service providers (electricians, plumbers, carpenters, AC repair, etc.) based on geolocation. The platform includes secure authentication, vendor onboarding, admin verification, and location-based vendor search.

---

# 🚀 Features

## 👤 User Features

* Register and login securely using JWT authentication
* Discover nearby vendors using geolocation
* View verified vendors only
* Role-based access control

## 🧰 Vendor Features

* Vendor self-registration
* Provide service details and location
* Wait for admin verification
* Future support for booking and dashboard

## 👨‍💼 Admin Features

* View all pending vendor registrations
* Verify vendors
* Delete vendors if needed
* Secure admin-only routes

---

# 🧠 Tech Stack

## Frontend

* React.js (Vite)
* Tailwind CSS
* React Router
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt password hashing

## Tools

* Git & GitHub
* MongoDB Atlas
* Postman

---

# 🏗 System Architecture

Frontend (React)
↓
Backend API (Express)
↓
Controllers (Business Logic)
↓
MongoDB (Database)

---

# 🔐 Authentication Flow

1. User registers
2. Password hashed using bcrypt
3. User logs in
4. JWT token generated
5. Token used to access protected routes

---

# 📍 Geolocation Feature

Uses MongoDB GeoJSON and geospatial queries:

```js
location: {
  type: "Point",
  coordinates: [longitude, latitude]
}
```

Nearby search using:

```js
$near operator
```

---

# 📁 Project Structure

```
local-vendor-platform/
│
├── client/                 # React frontend
│   ├── src/
│   ├── pages/
│   ├── components/
│   └── services/
│
├── server/                 # Node backend
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── .env
├── .gitignore
└── README.md
```

---



# ▶️ How to Run Project Locally

## Backend Setup

```
cd server
npm install
npm start
```

## Frontend Setup

```
cd client
npm install
npm run dev
```

---

# 🔌 API Endpoints

## Auth

```
POST /api/auth/register
POST /api/auth/login
```

## Vendor

```
POST /api/vendors/register
GET /api/vendors/nearby
```

## Admin

```
GET /api/admin/pending
PATCH /api/admin/verify/:id
DELETE /api/admin/delete/:id
```

---

# 🔒 Security Features

* Password hashing (bcrypt)
* JWT authentication
* Role-based authorization
* Protected routes
* Admin-only access control

---

# 🚀 Future Enhancements

* Booking system
* Payment integration
* Vendor ratings and reviews
* Real-time chat (Socket.IO)
* Notifications
* Mobile app version

---

# 🧪 Use Cases

* Local service discovery
* Vendor marketplace
* Hyperlocal platforms
* Hackathon projects
* Portfolio projects

---

# 💼 Resume Description

Developed a full-stack MERN application for discovering and managing local vendors using geolocation-based search, JWT authentication, and role-based access control. Implemented vendor onboarding, admin verification, and secure REST APIs.

---

# 👨‍💻 Author

Rohit Singh
Full Stack Developer (MERN)

GitHub: https://github.com/YOUR_USERNAME/local-vendor-platform

---

# ⭐ If you like this project, give it a star!
