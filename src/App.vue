<template>
    <div id="app">
        <the-sprites></the-sprites>
        <the-sidebar></the-sidebar>

        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import TheSprites from './components/app/TheSprites.vue';
import TheSidebar from './components/app/TheSidebar.vue';

import formatBytes from './utils/formatBytes';
import { mapActions } from 'vuex';

export default {
    name: "App",
    components: { TheSprites, TheSidebar },
    methods: {
        ...mapActions(['loadSettings', 'fetchStorageSize']),
        async onCreate() {
            try {
                this.loadSettings();

                const size = await this.fetchStorageSize();

                console.log('App.vue: fetched size', size);
                console.log('App.vue: fetched size', formatBytes(size));
            } catch(error) {
                throw error;
            }
        }
    },
    created() {
        this.onCreate();        
    }
}
</script>

<style lang="scss">
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;

        font-family: 'Raleway', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.6rem;

        color: #000;
        background: #fff;
    }

    #app {
        height: 100vh;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .main {
        padding-left: 23rem;
    }

    .container {
        max-width: 108rem;
        margin: 0 auto;
        padding: 0 1.5rem
    }
</style>
