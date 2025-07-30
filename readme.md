# 💳 SmartBank Pro.JS — Full-Stack Banking Simulator (Node.js + SQL)

SmartBank Pro.JS is a robust, modular core banking simulation system built with **Node.js** and integrated with **MySQL/PostgreSQL**. It replicates real-world banking workflows like customer onboarding, multi-type accounts, money movement, interest systems, and audit reporting. The system uses a layered architecture and full Object-Oriented Programming (OOP) principles.

This project is ideal for backend developers looking to master **real-world domain modeling** and **SQL**.

Mastered Javsacript+ SQL With project 
---

## 🔧 Tech Stack

| Layer           | Technology                                  |
| :-------------- | :------------------------------------------ |
| 💻 Backend      | Node.js (JavaScript / TypeScript optional)  |
| 🔗 Database Layer | `pg` / `mysql2` or Knex.js ORM              |
| 🧠 Database     | PostgreSQL / MySQL                          |
| 🌐 API Framework | Express.js / Fastify                        |
| 🧪 Testing      | Jest, Supertest                             |
| 🖥️ Optional UI  | React / Next.js / Ink.js (CLI)              |

---

## 🧱 Core Modules

* **🧑‍💼 Customer Management**: Create, Read, Update, and Delete (CRUD) operations for customer profiles.
* **🏦 Account System**: Supports Savings, Current, and Fixed Deposit accounts.
* **🔁 Transaction Engine**: Handles deposits, withdrawals, and transfers with comprehensive validations.
* **💰 Interest Calculator**: Applies dynamic interest rules to accounts.
* **📜 Audit & Logs**: Ensures secure transaction logging with timestamps.
* **📊 Reports Generator**: Produces balance sheets, statements, and financial summaries.

---

## ⚙️ Architecture Overview

```

smartbank-pro-js/
├── src/
│   ├── controllers/           # Handle incoming HTTP requests
│   │   ├── customer.controller.js
│   │   ├── account.controller.js
│   │   ├── transaction.controller.js
│   │   ├── report.controller.js
│   │   └── auth.controller.js             # (optional for JWT)
│   │
│   ├── routes/                # Define all REST API endpoints
│   │   ├── customer.routes.js
│   │   ├── account.routes.js
│   │   ├── transaction.routes.js
│   │   ├── report.routes.js
│   │   └── index.js
│   │
│   ├── services/              # Business logic lives here
│   │   ├── customer.service.js
│   │   ├── account.service.js
│   │   ├── transaction.service.js
│   │   ├── report.service.js
│   │   └── interestCalculator.js
│   │
│   ├── dao/                   # Direct interaction with DB
│   │   ├── db.js                         # Connection pool
│   │   ├── customer.dao.js
│   │   ├── account.dao.js
│   │   ├── transaction.dao.js
│   │   └── logs.dao.js
│   │
│   ├── models/                # (Optional) ORM / JS Models
│   │   ├── Customer.js
│   │   ├── Account.js
│   │   ├── Transaction.js
│   │   └── Log.js
│   │
│   ├── middlewares/           # Custom middlewares
│   │   ├── errorHandler.js
│   │   └── validator.js
│   │
│   ├── utils/                 # Helpers & utilities
│   │   ├── logger.js
│   │   ├── constants.js
│   │   ├── enums.js
│   │   └── formatter.js
│   │
│   ├── config/                # Configs & ENV handling
│   │   ├── index.js
│   │   └── db.config.js
│   │
│   └── app.js                 # Main express app
│
├── db/
│   ├── schema.sql             # DDL: create tables, constraints
│   ├── seed.sql               # Dummy customer, accounts, txn
│   ├── queries.sql            # Reusable complex queries
│   └── migrations/            # (Optional) Versioned migrations
│
├── test/                      # All test cases
│   ├── customer.test.js
│   ├── account.test.js
│   ├── transaction.test.js
│   └── report.test.js
│
├── docs/                      # Documentation & API specs
│   └── swagger.yaml           # OpenAPI 3.0 spec (optional)
│
├── .env                       # Environment variables
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── server.js                  # Entry point to start the app

```

---

## 🔐 Example SQL Queries

```sql
-- Get total balance per customer
SELECT c.name, SUM(a.balance) AS total_balance
FROM customers c
JOIN accounts a ON c.id = a.customer_id
GROUP BY c.name;

-- Last 5 transactions
SELECT *
FROM transactions
WHERE customer_id = 101
ORDER BY created_at DESC
LIMIT 5;
````

-----

## 🚀 Quick Start

1.  **Clone + Install**

    ```bash
    npm install
    ```

2.  **Setup Environment**

    Create a `.env` file in the root directory and add your database configuration:

    ```env
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=smartbank
    DB_USER=postgres
    DB_PASS=yourpassword
    ```

3.  **Run Database Scripts**

    ```bash
    npm run db:setup # Runs schema + seed
    ```

4.  **Start Dev Server**

    ```bash
    npm run dev
    ```

-----

## 📡 API Routes Preview

| Method | Endpoint              | Description               |
| :----- | :-------------------- | :------------------------ |
| `POST` | `/api/customer`       | Create a customer         |
| `POST` | `/api/account`        | Open a new account        |
| `POST` | `/api/deposit`        | Deposit to account        |
| `POST` | `/api/withdraw`       | Withdraw from account     |
| `POST` | `/api/transfer`       | Transfer between accounts |
| `GET`  | `/api/statement/:id`  | Get mini statement        |

----- 

## 🔮 Future Additions

  * JWT-based login system
  * Full UI dashboard (React / Next.js)
  * Docker + CI/CD setup
  * gRPC API option
  * RBAC role system (Admin / Teller / Customer)
  * Report exporter (PDF / Excel)
  * Redis caching for account data
  * Blockchain plugin for immutable logs

-----

## 🧠 Learning Outcomes

By working with SmartBank Pro.JS, you will gain hands-on experience with:

  * **✅ Node.js layered architecture**
  * **✅ Real-world SQL schema & constraints**
  * **✅ OOP with service abstractions**
  * **✅ Async operations with SQL transactions**
  * **✅ API-first full-stack design**

-----

## 📜 License

This project is released under the **MIT License** — feel free to fork, build, and ship.

**💡 Simulate banking, master SQL + backend, ship like a pro.**

Built by Shrikee with Love, ☕, and 🤯.
`````

