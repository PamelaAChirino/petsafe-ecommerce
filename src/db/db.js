import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmyuuXvlGs0PhutirHYLYkdfUKIkodrYo",
  authDomain: "ecommerce-petsafe.firebaseapp.com",
  projectId: "ecommerce-petsafe",
  storageBucket: "ecommerce-petsafe.firebasestorage.app",
  messagingSenderId: "942013497674",
  appId: "1:942013497674:web:9287b75934a829061481b3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;