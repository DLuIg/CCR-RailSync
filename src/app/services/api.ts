// services/api.js (ou services/index.js)
const isBrowser = typeof window !== "undefined";

export const API_BASE = isBrowser
    ? "https://api-java-production-db2b.up.railway.app" // <-- Adicionado HTTPS aqui
    : "http://localhost:8080"; // Mantero localhost para desenvolvimento

// Outras exportações...
export const getHeaders = () => ({
    "Content-Type": "application/json",
    "x-api-key": "1234",
});