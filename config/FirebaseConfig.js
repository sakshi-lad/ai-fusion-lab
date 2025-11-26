// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-first-project-e75d9.firebaseapp.com",
  projectId: "my-first-project-e75d9",
  storageBucket: "my-first-project-e75d9.firebasestorage.app",
  messagingSenderId: "286409405418",
  appId: "1:286409405418:web:0e1d209fa80397e407f893",
  measurementId: "G-MK81LP7CST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
