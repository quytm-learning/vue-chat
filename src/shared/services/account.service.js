import httpRequest from '../http/http-request'

const authRequest = httpRequest.authRequest;

export default {
    register: async function (userInfo) {
        const response = await authRequest.post('/users/register', userInfo);

        const data = response.data;

        console.log(data);

        if (data.success) {
            return Promise.resolve(data.data)
        }

        return Promise.reject(data.reason)
    },

    login: async function (userInfo) {
        const response = await authRequest.post('/users/login', userInfo);

        const data = response.data;

        console.log(data);

        if (data.success) {
            return Promise.resolve(data.data)
        }

        return Promise.reject(data.reason)
    }
}
