// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrK417xO1h0DwzjHkYqQ3crIeHBqHUsFk",
  authDomain: "kandishare-8fdbe.firebaseapp.com",
  projectId: "kandishare-8fdbe",
  storageBucket: "kandishare-8fdbe.firebasestorage.app",
  messagingSenderId: "417960703423",
  appId: "1:417960703423:web:980926e7d9bfdf4f1e9d0a",
  measurementId: "G-8Z90K13XB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };