const ACCESS_TOKEN = 'access_token';
const USER = 'user';

export default {

    setAccessToken(token) {
        localStorage.setItem(ACCESS_TOKEN, token)
    },
    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN) || ''
    },


    setUserInfo(user) {
        localStorage.setItem(USER, user)
    },
    getUserInfo() {
        return localStorage.getItem(USER)
    },


    isLoggedIn() {
        return this.getAccessToken() !== ''
    },
    clearLoginInfo() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(USER);
    }
}
