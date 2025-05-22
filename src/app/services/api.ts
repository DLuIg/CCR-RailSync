const isBrowser = typeof window !== "undefined";

export const API_BASE = isBrowser
    ? "api-java-production-db2b.up.railway.app"
    : "http://localhost:8080/";

;
export const getHeaders = () => ({
    "Content-Type": "application/json",
    "x-api-key": "1234",
});