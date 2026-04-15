# 🎟️ Seat Booking System (Backend Project)

A real-time seat booking system built with Node.js, Express, and PostgreSQL.

---

## 🚀 Live Demo

👉 https://book-my-ticket-vxym.onrender.com

---

## ⚙️ Features

- User Registration & Login (JWT Auth)
- Secure Password Hashing (bcrypt)
- Concurrency-safe Seat Booking (No double booking)
- PostgreSQL Transactions
- Clean API structure (DTO + Middleware, Standardised Response & Error Classe)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL (Neon)
- Docker (optional)

---

## 📦 API Endpoints

### Auth

#### Register
POST /auth/register

```json
{
  "name": "mehtab",
  "email": "mehtab@gmail.com",
  "password": "12345678"
}
````

---

#### Login

POST /auth/login

```json
{
  "email": "mehtab@gmail.com",
  "password": "12345678"
}
```

---

### Seats

#### Get Seats

GET /seats

---

#### Book Seat (Protected)

PUT /:id/:name

Headers:
Authorization: Bearer <token>

---

## 🧑‍💻 How to Run Locally

### 1. Clone repo

```bash
git clone https://github.com/Mehtab-786/book-my-ticket-main.git
cd your-repo
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create `.env`

```env
PORT=8080
DATABASE_URL=your_postgres_url
ACCESS_SECRET=your_secret
```

---

### 4. Run server

```bash
npm start
```

---

## 🗄️ Database Setup

Run this SQL:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    isbooked INT DEFAULT 0
);

INSERT INTO seats (isbooked)
SELECT 0 FROM generate_series(1, 20);
```

---

## 📌 Notes

* Booking uses transactions to prevent race conditions
* JWT used for authentication
* Production-ready structure with middleware

---

## 🙌 Author

Mehtab

````

````
---

## 👨‍💻 For DEVELOPERS 

### 1. Fork your repo
---

### 2. Clone it

```bash
git clone <their-fork>
```

---

### 3. Setup DB

Use:

* Neon (recommended)
* or local Postgres

---

### 4. Add `.env`

```env
PORT=...
DATABASE_URL=...
ACCESS_SECRET=...
```

---

### 5. Run project

```bash
npm install
npm start
```

---

### 6. Test with Postman

* Register
* Login
* Copy token
* Use in booking

---

## 🌟 Final Thoughts

This project demonstrates a production-style backend system with authentication, database transactions, and concurrency-safe operations.

If you found this useful or interesting, feel free to ⭐ the repo and share your feedback!

---

## 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

---

> Built with ❤️ by Mehtab