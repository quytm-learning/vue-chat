<template>
    <div class="login-layout container-fluid">
        <h1>Login</h1>
        <div class="row justify-content-center">
            <div class="login-form col-md-3">
                <div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp"
                               placeholder="Enter username"
                               v-model="username"
                               @focus="error.username = ''">
                        <small class="error-message text-danger"
                               v-if="error.username !== ''">
                            *{{error.username}}
                        </small>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp"
                               placeholder="Enter password"
                               v-model="password"
                               @focus="error.password = ''">
                        <small class="error-message text-danger"
                               v-if="error.password !== ''">
                            *{{error.password}}
                        </small>
                    </div>

                    <button id="btn-login" class="btn btn-info btn-block" @click="onLogin">Login</button>

                    <div id="register-area" class="row justify-content-center">
                        <small>
                            Not have account?
                            <router-link to="/register">Register</router-link>
                        </small>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import accountService from '../shared/services/auth.service'
    import storage from '../shared/storage'

    export default {
        name: "Login",
        data: function () {
            return {
                username: '',
                password: '',
                error: {
                    username: '',
                    password: ''
                }
            }
        },
        mounted: function () {
            this.username = this.$route.query.username || '';
        },
        methods: {
            onLogin: function () {
                if (this.checkForm()) {
                    const userInfo = {
                        username: this.username,
                        password: this.password,
                    };

                    accountService.login(userInfo)
                        .then(data => {
                            const {access_token, user} = data;

                            storage.setAccessToken(access_token);
                            storage.setUserInfo(JSON.stringify(user));

                            this.$router.push('/chat');
                        })
                        .catch(error => {
                            alert(error)
                        })

                }
            },
            checkForm: function () {
                let isOk = true;

                if (!this.username) {

                    this.error.username = 'Username is required';
                    isOk = false
                }

                if (!this.password) {
                    this.error.password = 'Password is required';
                    isOk = false
                }

                return isOk;
            }
        }
    }
</script>

<style scoped>
    .login-form {
        margin-top: 50px;
    }

    #btn-login, #register-area {
        margin-top: 20px;
    }

    .error-message {
        display: block;
        width: 100%;
        text-align: left;
        padding-left: .5em;
    }

</style>
