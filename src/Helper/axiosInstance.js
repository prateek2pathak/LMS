import axios from 'axios'

const BASE_URL='http://localhost:5000'
const axios_instance = axios.create();

axios_instance.defaults.baseURL = BASE_URL
axios_instance.defaults.withCredentials= true;
axios_instance.defaults.timeout= 5000;

export default axios_instance;