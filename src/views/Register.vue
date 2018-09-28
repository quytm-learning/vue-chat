<template>
    <div class="register-layout container-fluid">
        <h1>Register</h1>
        <div class="row justify-content-center">
            <div class="register-form col-md-3">
                <div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                               placeholder="Enter email"
                               v-model="email"
                               @focus="error.email = ''">
                        <small class="error-message text-danger"
                               v-if="error.email !== ''">
                            *{{error.email}}
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
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="username" aria-describedby="emailHelp"
                                   placeholder="Enter username"
                                   v-model="username"
                                   @focus="error.username = ''">
                            <small class="error-message text-danger"
                                   v-if="error.username !== ''">
                                *{{error.username}}
                            </small>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="tel" class="form-control" id="phone" aria-describedby="emailHelp"
                                   placeholder="Enter phone"
                                   v-model="phone"
                                   @focus="error.phone = ''">
                            <small class="error-message text-danger"
                                   v-if="error.phone !== ''">
                                *{{error.phone}}
                            </small>
                        </div>
                    </div>

                    <button id="btn-register" class="btn btn-info btn-block" @click="onRegister">Register</button>

                    <div id="login-area" class="row justify-content-center">
                        <small>
                            Having account?
                            <router-link to="/login">Login</router-link>
                        </small>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import accountService from '../shared/services/account.service'

    export default {
        name: "Register",
        data: function () {
            return {
                email: '',
                password: '',
                username: '',
                phone: '',
                error: {
                    email: '',
                    password: '',
                    username: '',
                    phone: ''
                }
            }
        },
        methods: {
            onRegister: function () {
                if (this.checkForm()) {
                    const userInfo = {
                        email: this.email,
                        password: this.password,
                        username: this.username,
                        phone: this.phone,
                        name: '',
                        gender: ''
                    };

                    accountService.register(userInfo)
                        .then(data => {
                            this.$router.push({
                                name: 'login',
                                query: {
                                    username: data.username
                                }
                            })
                        })
                        .catch(error => {
                            alert(error)
                        })

                }
            },
            checkForm: function () {
                let isOk = true;

                if (!this.email) {
                    this.error.email = 'Email is required';
                    isOk = false
                } else {
                    // todo: check email pattern?
                }

                if (!this.password) {
                    this.error.password = 'Password is required';
                    isOk = false
                }

                if (!this.username) {
                    this.error.username = 'Username is required';
                    isOk = false
                }

                if (!this.phone) {
                    this.error.phone = 'Username is required';
                    isOk = false
                } else {
                    // todo: check phone is number?
                }

                return isOk;
            }
        }
    }
</script>

<style scoped>
    .register-form {
        margin-top: 50px;
    }

    #btn-register, #login-area {
        margin-top: 20px;
    }

    .error-message {
        display: block;
        width: 100%;
        text-align: left;
        padding-left: .5em;
    }
</style>
