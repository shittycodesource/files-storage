<template>
    <div id="app" 
        @drop.prevent="drop" 
        @dragstart.prevent 
        @dragenter.prevent="dragEnter" 
        @dragover.prevent
        @dragleave.prevent.self="dragLeave" 
        @dragend.prevent
        
    >
        <the-sprites></the-sprites>
        <the-sidebar></the-sidebar>

        <main class="main">
            <router-view :isDragActive="isDragActive" @openReader="openReader" />
        </main>


        <v-file-reader ref="input" @emitFiles="setFiles" :filesArray="files"></v-file-reader>
    </div>
</template>

<script>
import TheSprites from './components/TheSprites.vue';
import TheSidebar from './components/TheSidebar.vue';
import vFileReader from './components/vFileReader.vue';

import { mapActions } from 'vuex';

export default {
    name: "App",
    components: { TheSprites, vFileReader, TheSidebar },
    data() {
        return {
            isDragActive: false,
            files: [],
        }
    },
    methods: {
        ...mapActions(['setFilesToStore']),
        dragEnter(event) {
            console.log('drag enter')
            if (this.$route.name == 'upload') {
                this.isDragActive = true;
            }
        },
        dragLeave(event) {
            if (this.$route.name == 'upload') {
                this.isDragActive = false;
            }
        },
        drop(event) {
            if (this.$route.name == 'upload') {
                this.$refs.input.onChange(event);
                this.isDragActive = false;
            }
        },
        openReader() {
            console.log(this.$refs.input)
            console.log(this.$refs.input.$el)
            this.$refs.input.$el.click();
        },

        setFiles(value) {
            if (this.$route.name == 'upload') {
                this.files = value;
                this.setFilesToStore(value);
            }
        },

        removeFile(file) {
            this.files.splice(this.files.indexOf(file), 1);
            this.setFilesToStore(this.files);
        }
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
</style>
