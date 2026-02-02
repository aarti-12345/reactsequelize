# React + Node.js + Sequelize Shop Demo

A **full-stack demo application** demonstrating **admin management and product CRUD operations** using **React, Node.js, Express, and Sequelize (MySQL)**.

⚡ **Public Demo:**  
This repository is a simplified yet fully functional demo built to showcase full-stack development concepts such as React frontend integration, RESTful APIs, Sequelize ORM, and MySQL database operations.

> Authentication, authorization, and validations are intentionally simplified for demonstration purposes.

🔒 **Full Implementation:**  
A complete, production-ready version with secure authentication, password hashing, protected routes, and enhanced validations is maintained in a **private repository** for learning and professional development purposes.

---

## 🛠 Tech Stack

- **Frontend:** React.js, Axios, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL with Sequelize ORM  
- **File Uploads:** Multer  
- **Other Tools:** dotenv, cors  

---

## 📂 Project Structure
react-node-sequelize-shop-demo/
│
├── backend/
│ ├── config/ # Sequelize database configuration
│ ├── models/ # Sequelize models (Admin, Product)
│ ├── routes/ # API routes (admin, product)
│ └── index.js # Express server entry point
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── FormAdmin.js
│ │ ├── fetchData.js
│ │ └── App.css
│ └── package.json
│
├── upload/ # Uploaded product images
└── README.md


---

## 🚀 Features

### Admin Management
- Create, read, and delete admins using REST APIs.
- React form to add admins and display existing records.

### Product Management
- Full CRUD operations for products.
- Image uploads handled using Multer.
- React frontend to add, edit, delete, and display products.
- Simple cart functionality managed using React component state (no backend persistence).

---

## ⚡ Installation & Setup

### Backend Setup
1. Navigate to the backend folder:
```bash
cd backend


Install dependencies:

npm install


Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=shop_demo
PORT=8000


Start the server:

node index.js


Backend runs on: http://localhost:8000

Frontend Setup

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the React app:

npm start


Frontend runs on: http://localhost:3000

🔑 API Endpoints
Admin Routes
Method	Endpoint	Description
POST	/api/admin	Add new admin
GET	/api/admin	Get all admins
DELETE	/api/admin/:id	Delete admin by ID
Product Routes
Method	Endpoint	Description
POST	/api/product	Add new product (with image)
GET	/api/product	Get all products
PUT	/api/product/:id	Update product
DELETE	/api/product/:id	Delete product

⚠️ Note:
This demo does not include authentication. All routes are publicly accessible for simplicity.

💡 Usage

Visit /form to add and manage admins.

Visit / to view products, edit them, or add items to the cart.

Cart data is maintained in React state only.

📌 Notes

This is a learning and portfolio project showcasing full-stack development skills.

Suitable for interviews, internships, and entry-level full-stack roles.

Production-ready security features are implemented separately in a private repository.

👩‍💻 Author

Aarti Maurya
Full-Stack Web Developer (React, Node.js, MySQL, Sequelize)

