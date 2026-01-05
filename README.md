# 📄 Document Parser Backend

A Node.js + Express backend for user authentication, PDF upload, PDF text parsing, and storing extracted document data in MongoDB Atlas.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Protected APIs using JWT Middleware
- PDF Upload API (Multer)
- PDF Text Parsing (pdf-parse / OCR fallback)
- Store extracted document data in MongoDB Atlas
- REST API architecture (Controllers + Services)
- Production-ready folder structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- Multer (file upload)
- pdf-parse / tesseract.js (OCR optional)

---

## 📁 Folder Structure

backend/
│── src/
│ ├── config/
│ │ ├── db.js
│ │ └── env.js
│ ├── controllers/
│ │ ├── auth.controller.js
│ │ └── document.controller.js
│ ├── models/
│ │ ├── user.model.js
│ │ └── document.model.js
│ ├── routes/
│ │ ├── auth.routes.js
│ │ └── document.routes.js
│ ├── services/
│ │ ├── auth.service.js
│ │ └── pdf.service.js
│ ├── middlewares/
│ │ ├── auth.middleware.js
│ │ └── upload.middleware.js
│ ├── utils/
│ │ └── jwt.js
│ ├── app.js
│ └── server.js
│── .env
│── package.json
│── README.md


---

## ▶️ Installation & Run

```bash
npm install
npm run dev
