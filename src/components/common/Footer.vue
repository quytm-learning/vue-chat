<template>
    <footer id="footer">
        <nav id="footer-body" class="navbar navbar-expand navbar-light bg-light border-top">
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <!--<li class="nav-item">-->
                    <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                    <!--</li>-->
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Policy</a>
                    </li>
                </ul>
                <span class="navbar-text">©2018 by quytm</span>
            </div>
        </nav>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    #footer {
        font-size: .8rem;
    }

    #footer-body {
        width: 90%;
        margin: 0 auto;
    }
</style>