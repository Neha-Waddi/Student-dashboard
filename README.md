# Project Title

A brief description of what this project does and who it's for 🎓 Student Management Dashboard

A React-based student management dashboard with Firebase Authentication and mocked API integration for listing and adding students.


## ✅ Features

* 🔐 **Login with Firebase Authentication** (test user provided)
* 📋 **Student Dashboard** displaying a list of students
* 🔍 **Search/Filter** students by name, email, or course
* ➕ **Add New Student** form with validations
* 💾 **Mock API** using `axios-mock-adapter` (no backend required)


## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/student-dashboard.git
   cd student-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Login using test credentials** (see below)
   After successful login, you'll be redirected to the dashboard.

---

## 🔐 Firebase Login Credentials (Test User Only)

| Email                                     | Password |
|-----------------------------|----------|
| meera@gmail.com               | 123456   |

> ✅ Only authenticated users can add new students.


## 🔄 Mock API Behavior

* The app uses `axios-mock-adapter` to simulate a backend.
* Data is **mocked and stored in-memory**.
* Changes (like adding a new student) **will not persist** on page refresh.
* Network delay of 1s is simulated to mimic real API latency.
