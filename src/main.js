import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { auth } from './firebase/index.js';
import { onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false

function createVueApp() {
    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app')
}

createVueApp();

// onAuthStateChanged(auth, async (user) => {
//     try {
//         if (user) {
//             createVueApp();
//         } else {
//             createVueApp();
//         }
//     } catch (error) {
//         throw error;
//     }
// });