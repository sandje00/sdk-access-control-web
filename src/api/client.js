import axios from 'axios';

const baseURL = `${process.env.VUE_APP_API_HOST}`;
const config = { baseURL };
const client = axios.create(config);
client.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers = { 'X-Auth-Token': token };
  return config;
});

export default client;
