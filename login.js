// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCStWhNWez0NU85okfarLtd94fKo9sdfBY",
  authDomain: "smart-city-app-78637.firebaseapp.com",
  projectId: "smart-city-app-78637",
  storageBucket: "smart-city-app-78637.firebasestorage.app",
  messagingSenderId: "148025701749",
  appId: "1:148025701749:web:559b528b31540b4a548f3c",
  measurementId: "G-M9B7VJPPB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);