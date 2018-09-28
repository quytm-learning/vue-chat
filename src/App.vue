<template>
    <div id="app" class="bg-light app-layout">
        <Header/>
        <div class="app-container">
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss">

    @import "../node_modules/bootstrap/scss/bootstrap";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
    }

    .app-layout {
        display: flex;
        flex-direction: column;
    }

    .app-container {
        flex: 1;
    }
</style>
<script>
    import Header from "./components/common/Header";
    import Footer from "./components/common/Footer";

    export default {
        components: {Footer, Header}
    }
</script>