import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import i18n from './i18n'
import router from './router'

import firebase from 'firebase/compat/app'
import {getFirestore} from 'firebase/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getStorage } from "firebase/storage";

import '@/assets/main.css'

loadFonts()

const firebaseConfig = {
  apiKey: "AIzaSyBwgq0Ok2wJaJASthNY8HAFq8uKHnrLrHk",
  authDomain: "portfolio-8240d.firebaseapp.com",
  projectId: "portfolio-8240d",
  storageBucket: "portfolio-8240d.appspot.com",
  messagingSenderId: "209998463651",
  appId: "1:209998463651:web:085021bce554a4430cb516"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = firebase.auth();
const storage = getStorage(firebaseApp);

createApp(App)
  .use(i18n)
  .use(router)
  .use(vuetify)
  .mount('#app')

  export { auth, db, storage }
