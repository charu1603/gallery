// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRXt8f9OG0X3XgEXR23KPMUuMBXom7Gds",
  authDomain: "pixabay-api-c8984.firebaseapp.com",
  projectId: "pixabay-api-c8984",
  storageBucket: "pixabay-api-c8984.appspot.com",
  messagingSenderId: "955487259672",
  appId: "1:955487259672:web:592658b81316b61a93c76d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);