<template>
    <div class="chat-layout">
        <h1>Chatting page</h1>
    </div>
</template>

<script>

    import storage from '../shared/storage'

    export default {
        name: "Chat",
        beforeRouteEnter: function(to, from, next) {
            next(storage.isLoggedIn());
        },
    }
</script>

<style scoped>

</style>
