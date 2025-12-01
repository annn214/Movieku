# MOVIEKU
## **Tugas Project Based 2 API Kelompok 2**

🎬 Movieku API  

Movieku adalah aplikasi **manajemen data film** berbasis API yang dibangun menggunakan **AdonisJS**, dilengkapi dengan autentikasi JWT, CRUD Movie, integrasi API eksternal TMDb, serta frontend sederhana untuk interaksi pengguna.

Dokumentasi ini membantu developer memahami cara kerja API, endpoint utama, mekanisme autentikasi, dan format request/response.

---

## 📌 Fitur Utama

- User Authentication (JWT Token)
- CRUD Movie (Create, Read, Update, Delete)
- Integrasi API Eksternal TMDb (search, detail, trending)
- Dokumentasi API Swagger

## 🌍 Link Dokumentasi Swagger
https://annn214.github.io/Movieku/swagger.html

## 🔐 Autentikasi API (JWT)

Tambahkan header:

Authorization: Bearer <token>

Token diperoleh dari endpoint `/auth/login`.

## 🔑 Endpoint AUTENTIKASI

### POST /auth/register
Body:
{
  "name": "Annisa",
  "email": "annisa@test.com",
  "password": "123456"
}

### POST /auth/login
Body:
{
  "email": "annisa@test.com",
  "password": "123456"
}

## 🎞 Endpoint MOVIES (Protected)

### GET /movies
Query:
- q
- genre
- page
- limit

### POST /movies
Body:
{
  "title": "Inception",
  "year": 2010,
  "genre": ["Sci-Fi"],
  "synopsis": "Dream within a dream",
  "rating": 8.8
}

### GET /movies/{id}

### PUT /movies/{id}

### DELETE /movies/{id}

## 🌐 Endpoint TMDb

### GET /movies/tmdb/trending

## 🛠 Cara Menjalankan Project

npm install
node ace serve --watch

Default:
http://localhost:3333

## 🌍 Integrasi TMDb API

Tambahkan `.env`:

TMDB_API_KEY=your_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3

## ⭐ Kesimpulan

Movieku menyediakan:
- Autentikasi aman
- CRUD Movie lengkap
- Integrasi TMDb API
- Dokumentasi Swagger
- Frontend interaktif

