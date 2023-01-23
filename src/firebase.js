// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwFLT9K26AOxq4LIucp5jS6Qq4ZbeXbHY",
  authDomain: "digicard-4cbb4.firebaseapp.com",
  projectId: "digicard-4cbb4",
  storageBucket: "digicard-4cbb4.appspot.com",
  messagingSenderId: "927161026487",
  appId: "1:927161026487:web:e066db5a96e79b62bc0a32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

