<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
 -->  

  <div class="file">
    <div class="file__image">
      <img :src="require('@/assets/folder.webp')" alt="">
    </div>
    <div class="file__name">
      Documents

      <ul>
        <li v-for="file in files">
          {{ file.name }}
          <a 
            :href="file.url" 
            :download="file.name" 
          ><button class="file__button">Download</button>
        </a>
        </li>
      </ul>
    </div>
  
  <span v-if="files.length == 0 && isLoaded">Reload the page if you don't see files</span>
  

  </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      files: [],
      isLoaded: false
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions(['fetchFiles'])
  },
  async created() {
    try {
      this.isLoaded = false;
      const files = await this.fetchFiles();

      this.files = files;

      this.isLoaded = true;
    } catch(error) {
      throw error;
    }
  }
}
</script>

<style lang="scss">
  .file__name {
    font-weight: 700;
    font-size: 45px;
    margin-bottom: 25px;
  }

  .file__button {
    padding: 15px 25px;

    font-family: inherit;

    border: none;

    background: black;
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
      background: #1f1f1f;
    }
  }


span {
  font-size: 25px;
  opacity: .6;
  font-weight: 700;
}

ul li {
  margin-bottom: 15px;
}
</style>
