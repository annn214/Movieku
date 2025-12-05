<div align="center">

# 🌸✨ MOVIEKU ✨🌸

<img src="https://img.shields.io/badge/AdonisJS-6.0-FF69B4?style=for-the-badge&logo=adonisjs&logoColor=white" alt="AdonisJS"/>
<img src="https://img.shields.io/badge/MongoDB-Database-FF69B4?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
<img src="https://img.shields.io/badge/TMDb-API-FF1493?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDb"/>
<img src="https://img.shields.io/badge/Google-OAuth-FF69B4?style=for-the-badge&logo=google&logoColor=white" alt="Google OAuth"/>

### 💖 **Tugas Project Based 2 API Kelompok 2** 💖

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=FF69B4&center=true&vCenter=true&width=435&lines=Movie+Management+System;CRUD+%2B+TMDb+Integration;Google+OAuth+Authentication" alt="Typing SVG" />

---

```
🎀 ═══════════════════════════════════════════════════════ 🎀
     ★彡 Welcome to Movieku - Your Movie Paradise 彡★
🎀 ═══════════════════════════════════════════════════════ 🎀
```

</div>

---

## 🌷 Tentang Movieku

> _"Film adalah jendela untuk melihat dunia dari berbagai perspektif"_ 🎬💕

**Movieku** adalah aplikasi **pengelolaan data film** yang menyediakan fitur CRUD, pencarian film, autentikasi berbasis token, serta integrasi dengan **2 API Publik Eksternal**:

- 🎬 **TMDb API** - Untuk rekomendasi dan data film
- 🔐 **Google OAuth API** - Untuk autentikasi sosial

Project ini dibangun menggunakan **AdonisJS 6**, **MongoDB**, dan **Frontend HTML + JS**.

---

<div align="center">

## 🌸 ═══════════ ⭐ Fitur Utama ⭐ ═══════════ 🌸

</div>

### 💗 Authentication & Security

| Fitur | Deskripsi                                              |
| :---: | :----------------------------------------------------- |
|  🔐   | **JWT Authentication** - Login & register dengan token |
|  🔑   | Token disimpan di localStorage                         |
|  🛡️   | Endpoint CRUD dilindungi autentikasi                   |
|  🌐   | **Google OAuth Login** - Login dengan akun Google      |

### 💝 Movie Management

| Fitur | Deskripsi                                     |
| :---: | :-------------------------------------------- |
|  ➕   | **Tambah Film** - Create movie baru           |
|  ✏️   | **Edit Film** - Update data film              |
|  🗑️   | **Hapus Film** - Delete film milik user       |
|  👁️   | **Lihat Detail** - Tampilkan info lengkap     |
|  👤   | **Ownership** - Film terkait kepemilikan user |

### 💖 Search & Discovery

| Fitur | Deskripsi                                     |
| :---: | :-------------------------------------------- |
|  🔍   | **Search** - Cari film di database lokal      |
|  🏷️   | **Filter Genre** - Filter berdasarkan genre   |
|  📄   | **Pagination** - Navigasi dengan page & limit |

### 🎀 External API Integration

| Fitur | Deskripsi                                                |
| :---: | :------------------------------------------------------- |
|  🎬   | **TMDb Recommendations** - Saran film berdasar pencarian |
|  ⭐   | **TMDb Details** - Detail lengkap dari TMDb              |
|  🔥   | **Trending Movies** - Film trending mingguan             |
|  📖   | **Swagger Docs** - Dokumentasi API otomatis              |

---

<div align="center">

## 🌷 ═══════════ 🔗 Integrasi 2 API Publik 🔗 ═══════════ 🌷

</div>

### 🎬 API Publik #1: TMDb (The Movie Database)

```
╭──────────────────────────────────────────────────────────────╮
│  🌸 TMDb API Integration                                     │
│  ────────────────────────────────────────────────────────── │
│  📍 Base URL: https://api.themoviedb.org/3                   │
│  🔑 Auth: API Key                                            │
╰──────────────────────────────────────────────────────────────╯
```

| Fungsi | Endpoint TMDb          | Kegunaan di Movieku                                 |
| :----: | :--------------------- | :-------------------------------------------------- |
|   🔍   | `/search/movie`        | Mencari film & memberikan rekomendasi               |
|   📖   | `/movie/{id}`          | Mengambil detail lengkap (poster, rating, overview) |
|   🔥   | `/trending/movie/week` | Menampilkan 10 film trending mingguan               |

**✨ Cara Kerja Integrasi TMDb:**

```javascript
// 💕 Fungsi 1: Fetch Detail Film dari TMDb
async function fetchTmdbDetails(tmdbId) {
  const url = `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}`
  // Returns: poster, tagline, overview, rating, release date
}

// 💕 Fungsi 2: Search Film di TMDb
async function searchTmdbMovies(query) {
  const url = `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
  // Returns: top 5 matching movies dengan poster & info dasar
}
```

---

### 🔐 API Publik #2: Google OAuth 2.0

```
╭──────────────────────────────────────────────────────────────╮
│  🌸 Google OAuth API Integration                             │
│  ────────────────────────────────────────────────────────── │
│  📍 Token Verify: https://oauth2.googleapis.com/tokeninfo    │
│  🔑 Auth: Client ID + ID Token                               │
╰──────────────────────────────────────────────────────────────╯
```

| Fungsi | Endpoint Google | Kegunaan di Movieku                     |
| :----: | :-------------- | :-------------------------------------- |
|   ✅   | `/tokeninfo`    | Verifikasi ID Token dari Google Sign-In |
|   👤   | Token Payload   | Mendapatkan email & nama user           |

**✨ Cara Kerja Integrasi Google OAuth:**

```javascript
// 💕 Verifikasi Token Google
async googleLogin({ request, response }) {
  const { idToken } = request.only(['idToken'])

  // Verifikasi token ke Google API
  const verifyRes = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`
  )

  // Ambil payload (email, name) dari response
  const payload = await verifyRes.json()

  // Auto-create user jika belum ada, lalu generate JWT
}
```

---

<div align="center">

## 🌸 ═══════════ 📚 Dokumentasi API ═══════════ 🌸

### 💖 Swagger UI

### 👉 [https://annn214.github.io/Movieku/swagger.html](https://annn214.github.io/Movieku/swagger.html) 👈

</div>

---

<div align="center">

## 🌷 ═══════════ 🏗️ Tech Stack ═══════════ 🌷

</div>

```
      🎀 ════════════════════════════════════════ 🎀

           ╭─────────────────────────────────╮
           │     💖 BACKEND FRAMEWORK 💖     │
           │         AdonisJS 6             │
           ╰─────────────────────────────────╯
                         │
           ╭─────────────┴─────────────╮
           │                           │
    ╭──────▼──────╮           ╭────────▼────────╮
    │ 💾 DATABASE │           │ 🔗 EXTERNAL API │
    │   MongoDB   │           │  TMDb + Google  │
    │  + Mongoose │           │     OAuth       │
    ╰─────────────╯           ╰─────────────────╯
           │                           │
           ╰───────────┬───────────────╯
                       │
           ╭───────────▼───────────╮
           │    💻 FRONTEND 💻     │
           │  HTML + CSS + JS     │
           ╰──────────────────────╯

      🎀 ════════════════════════════════════════ 🎀
```

|      Layer      | Teknologi             | Versi  |
| :-------------: | :-------------------- | :----: |
|   🖥️ Backend    | AdonisJS              |  6.x   |
|   💾 Database   | MongoDB + Mongoose    | Latest |
|   🎨 Frontend   | HTML, CSS, JavaScript |   -    |
| 🎬 External API | TMDb API              |   v3   |
|   🔐 Auth API   | Google OAuth 2.0      |   v2   |
| 🔑 Auth Method  | JWT (Bearer Token)    |   -    |

---

<div align="center">

## 🌸 ═══════════ 📌 Endpoint API ═══════════ 🌸

</div>

> Semua endpoint menggunakan prefix: `/api`

### 🔑 Authentication Endpoints

| Method  | Endpoint         | Deskripsi              | Auth |
| :-----: | :--------------- | :--------------------- | :--: |
| 🟢 POST | `/auth/register` | Registrasi user baru   |  ❌  |
| 🟢 POST | `/auth/login`    | Login & dapatkan token |  ❌  |
| 🟢 POST | `/auth/google`   | Login via Google OAuth |  ❌  |
| 🔵 GET  | `/auth/me`       | Get profil user        |  ✅  |

---

### 🎞️ Movies Endpoints

|  Method   | Endpoint      | Deskripsi                 | Auth |
| :-------: | :------------ | :------------------------ | :--: |
|  🔵 GET   | `/movies`     | List film + saran TMDb    |  ❌  |
|  🔵 GET   | `/movies/:id` | Detail film + TMDb detail |  ❌  |
|  🟢 POST  | `/movies`     | Tambah film baru          |  ✅  |
|  🟡 PUT   | `/movies/:id` | Update film (milik user)  |  ✅  |
| 🔴 DELETE | `/movies/:id` | Hapus film (milik user)   |  ✅  |

---

### 🌐 TMDb Integration Endpoints

| Method | Endpoint                | Deskripsi              | Auth |
| :----: | :---------------------- | :--------------------- | :--: |
| 🔵 GET | `/movies/tmdb/trending` | Ambil 10 film trending |  ✅  |

---

<div align="center">

## 🌷 ═══════════ 📥 Contoh Request ═══════════ 🌷

</div>

### 💕 Register User Baru

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "Sakura Chan",
  "email": "sakura@example.com",
  "password": "password123"
}
```

### 💕 Login User

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "sakura@example.com",
  "password": "password123"
}
```

### 💕 Login dengan Google OAuth

```bash
POST /api/auth/google
Content-Type: application/json

{
  "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 💕 Tambah Film Baru

```bash
POST /api/movies
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "title": "Your Name",
  "year": 2016,
  "genre": ["Animation", "Romance", "Drama"],
  "synopsis": "Two teenagers share a profound, magical connection",
  "rating": 8.4
}
```

### 💕 Search Film dengan TMDb Suggestions

```bash
GET /api/movies?q=inception&genre=Sci-Fi&page=1&limit=10
```

**Response:**

```json
{
  "data": [...],
  "meta": { "total": 5, "perPage": 10, "currentPage": 1 },
  "tmdb_suggestions": [
    {
      "tmdbId": 27205,
      "title": "Inception",
      "releaseDate": "2010-07-16",
      "tmdbPoster": "https://image.tmdb.org/t/p/w200/..."
    }
  ]
}
```

---

<div align="center">

## 🌸 ═══════════ 🛠️ Instalasi & Setup ═══════════ 🌸

</div>

### 💖 Step 1: Clone Repository

```bash
git clone https://github.com/annn214/Movieku.git
cd Movieku
```

### 💖 Step 2: Install Dependencies

```bash
# Install semua dependencies
npm install

# Install packages tambahan
npm install mongoose jsonwebtoken bcryptjs axios
```

### 💖 Step 3: Konfigurasi Environment

Buat file `.env` di root folder:

```env
# 🌸 ═══════════════════════════════════════ 🌸
#          💖 MOVIEKU CONFIGURATION 💖
# 🌸 ═══════════════════════════════════════ 🌸

# ─── Server Config ───
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
NODE_ENV=development

# ─── Security ───
APP_KEY=your-app-key-here
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRES=1d

# ─── MongoDB ───
MONGO_URI=mongodb://localhost:27017/movieku
MONGO_DB_NAME=movieku

# ─── CORS ───
CORS_ORIGIN=*

# ─── 🎬 TMDb API (API Publik #1) ───
TMDB_API_KEY=your-tmdb-api-key
TMDB_BASE_URL=https://api.themoviedb.org/3

# ─── 🔐 Google OAuth (API Publik #2) ───
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

### 💖 Step 4: Jalankan Server

```bash
# Development mode dengan hot reload
npm run dev

# Atau menggunakan ace command
node ace serve --watch
```

### 💖 Step 5: Akses Aplikasi

|     Service     | URL                                            |
| :-------------: | :--------------------------------------------- |
|   🌐 Frontend   | http://localhost:3333                          |
|     📡 API      | http://localhost:3333/api                      |
| 📚 Swagger Docs | https://annn214.github.io/Movieku/swagger.html |

---

<div align="center">

## 🌷 ═══════════ 📁 Struktur Project ═══════════ 🌷

</div>

```
🎀 Movieku/
├── 📂 app/
│   ├── 📂 controllers/
│   │   ├── 💖 AuthControllers.ts    # Auth + Google OAuth
│   │   └── 💖 MovieControllers.ts   # CRUD + TMDb Integration
│   ├── 📂 middleware/
│   │   └── 🔐 auth.ts               # JWT Middleware
│   └── 📂 models/
│       ├── 🎬 Movie.ts              # Movie Schema
│       └── 👤 Users.ts              # User Schema
├── 📂 frontend/
│   ├── 🌐 index.html                # Homepage
│   ├── 🔑 login.html                # Login Page
│   ├── 📝 register.html             # Register Page
│   ├── 🔍 search.html               # Search Page
│   ├── ➕ create.html               # Create Movie
│   ├── ✏️ edit.html                 # Edit Movie
│   └── 🗑️ delete.html               # Delete Movie
├── 📂 docs/
│   ├── 📖 openapi.yaml              # API Specification
│   └── 🎨 swagger.html              # Swagger UI
├── 📂 start/
│   ├── 🛣️ routes.ts                 # Route Definitions
│   └── 💾 mongo.ts                  # MongoDB Connection
├── 📄 .env                          # Environment Variables
└── 📦 package.json                  # Dependencies
```

---

<div align="center">

## 🌸 ═══════════ 🔗 API Publik yang Digunakan ═══════════ 🌸

</div>

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🎬 API PUBLIK #1: TMDb (The Movie Database)                   │
│   ═══════════════════════════════════════════                   │
│                                                                 │
│   📍 Website    : https://www.themoviedb.org                    │
│   📖 API Docs   : https://developer.themoviedb.org/docs         │
│   🔑 Get API Key: https://www.themoviedb.org/settings/api       │
│                                                                 │
│   ✨ Endpoint yang digunakan:                                   │
│      • GET /search/movie - Pencarian film                       │
│      • GET /movie/{id} - Detail film                            │
│      • GET /trending/movie/week - Film trending                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🔐 API PUBLIK #2: Google OAuth 2.0                            │
│   ══════════════════════════════════                            │
│                                                                 │
│   📍 Console    : https://console.cloud.google.com              │
│   📖 API Docs   : https://developers.google.com/identity        │
│   🔑 Setup      : Google Cloud Console > APIs & Services        │
│                                                                 │
│   ✨ Endpoint yang digunakan:                                   │
│      • POST /tokeninfo - Verifikasi ID Token                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

## 🌷 ═══════════ 👥 Tim Pengembang ═══════════ 🌷

### 💖 Kelompok 2 - Project Based 2 API 💖

```
   🌸 ═══════════════════════════════════════════════ 🌸

        ╭─────────────────────────────────────╮
        │                                     │
        │   ✨ Made with 💖 by Kelompok 2 ✨  │
        │                                     │
        ╰─────────────────────────────────────╯

   🌸 ═══════════════════════════════════════════════ 🌸
```

</div>

---

<div align="center">

## 🌸 ═══════════ 📝 Kesimpulan ═══════════ 🌸

</div>

> 💖 **Movieku** adalah aplikasi Movie Management System yang mengintegrasikan **2 API Publik**:
>
> 1. 🎬 **TMDb API** - Untuk rekomendasi film, detail film, dan trending movies
> 2. 🔐 **Google OAuth API** - Untuk autentikasi sosial dengan akun Google
>
> Dilengkapi dengan fitur CRUD lengkap, JWT authentication, dan dokumentasi Swagger yang komprehensif.

---

<div align="center">

```
🎀 ════════════════════════════════════════════════════════════════ 🎀
│                                                                    │
│     🌸 Thank you for using Movieku! 🌸                             │
│                                                                    │
│     ⭐ Star this repo if you find it helpful! ⭐                   │
│                                                                    │
│     📧 Issues & Contributions are welcome!                         │
│                                                                    │
🎀 ════════════════════════════════════════════════════════════════ 🎀
```

<img src="https://img.shields.io/badge/Made%20with-💖-FF69B4?style=for-the-badge" alt="Made with Love"/>
<img src="https://img.shields.io/badge/Status-Active-FF1493?style=for-the-badge" alt="Status"/>
<img src="https://img.shields.io/github/stars/annn214/Movieku?style=for-the-badge&color=FF69B4" alt="Stars"/>

### 🌷 Happy Coding! 🌷

</div>
