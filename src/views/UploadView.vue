<template>
  <div class="about">
    <h1>DROP FILES HERE </h1>

    <button class="file__button" @click="$emit('openReader')">Or select them</button>

    <div v-if="getFiles.length" class="fileslist">
      <h2>FILES TO UPLOAD:</h2>
      <div v-for="(file, index) in getFiles" :key="index">
        {{ file.name }}
      </div>
    </div>

    <button class="file__button" v-if="getFiles.length" @click="send">UPLOAD (CURRENT UPLOADS WILL BE DELETED)</button>

    <div class="loading-overlay" v-if="isRequestActive">SENDING...</div>

    <v-drop-overlay :isDragActive="isDragActive" v-if="isDragActive"></v-drop-overlay>
  </div>
</template>

<script>
  import vDropOverlay from '../components/vDropOverlay.vue';

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "AboutView",
    components: { vDropOverlay },
    props: {
      isDragActive: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isRequestActive: false,
      }
    },
    computed: {
      ...mapGetters(['getFiles'])
    },
    methods: {
      ...mapActions(['sendFiles']),
      async send() {
        try {
          this.isRequestActive = true;
          await this.sendFiles(this.getFiles);
          this.isRequestActive = false;
        } catch(error) {
          throw error;
        }
      }
    }
  }
</script>

<style lang="scss">
  .fileslist {
    margin-bottom: 35px;
  }

  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, .5);

    color: #fff;

    font-size: 45px;
    font-weight: 700;
  }
</style>