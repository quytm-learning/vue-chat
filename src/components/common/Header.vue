<template>
    <div id="header">
        <nav id="nav" class="navbar">
            <a class="navbar-brand" href="#">
                <img id="brand-logo" src="../../assets/chatty.png" class="d-inline-block align-self-center" alt="">
                Chatty
            </a>

            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/chat">Chat</router-link>
            |
            <router-link to="/register">Register</router-link>
            |
            <router-link to="/login">Login</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #header {
        box-shadow: 0 0 4px rgba(0, 0, 0, .5);
    }

    #brand-logo {
        width: 40px;
        height: 40px
    }

    #nav > a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav > .router-link-exact-active {
        color: #42b983;
    }

</style>