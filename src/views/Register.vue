<template>
    <div class="register-layout container-fluid">
        <h1>Register</h1>
        <div class="row justify-content-center">
            <div class="register-form col-md-6">
                <div>
                    <div class="form-group">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                               placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp"
                               placeholder="Enter password">
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" id="username" aria-describedby="emailHelp"
                                   placeholder="Enter username">
                        </div>
                        <div class="form-group col-md-6">
                            <input type="tel" class="form-control" id="phone" aria-describedby="emailHelp"
                                   placeholder="Enter phone">
                        </div>
                    </div>

                    <button id="btn-register" class="btn btn-info btn-block">Register</button>

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
    export default {
        name: "Register"
    }
</script>

<style scoped>
    .register-form {
        margin-top: 50px;
    }

    #btn-register, #login-area {
        margin-top: 20px;
    }
</style>
