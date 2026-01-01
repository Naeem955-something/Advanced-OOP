
# **Habit Tracker**

## **Project Overview**

Habit Tracker is a **full-stack application** that allows users to manage their daily habits.
Users can **add, view, update, mark as completed, and delete habits** through a React TypeScript frontend, backed by a Spring Boot REST API.

This project demonstrates:

* Full CRUD operations (Create, Read, Update, Delete)
* Partial updates using PATCH
* Frontend-backend integration
* Object-Oriented Programming concepts
* GitHub Codespaces automated development environment

---

## **Tech Stack**

* **Frontend:** React + TypeScript
* **Backend:** Spring Boot REST API
* **Database:** H2 (or any relational DB)
* **Development Environment:** GitHub Codespaces

---

## **Features**

1. **Add Habit** → Create new habit
2. **View Habits** → List all habits
3. **View Single Habit** → Retrieve habit details
4. **Edit Habit** → Update name, description, or completion status
5. **Mark Habit Completed** → Partial update (PATCH)
6. **Delete Habit** → Remove habit from system

---

## **System Architecture**

```
[Frontend: React + TypeScript]
            |
            | REST API (HTTP)
            v
[Backend: Spring Boot]
            |
            | JPA/Hibernate
            v
       [Database: H2/MySQL]
```

* **Frontend**: User interface to interact with habits
* **Backend**: Provides REST endpoints for CRUD operations
* **Database**: Stores habit data
* **Codespaces**: Automatically sets up environment for frontend and backend

---

## **Getting Started**

### **1. Open in GitHub Codespaces**

1. Fork the repository
2. Click **Code → Codespaces → Create codespace on main**
3. Wait for Codespaces to initialize (installs Java, Maven, Node, npm)

### **2. Run Backend**

```bash
cd backend
./mvnw spring-boot:run
```

* Backend runs at: `http://localhost:8080/api/habits`

### **3. Run Frontend**

```bash
cd frontend
npm install
npm start
```

* Frontend runs at: `http://localhost:3000`

### **4. Test CRUD Operations**

* Add new habit
* View habits
* Update habit details
* Mark habit as completed
* Delete habit

---

## **Folder Structure**

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

## **OOP Concepts Applied**

* **Encapsulation** → Habit entity
* **Abstraction** → HabitService interface
* **Separation of Concerns** → Controller, Service, Repository layers
* **Reusability** → React components

---

## **Assumptions / Design Decisions**

* Each habit has a **name, description, and completion status**
* Partial update (PATCH) is used **only for marking completed**
* Database is H2 for simplicity (can be swapped with MySQL)
* Codespaces ensures **one-click setup** for both frontend and backend

---

## **Commit Guidelines**

* Initial structure → `Initial project setup`
* Backend CRUD → `Implemented backend REST endpoints`
* Frontend UI → `Added React components`
* Integration → `Connected frontend with backend`
* Minor fixes → `Bug fixes / UI enhancements`

---
