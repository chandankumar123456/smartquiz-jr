# 🧠 SmartQuiz Jr – Backend (Phase 2)

## 🚀 Overview

**SmartQuiz Jr Backend** is the core server-side application that powers the SmartQuiz Jr platform — an **AI-powered quiz system** designed for kids.  
It handles everything from user authentication and quiz management to intelligent question generation and score tracking.

The backend is built using **Python + FastAPI**, offering high performance, modular structure, and easy integration with the React-based frontend.

---

## 🧩 Core Features

✅ **User Authentication (JWT-based)** – Secure login and registration  
✅ **Quiz Management System** – Create, fetch, and store quiz data  
✅ **AI Question Generation** – Dynamic question generation using an AI model  
✅ **Result Evaluation & Analytics** – Auto-grade quizzes and track user progress  
✅ **Database Integration** – Persistent storage with PostgreSQL (or MongoDB alternative)  
✅ **API Integration** – All features accessible via clean REST APIs  

---

## 🏗️ Project Architecture
```
smartquizjr_backend/
│
├── app/
│ ├── main.py # Entry point of the backend server
│ │ # Initializes FastAPI, routes, middleware, etc.
│ │
│ ├── database.py # Database connection setup using SQLAlchemy
│ │
│ ├── models.py # ORM models defining database tables (User, Quiz, Result)
│ │
│ ├── schemas.py # Pydantic models for data validation & serialization
│ │
│ ├── routes/ # All API routes are modularized here
│ │ ├── users.py # Signup, login, profile endpoints
│ │ ├── quiz.py # Quiz creation, retrieval, and scoring endpoints
│ │ └── ai_engine.py # AI-based quiz question generation routes
│ │
│ ├── services/ # Business logic and helper functions
│ │ ├── quiz_logic.py # Handles scoring, result evaluation, performance tracking
│ │ └── ai_module.py # Integrates AI APIs for question generation
│ │
│ └── utils/ # Utilities like authentication and configuration
│ ├── auth.py # JWT token generation, verification, and password hashing
│ └── config.py # Environment variables, constants, and API keys
│
├── tests/ # Unit and integration tests (using pytest)
│
├── requirements.txt # All Python dependencies
│
└── README.md # Project documentation (this file)
```

---

## ⚙️ Tech Stack

| Component | Technology |
|------------|-------------|
| **Language** | Python 3.11+ |
| **Framework** | FastAPI |
| **Database** | PostgreSQL (or MongoDB optional) |
| **ORM** | SQLAlchemy / Tortoise ORM |
| **Authentication** | JWT (JSON Web Tokens) |
| **AI Integration** | OpenAI / Groq API for quiz question generation |
| **Testing** | Pytest + Postman |
| **Deployment (Later)** | Render / Railway / Vercel |

---

## 🧠 Module Responsibilities

| Module | Description |
|---------|--------------|
| `main.py` | Initializes FastAPI app, registers routes, handles startup events. |
| `database.py` | Manages DB connection, engine creation, and session lifecycle. |
| `models.py` | Defines DB tables like `User`, `Quiz`, `Question`, and `Result`. |
| `schemas.py` | Defines request & response validation models using Pydantic. |
| `users.py` | Contains routes for user registration, login, profile management. |
| `quiz.py` | Handles quiz CRUD, fetching, submitting answers, and scoring logic. |
| `ai_engine.py` | Interacts with AI APIs (OpenAI/Groq) to generate new quiz questions. |
| `quiz_logic.py` | Handles quiz evaluation, score calculation, and analytics generation. |
| `ai_module.py` | Builds AI prompts, fetches generated questions, and validates responses. |
| `auth.py` | Implements password hashing, JWT token generation, and user verification. |
| `config.py` | Stores environment variables like DB credentials and API keys. |

---

## 🧰 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/chandankumar123456/smartquiz-jr.git
cd smartquizjr-backend
```
### 2️⃣ Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```
### 3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```
### 4️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
DATABASE_URL=postgresql://username:password@localhost:5432/smartquizjr
JWT_SECRET_KEY=your_secret_key_here
AI_API_KEY=your_ai_api_key_here
```
### 5️⃣ Run the Application
```bash
uvicorn app.main:app --reload
```
Server will start at: 
`http://localhost:8000`

### API Overview
| Endpoint            | Method | Description                      |
| ------------------- | ------ | -------------------------------- |
| `/api/users/signup` | POST   | Register a new user              |
| `/api/users/login`  | POST   | User login & get JWT             |
| `/api/quiz/create`  | POST   | Create a new quiz                |
| `/api/quiz/{id}`    | GET    | Get quiz details                 |
| `/api/quiz/submit`  | POST   | Submit quiz answers & get score  |
| `/api/ai/generate`  | POST   | Generate AI-based quiz questions |
---

### Example API Flow
```
1️⃣ User registers → `/api/users/signup`
2️⃣ User logs in → `receives JWT`
3️⃣ Frontend calls `/api/ai/generate` → AI creates new questions
4️⃣ User takes quiz → `/api/quiz/submit` → backend calculates score
5️⃣ User views results & progress analytics
```

---
### Authors
- Chandan Kumar - [GitHub](https://github.com/chandankumar123456)
- B.Tech in Artificial Intelligence - Anurag University
- Passionate about AI, NLP, and intelligent systems
- Reach me for collaboration or AI Projects!
