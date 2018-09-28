<template>
    <div class="login-layout container-fluid">
        <h1>Login</h1>
        <div class="row justify-content-center">
            <div class="login-form col-md-3">
                <div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp"
                               placeholder="Enter username"
                               v-model="username">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp"
                               placeholder="Enter password">
                    </div>

                    <button id="btn-login" class="btn btn-info btn-block">Login</button>

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
    export default {
        name: "Login",
        data: function () {
            return {
                username: '',
                password: ''
            }
        },
        mounted: function () {
            this.username = this.$route.query.username;
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
</style>
