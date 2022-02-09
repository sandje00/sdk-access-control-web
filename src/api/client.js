import axios from 'axios';

const baseURL = `${process.env.VUE_APP_API_HOST}`;
const config = { baseURL };
const client = axios.create(config);

export default client;
