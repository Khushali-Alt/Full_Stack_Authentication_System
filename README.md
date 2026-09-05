# 🔐 Full Stack Authentication System

A modern "full-stack authentication application" built with "Next.js, TypeScript, MongoDB, and Mongoose".

The project implements a complete authentication workflow including **user registration, login, email verification, protected routes, forgot password, and password reset via email**. It is currently being refined for production deployment with an improved UI/UX and better user experience.


## ✨ Features

- 🔐 User Signup & Login
- 🔒 Secure Password Hashing
- 📧 Email Verification
- 🔑 Forgot Password
- 🔄 Password Reset via Email
- 🛡️ Protected Routes
- 👤 User Profile
- 🍪 Authentication & Session Management
- ⏳ Token Expiration
- 📩 Email Delivery with Nodemailer & Mailtrap
- 🔔 Toast Notifications
- ⚡ Next.js App Router API Routes
- 📱 Responsive UI
- 🎨 Modern Authentication Interface
- 🌐 Deployment Preparation


## 🛠️ Tech Stack

- "Frontend":Next.js, React, TypeScript, Tailwind CSS
- "Backend": Next.js API Routes, Node.js
- "Database": MongoDB, Mongoose
- "Authentication": JWT, bcrypt
- "Email": Nodemailer, Mailtrap

### Deployment

- Vercel— Planned
- MongoDB Atlas


## 🏗️ Application Architecture

                         ┌──────────────────────┐
                         │       Next.js        │
                         │     Frontend UI      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    Next.js API       │
                         │       Routes         │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌──────────────────┐            ┌──────────────────┐
          │     MongoDB      │            │     Mailtrap     │
          │    + Mongoose    │            │   + Nodemailer   │
          └──────────────────┘            └──────────────────┘

## 🚀 Getting Started

```bash
git clone https://github.com/Khushali-Alt/Full_Stack_Authentication_System.git
cd Full_Stack_Authentication_System
npm install
npm run dev


👩‍💻 Author

Khushali
B.Tech CSE | Full Stack Developer | DSA & Problem Solving

⭐ If you find this project useful, consider starring the repository!
