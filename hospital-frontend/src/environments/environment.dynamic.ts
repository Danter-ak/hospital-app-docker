// Ce fichier charge dynamiquement la config d'API depuis env.js
export const environment = {
  production: true,
  get apiUrl() {
    return (window as any).env?.apiUrl || 'http://localhost:8085';
  }
};
