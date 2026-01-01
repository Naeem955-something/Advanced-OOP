
---

# **📝 Habit Tracker**

## **📌 Project Overview**

**Habit Tracker** is a **full-stack application** designed to help users **track and manage their daily habits**. Users can **create, view, update, mark as completed, and delete habits** via a responsive React TypeScript frontend, powered by a Spring Boot REST API backend.

This project demonstrates:

* ✅ Full CRUD operations (Create, Read, Update, Delete)
* 🔄 Partial updates using **PATCH**
* 🌐 Seamless frontend-backend integration
* 🏗️ Application of **Object-Oriented Programming (OOP)** principles
* 💻 Automated development environment setup via **GitHub Codespaces**

---

## **🛠️ Technology Stack**

* **Frontend:** ⚛️ React + TypeScript
* **Backend:** 🔧 Spring Boot REST API
* **Database:** 🗄️ H2 (in-memory) or any relational DB (MySQL/PostgreSQL)
* **Development Environment:** 🌟 GitHub Codespaces

---

## **✨ Key Features**

1. ➕ **Add Habit** – Create a new habit with name and description
2. 📋 **View Habits** – Display a list of all habits
3. 🔍 **View Single Habit** – Retrieve detailed information for a specific habit
4. ✏️ **Edit Habit** – Update habit name, description, or completion status
5. ✅ **Mark Habit Completed** – Partial update using PATCH
6. 🗑️ **Delete Habit** – Remove a habit from the system

---

## **🏛️ System Architecture**

```
[Frontend: React + TypeScript]
            │
            │ REST API (HTTP)
            ▼
[Backend: Spring Boot]
            │
            │ JPA/Hibernate
            ▼
       [Database: H2/MySQL]
```

* ⚛️ **Frontend:** User-friendly interface to interact with habits
* 🔧 **Backend:** Provides REST endpoints for all CRUD operations
* 🗄️ **Database:** Stores habit data persistently
* 🌟 **Codespaces:** Automates setup for development environment

---

## **🚀 Getting Started**

### **1. Open in GitHub Codespaces**

1. Fork the repository
2. Click **Code → Codespaces → Create codespace on main**
3. Wait for Codespaces to initialize (Java, Maven, Node, and npm installed automatically)

### **2. Run Backend**

```bash
cd backend
./mvnw spring-boot:run
```

* 🔗 Backend API available at: `http://localhost:8080/api/habits`

### **3. Run Frontend**

```bash
cd frontend
npm install
npm start
```

* 🔗 Frontend available at: `http://localhost:3000`

### **4. Test Application**

* ➕ Add new habits
* 📋 View all habits or a specific habit
* ✏️ Edit habit details
* ✅ Mark habit as completed
* 🗑️ Delete habit

---

## **📂 Project Structure**

```
habit-tracker/
├── .devcontainer/            # Codespaces configuration
│   └── devcontainer.json
├── backend/                  # Spring Boot backend
│   ├── src/
│   │   ├── main/java/com/example/habittracker/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── repository/
│   │   │   └── model/
│   │   └── resources/
│   │       └── application.properties
│   └── pom.xml
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── LAB_TEST_ONE.md
```

---

## **💡 OOP Principles Applied**

* 🔒 **Encapsulation:** Habit entity manages its own state
* 🛠️ **Abstraction:** HabitService interface defines core business logic
* ⚡ **Separation of Concerns:** Controller, Service, Repository layers
* 🔄 **Reusability:** React components structured for modular use

---

## **📐 Design Decisions & Assumptions**

* 📝 Each habit includes a **name, description, and completion status**
* 🔄 Partial updates (PATCH) are used **only for marking habits as completed**
* 🗄️ H2 database is used for simplicity but can be replaced with MySQL/PostgreSQL
* 🌟 GitHub Codespaces provides **one-click environment setup** for both frontend and backend

---

## **📝 Commit Guidelines**

* 🚀 **Initial Setup:** `Initial project structure`
* 🔧 **Backend CRUD:** `Implemented backend REST endpoints`
* ⚛️ **Frontend UI:** `Added React components`
* 🌐 **Integration:** `Connected frontend with backend API`
* 🛠️ **Fixes & Enhancements:** `Bug fixes / UI improvements`

---



