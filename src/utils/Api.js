import axios from 'axios';

const API_ROOT = 'https://smed-united.glitch.me/api';
const TIMEOUT = 60000;
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

class ApiService {

    constructor( baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS ) {
        const client = axios.create({
            baseURL,
            timeout,
            headers
        });

        client.interceptors.response.use(this.handleSuccess, this.handleError);
        this.client = client;

    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(path) {
        return this.client.get(path).then(response => response.data);
    }

    post(path, payload) {
        return this.client.post(path, payload).then(response => response.data);
    }

    put(path) {
        return this.client.put(path).then(response => response.data);
    }
}

export default ApiService;