<template>
  <div id="app"

    @drop.prevent="drop" 
    @dragstart.prevent
    @dragenter.prevent="dragEnter"
    @dragover.prevent
    @dragleave.prevent.self="dragLeave"
    @dragend.prevent
  >
    <header class="header">
      <div class="header__logo">Files</div>
      <div class="header__nav">
        <router-link to="/upload">Upload</router-link>
        <router-link to="/">Download</router-link>
      </div>
    </header>

    <main class="main">
      <router-view :isDragActive="isDragActive" @openReader="openReader"/>
    </main>


    <v-file-reader ref="input" @emitFiles="setFiles" :filesArray="files"></v-file-reader>
  </div>
</template>

<script>
  import vFileReader from './components/vFileReader.vue';

  import { mapActions } from 'vuex';

  export default {
    name: "App",
    components: { vFileReader },
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

 body {
  margin: 0;
  padding: 0;
 }

 *,*::before,*::after {
  box-sizing: border-box;
 }

.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 60px;

  background: #000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;

  &__logo {
    font-size: 25px;
    color: #fff;
    font-weight: 700;
    margin-left: 25px;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 25px;

    a {

      pointer-events: all;
      color: #fff;
      font-size: 20px;
      text-decoration: none;
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.main {
  padding-top: 95px;
}
</style>
