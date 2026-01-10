

# **📝 Habit Tracker**

## **📌 Project Overview**

**Habit Tracker** is a **full-stack application** to **track and manage daily habits**. Users can **create, view, update, mark as completed, and delete habits** via a React + TypeScript frontend, powered by a Spring Boot REST API backend.

This project demonstrates:

* ✅ Full CRUD operations (Create, Read, Update, Delete)
* 🔄 Partial updates using **PATCH**
* 🌐 Seamless frontend-backend integration
* 🏗️ Application of **OOP principles**
* 💻 Automated setup via **GitHub Codespaces**

---

## **🛠️ Technology Stack**

* **Frontend:** ⚛️ React + TypeScript
* **Backend:** 🔧 Spring Boot REST API
* **Database:** 🗄️ H2 (in-memory) or any relational DB (MySQL/PostgreSQL)
* **Development Environment:** 🌟 GitHub Codespaces or local machine

---

## **✨ Key Features**

1. ➕ **Add Habit** – Create a new habit
2. 📋 **View Habits** – Display all habits
3. 🔍 **View Single Habit** – Details of a habit
4. ✏️ **Edit Habit** – Update name or description
5. ✅ **Mark Habit Completed** – Partial update using PATCH
6. 🗑️ **Delete Habit** – Remove a habit

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

* ⚛️ **Frontend:** User-friendly interface
* 🔧 **Backend:** REST endpoints for all CRUD operations
* 🗄️ **Database:** Stores habit data
* 🌟 **Codespaces:** One-click development environment setup

---

## **🚀 Getting Started**

### **1. Open in GitHub Codespaces or Locally**

**GitHub Codespaces:**

1. Fork the repository
2. Click **Code → Codespaces → Create codespace on main**
3. Wait for initialization (Java, Maven, Node, npm installed)

**Local Machine:**

1. Clone the repository:

   ```bash
   git clone https://github.com/Naeem955-something/Advanced-OOP.git
   cd Advanced-OOP
   ```
2. Install Node dependencies for frontend:

   ```bash
   cd frontend
   npm install
   ```

---

### **2. Configure API URL**

* **In Codespaces:**
  The frontend already points to the Codespaces URL:

  ```ts
  const API = "https://literate-umbrella-pjp6vjpqqj9jc7ggj-8080.app.github.dev/api/habits";
  ```
* **Locally:**
  Change it to:

  ```ts
  const API = "http://localhost:8080/api/habits";
  ```

> 💡 Tip: You can use **environment variables** in React to switch automatically between Codespaces and localhost (optional).

---

### **3. Run Backend**

```bash
cd /workspaces/Advanced-OOP/backend
mvn spring-boot:run

```

* 🔗 Backend API available at:

  * Codespaces: `https://<your-codespace>-8080.app.github.dev/api/habits`
  * Localhost: `http://localhost:8080/api/habits`

---

### **4. Run Frontend**

```bash
cd /workspaces/Advanced-OOP/frontend
npm install
npm start

```

* 🔗 Frontend available at:

  * Codespaces: `https://<your-codespace>-3000.app.github.dev`
  * Localhost: `http://localhost:3000`

---

### **5. Test Application**

* ➕ Add habits
* 📋 View all or specific habit
* ✏️ Edit habit
* ✅ Mark as completed
* 🗑️ Delete habit

---

## **📂 Project Structure**

```
habit-tracker/
├── backend/
│   ├── pom.xml
│   └── src/main/java/com/example/habittracker/
│       ├── HabitTrackerApplication.java
│       ├── controller/HabitController.java
│       ├── model/Habit.java
│       ├── repository/HabitRepository.java
│       └── service/HabitService*.java
│
├── frontend/
│   ├── package.json
│   ├── public/index.html
│   └── src/
│       ├── components/HabitForm.tsx
│       ├── components/HabitList.tsx
│       └── services/habitService.ts
│
└── README.md
```

---

## **💡 OOP Principles Applied**

* 🔒 **Encapsulation:** Habit entity manages state
* 🛠️ **Abstraction:** HabitService defines business logic
* ⚡ **Separation of Concerns:** Controller, Service, Repository layers
* 🔄 **Reusability:** React components are modular

---

## **📐 Design Decisions & Assumptions**

* Each habit includes **name, description, and completion status**
* PATCH is used **only for marking habits completed**
* H2 database used for simplicity; replaceable with MySQL/PostgreSQL
* GitHub Codespaces enables **one-click environment setup**

---

## **📝 Commit Guidelines**

* 🚀 `Initial project structure`
* 🔧 `Implemented backend REST endpoints`
* ⚛️ `Added frontend components`
* 🌐 `Connected frontend with backend API`
* 🛠️ `Bug fixes / UI improvements`

---



Do you want me to do that?

