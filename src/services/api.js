import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://aps-atv2-production.up.railway.app',
});

export default api;
