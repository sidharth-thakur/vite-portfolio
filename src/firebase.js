// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQLtYU7W9nRZTlSmxGWRGwFU9b4tC23H8",
  authDomain: "my-portfolio-1a723.firebaseapp.com",
  projectId: "my-portfolio-1a723",
  storageBucket: "my-portfolio-1a723.appspot.com",
  messagingSenderId: "6643915111",
  appId: "1:6643915111:web:a860052b18f1f8137237c2",
  measurementId: "G-R9DKGDBP9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
