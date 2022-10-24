import axios from 'axios';

const privateKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const config = `?api_key=${privateKey}&language=pt-BR`;
