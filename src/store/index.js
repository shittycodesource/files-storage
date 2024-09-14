import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { db, storage } from '../firebase/index.js';
import { getDownloadURL, uploadBytes, ref as imageRef } from 'firebase/storage';
import { setDoc, updateDoc, doc as documentRef, getDoc, getDocs, collection, Timestamp, limitToLast, deleteDoc, arrayUnion, increment, where, arrayRemove, query, orderBy, startAfter, limit, getCountFromServer, serverTimestamp } from 'firebase/firestore';


export default new Vuex.Store({
  state: {
    files: [],
    openedFile: false,
  },
  getters: {
    getFiles: (state) => state.files,

    openedFile: (state) => state.openedFile,
  },
  mutations: {
    SET_FILES_TO_STORE(state, data) {
      state.files = data;
    },

    OPEN_FILE(state, file) {
      state.openedFile = file;
    },

    CLOSE_FILE(state) {
      state.openedFile = false;
    }


  },
  actions: {
    setFilesToStore({commit}, data) {
      commit('SET_FILES_TO_STORE', data);
    },

    clearStoreFiles({commit}) {
      commit('SET_FILES_TO_STORE', []);
    },

    openFile({commit}, file) {
      commit('OPEN_FILE', file)
    },

    closeFile({commit}) {
      commit('CLOSE_FILE');
    },

    async fetchFiles() {
      try {

          const obj = await getDoc(documentRef(db, 'docs', 'list'));

          if (obj.exists()) {
            return (obj.data()).files;
          } else {
            return [];
          }

      } catch(error) {
        throw error;
      }
    },

    async sendFiles({commit}, files) {
      try {
        commit('SET_FILES_TO_STORE', []);

            let downloadUrls = [];
            let uploadPromises = [];
            const refs = [];
            if (files.length) {
                for (let i = 0; i <= files.length - 1; i++) {
                    const pathToImage = `${files[i].name}`
                    refs.push(pathToImage);

                    uploadPromises.push(uploadBytes(imageRef(storage, pathToImage), files[i]));
                }

                const uploads = await Promise.all(uploadPromises);
                const downloadUrlsPromises = [];

                for (let i = 0; i <= uploads.length - 1; i++) { downloadUrlsPromises.push(getDownloadURL(imageRef(storage, refs[i]))); };

                downloadUrls = await Promise.all(downloadUrlsPromises);
            }

            const result = [];

            for (let i = 0; i <= files.length - 1; i++) {
              result.push({ name: files[i].name, url: downloadUrls[i] });
            }

            await setDoc(documentRef(db, 'docs', 'list'), { files: result });
      } catch(error) {
        throw error;
      }
    }
  },
})
