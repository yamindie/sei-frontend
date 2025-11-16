// ================================
// API Client for SEI Application
// React + Laravel 10 + Sanctum
// ================================

const BASE_URL = "http://127.0.0.1:8000";
const API_URL = `${BASE_URL}/api`;

// ================================
// Helper: standard API request with fetch + Sanctum
// ================================
async function request(endpoint, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔥 Obligatoire pour Sanctum
  };

  if (data) options.body = JSON.stringify(data);

  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw error;
  }

  return await response.json();
}

// ================================
// Helper : Get CSRF cookie for Sanctum
// ================================
export async function csrf() {
  await fetch(`${BASE_URL}/sanctum/csrf-cookie`, {
    method: "GET",
    credentials: "include", // 🔥 Obligatoire
  });
}

// ================================
// AUTHENTIFICATION (Sanctum)
// ================================
export async function registerUser(formData) {
  await csrf();
  return request("/register", "POST", formData);
}

export async function loginUser(credentials) {
  await csrf();

  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": getCsrfToken(),
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw await response.json();
  return await response.json();
}

export async function logoutUser() {
  await csrf();
  return fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "X-XSRF-TOKEN": getCsrfToken(),
    },
  });
}

export async function getProfile() {
  return request("/user");
}

// ================================
// Utility : read XSRF-TOKEN cookie
// ================================
function getCsrfToken() {
  const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

// ================================
// FORMATIONS
// ================================
export async function getFormations() {
  return request("/formations");
}

export async function getFormation(id) {
  return request(`/formations/${id}`);
}

// ================================
// COACHING
// ================================
export async function getCoachings() {
  return request("/coaching");
}

export async function getCoaching(id) {
  return request(`/coaching/${id}`);
}

export async function bookCoaching(coachId, datetime) {
  return request("/coaching", "POST", { coach_id: coachId, session_date: datetime });
}

// ================================
// ARTICLES
// ================================
export async function getArticles() {
  return request("/articles");
}

export async function getArticle(id) {
  return request(`/articles/${id}`);
}

// ================================
// COMMANDES
// ================================
export async function createOrder(formationId) {
  return request("/orders", "POST", { formation_id: formationId });
}

export async function getMyOrders() {
  return request("/orders");
}

// ================================
// EXPORT GLOBAL
// ================================
export default {
  loginUser,
  registerUser,
  logoutUser,
  getProfile,

  getFormations,
  getFormation,

  getCoachings,
  getCoaching,
  bookCoaching,

  getArticles,
  getArticle,

  createOrder,
  getMyOrders,
};
