# MOVIEKU
## **Tugas Project Based 2 API Kelompok 2**


# 🎬 Movieku – Movie Management System

Movieku adalah aplikasi **pengelolaan data film** yang menyediakan fitur CRUD, pencarian film, autentikasi berbasis token, serta integrasi dengan API eksternal TMDb untuk menampilkan rekomendasi dan film trending. Project ini dibangun menggunakan **AdonisJS 6**, **MongoDB**, dan **Frontend HTML + JS**.

---

## ⭐ Fitur Utama

- 🔐 **JWT Authentication**
  - Login & register user
  - Token disimpan di localStorage
  - Akses endpoint CRUD membutuhkan token

- 🎞 **CRUD Film Lengkap**
  - Tambah film  
  - Edit film  
  - Hapus film  
  - Lihat detail film  
  - Semua terkait kepemilikan user

- 🔍 **Pencarian Film**
  - Search film di database lokal
  - Filter berdasarkan genre
  - Pagination (page & limit)

- 🌐 **Integrasi API Eksternal (TMDb)**
  - TMDb : Rekomendasi film berdasar pencarian, Detail film TMDb, Film trending mingguan
  - Google Auth API

- 🧭 **Swagger API Documentation**
  - Dokumentasi API otomatis  

---

## 🌍 Dokumentasi API (Swagger)
### Swagger UI:  
### 👉 https://annn214.github.io/Movieku/swagger.html  
---

## 🏗 Teknologi yang Digunakan

- **Backend:** AdonisJS 6  
- **Database:** MongoDB + Mongoose  
- **Frontend:** HTML, CSS, JavaScript  
- **External API:** TMDb API  
- **Auth:** JWT (Bearer Token)

---

## 📌 Endpoint API (Singkat & Jelas)

Semua endpoint menggunakan prefix:
/api

### 🔑 Authentication
| Method | Endpoint             | Deskripsi              |
|--------|----------------------|------------------------|
| POST   | `/auth/register`     | Registrasi user baru   |
| POST   | `/auth/login`        | Login & dapatkan token |

Header wajib (untuk endpoint protected)  

---

### 🎞 Movies (Protected)

| Method | Endpoint                 | Deskripsi                    |
|--------|---------------------------|------------------------------|
| GET    | `/movies`                 | List film + saran TMDb       |
| GET    | `/movies/:id`             | Detail film + TMDb detail    |
| POST   | `/movies`                 | Tambah film                  |
| PUT    | `/movies/:id`             | Update film (milik user)     |
| DELETE | `/movies/:id`             | Hapus film (milik user)      |

---

### 🌐 TMDb Integration
| Method | Endpoint                     | Deskripsi                  |
|--------|-------------------------------|----------------------------|
| GET    | `/movies/tmdb/trending`       | Ambil 10 film trending     |

---

## 📥 Contoh Body Request

### Tambah Film
```json
{
  "title": "Inception",
  "year": 2010,
  "genre": ["Sci-Fi", "Thriller"],
  "synopsis": "Dream within a dream",
  "rating": 8.8
}
```

## 🛠 Cara Menjalankan Project

### - Clone Repository

```bash
git clone https://github.com/annn214/Movieku.git
```

### - Update the `.env` file with your configuration:

   ```env
   # contoh .env
   TZ=UTC
   PORT=3333
   HOST=localhost
   LOG_LEVEL=info
   APP_KEY=BFDBid_uDS9Lvi-wZm4MdPa0khSzBI-f
   NODE_ENV=development
    
   MONGO_URI=mongodb://localhost:3333/movieku
   MONGO_DB_NAME=(random)
   JWT_SECRET=your-super-secret-jwt-key-change-this
   JWT_EXPIRES=1d
   CORS_ORIGIN=*
   TMDB_API_KEY=f8079effc3a7dc8a79584916f9350222
   GOOGLE_CLIENT_ID=72583960710-oo4dmi2263qf0nmqo6ga21h5ec5qe4j3.apps.googleusercontent.com
   ```
### - Install Dependencies

```bash
npm install
```

### - Jalankan Server

```bash
node ace serve --watch
```
---

## 📝 Kesimpulan
Movieku adalah aplikasi CRUD film dengan integrasi API TMDb, autentikasi JWT, dan dokumentasi Swagger yang mudah dipahami.
