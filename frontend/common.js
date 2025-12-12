/**
 * Movieku API Client Utilities
 * @module common
 * @description Utility functions untuk interaksi dengan Movieku API
 */

const API_BASE = (() => {
  const metaBase = document.querySelector('meta[name="movieku-api-base"]')?.content?.trim()
  if (metaBase) return metaBase.replace(/\/$/, '')

  // Ketika file HTML dibuka langsung (origin "null"), fallback ke host default Adonis
  if (window.location.origin === 'null') return 'http://localhost:3333'

  // Default: same origin (kosong berarti relative)
  return ''
})()

function normalizePath(path) {
  if (path.startsWith('http')) return path

  // semua request ke backend diprefiks dengan /api supaya konsisten
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  const prefixed = cleanPath.startsWith('/api') ? cleanPath : `/api${cleanPath}`
  return prefixed
}

function buildUrl(path) {
  const normalizedBase = API_BASE.replace(/\/$/, '')
  const normalizedPath = normalizePath(path)

  if (!normalizedBase) return normalizedPath

  // Hindari duplikasi prefix ketika path sudah memuat base
  if (normalizedPath.startsWith(normalizedBase)) {
    return normalizedPath
  }

  return `${normalizedBase}${normalizedPath}`
}

export function getToken() {
  return localStorage.getItem('movieku_token')
}

export function setToken(token) {
  localStorage.setItem('movieku_token', token)
}

export function clearToken() {
  localStorage.removeItem('movieku_token')
}

export async function fetchJSON(path, options = {}) {
  const url = buildUrl(path)
  let res
  try {
    res = await fetch(url, options)
  } catch (err) {
    throw new Error(
      'Tidak dapat terhubung ke server. Pastikan backend berjalan dan tidak diblokir CORS atau jaringan.'
    )
  }

  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.message || data.error || res.statusText)
  }
  return data
}

export function authHeaders() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export function ensureAuth(statusEl) {
  if (!getToken()) {
    statusEl.innerHTML =
      '<i class="fas fa-lock" aria-hidden="true"></i> Token tidak ditemukan. Silakan login terlebih dahulu.'
    statusEl.className = 'status'
    statusEl.setAttribute('role', 'alert')
    return false
  }
  return true
}

/**
 * Escape HTML special characters untuk mencegah XSS
 * @param {string} str - String yang akan di-escape
 * @returns {string} - String yang sudah di-escape
 */
function escapeHtml(str) {
  if (!str) return ''
  const div = document.createElement('div')
  div.textContent = str
  return div.innerHTML
}

export function renderMovieDetail(container, movie) {
  if (!movie) {
    container.innerHTML =
      '<p class="muted"><i class="fas fa-info-circle" aria-hidden="true"></i> Belum ada data ditampilkan.</p>'
    return
  }

  const genres = (movie.genre || []).filter(Boolean).join(', ')
  const rating = movie.rating ?? '-'
  const year = movie.year || 'Tahun tidak ada'
  const title = escapeHtml(movie.title) || 'Tanpa judul'
  const synopsis = escapeHtml(movie.synopsis) || 'Tidak ada sinopsis'

  container.innerHTML = `
    <article class="detail-panel" role="article" aria-label="Detail film ${title}">
      <div class="movie-header">
        <div>
          <strong style="font-size: 18px;">${title}</strong><br />
          <span class="muted"><i class="fas fa-calendar" aria-hidden="true"></i> <time>${year}</time></span>
        </div>
        <span class="badge" aria-label="Rating: ${rating}"><i class="fas fa-star" aria-hidden="true"></i> ${rating}</span>
      </div>
      <p style="margin: 12px 0;">${synopsis}</p>
      <div class="chips" role="list" aria-label="Genre film">
        ${
          genres
            ? genres
                .split(', ')
                .map(
                  (g) =>
                    `<span class="badge secondary" role="listitem"><i class="fas fa-tag" aria-hidden="true"></i> ${escapeHtml(g)}</span>`
                )
                .join('')
            : '<span class="badge secondary" role="listitem">-</span>'
        }
      </div>
      ${movie._id || movie.id ? `<p class="muted" style="margin-top: 12px; font-size: 12px;"><i class="fas fa-fingerprint" aria-hidden="true"></i> ID: <code>${escapeHtml(movie._id || movie.id)}</code></p>` : ''}
    </article>
  `
}

export function renderMoviesList(container, movies = [], onSelect) {
  if (!movies.length) {
    container.innerHTML =
      '<p class="muted"><i class="fas fa-search" aria-hidden="true"></i> Tidak ada hasil ditemukan.</p>'
    return
  }
  container.innerHTML = movies
    .map((m) => {
      const title = escapeHtml(m.title)
      const synopsis = escapeHtml(m.synopsis) || 'Tidak ada sinopsis'
      const truncatedSynopsis = synopsis.length > 100 ? synopsis.slice(0, 100) + '...' : synopsis
      const genres = (m.genre || []).slice(0, 2).join(', ') || '-'
      const movieId = escapeHtml(m._id || m.id)

      return `
      <article class="movie-card" role="listitem" aria-label="Film: ${title}">
        <div class="movie-header">
          <div>
            <strong>${title}</strong><br />
            <span class="muted"><i class="fas fa-calendar" aria-hidden="true"></i> <time>${m.year || '-'}</time> &bull; <i class="fas fa-star" aria-hidden="true"></i> ${m.rating ?? '-'}</span>
          </div>
          <span class="badge" aria-label="Genre">${escapeHtml(genres)}</span>
        </div>
        <p class="muted" style="font-size: 13px; margin: 8px 0;">${truncatedSynopsis}</p>
        <button class="inline secondary" type="button" data-id="${movieId}" aria-label="Lihat detail film ${title}"><i class="fas fa-eye" aria-hidden="true"></i> Lihat detail</button>
      </article>
    `
    })
    .join('')
  if (onSelect) {
    container.querySelectorAll('button[data-id]').forEach((btn) => {
      btn.addEventListener('click', () => onSelect(btn.dataset.id))
    })
  }
}

export function statusSuccess(el, msg) {
  el.innerHTML = `<i class="fas fa-check-circle" aria-hidden="true"></i> ${msg}`
  el.className = 'alert success'
  el.setAttribute('role', 'status')
}

export function statusError(el, msg) {
  el.innerHTML = `<i class="fas fa-exclamation-circle" aria-hidden="true"></i> ${msg}`
  el.className = 'alert error'
  el.setAttribute('role', 'alert')
}

export function statusInfo(el, msg) {
  el.innerHTML = msg
  el.className = 'status'
  el.setAttribute('role', 'status')
}

export { API_BASE }
