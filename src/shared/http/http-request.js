import axios from 'axios'
import interceptors from './interceptors'

const logging = interceptors.logging;

const authRequestInstance = axios.create({
    baseURL: 'http://localhost:3001/api/auth/',
    timeout: 1000
});

authRequestInstance.interceptors.request.use(logging.request, logging.requestError);

export default {
    authRequest: authRequestInstance
}
