// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Firebase configuration object using .env variables
const firebaseConfig = {
  apiKey: "AIzaSyAWiYlUNtKSaolARf3W8mjRdepbNCDhTJ4",
  authDomain: "samagra-eff4f.firebaseapp.com",
  projectId: "samagra-eff4f",
  storageBucket: "samagra-eff4f.firebasestorage.app",
  messagingSenderId: "1038706659294",
  appId: "1:1038706659294:web:e91cc5f4c993d6f38a174f",
  measurementId: "G-Q26B1XB0V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};