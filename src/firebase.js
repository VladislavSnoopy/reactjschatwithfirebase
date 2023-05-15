import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk7XWzq-f5s3PFLBNoNeMM2VYjuBjO_ks",
  authDomain: "chat-a3ffc.firebaseapp.com",
  projectId: "chat-a3ffc",
  storageBucket: "chat-a3ffc.appspot.com",
  messagingSenderId: "734685385896",
  appId: "1:734685385896:web:7209310f7bc83a2698de9d",
  measurementId: "G-8172FB4QLT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
