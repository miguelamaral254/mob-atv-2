import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aps-atv2-production.up.railway.app/', 
});

export default api;
