// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI5-oDmEJJhF7cVnrdCG2hMgFvLS9SC3g",
    authDomain: "products-9ebf6.firebaseapp.com",
    projectId: "products-9ebf6",
    storageBucket: "products-9ebf6.firebasestorage.app",
    messagingSenderId: "341684907569",
    appId: "1:341684907569:web:a6f277a2989e568bd56f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
    // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth