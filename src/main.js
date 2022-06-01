import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC2NgtFxPQphQvqEOwFyQfnaEs9MWbHZ6o",
    authDomain: "sae203-f6ad3.firebaseapp.com",
    projectId: "sae203-f6ad3",
    storageBucket: "sae203-f6ad3.appspot.com",
    messagingSenderId: "813484391675",
    appId: "1:813484391675:web:daeb90a9bc3b2abd39045e"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.mount('#app')