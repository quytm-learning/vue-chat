import httpRequest from '../http/http-request'

const authRequest = httpRequest.authRequest;

export default {
    register: async function (userInfo) {
        const response = await authRequest.post('/users/register', userInfo);

        console.log(response.data);

        const data = response.data;

        if (data.success) {
            return Promise.resolve(data.data)
        }

        return Promise.reject(data.reason)
    }
}
