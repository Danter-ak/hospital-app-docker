export const environment = {
  production: true,
  // apiUrl sera injecté dynamiquement via env.js
  apiUrl: (window as any).env?.apiUrl || 'http://localhost:8085'
};
