// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5y2rNNJaRT_v-p56dxev_MaO2pLtJVC8",
  authDomain: "journalapp-bf049.firebaseapp.com",
  projectId: "journalapp-bf049",
  storageBucket: "journalapp-bf049.appspot.com",
  messagingSenderId: "725211876125",
  appId: "1:725211876125:web:376ab9754189fb95b56ff4",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
