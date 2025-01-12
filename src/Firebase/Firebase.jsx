// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKQobvLUzG28Jv6Xn7h811uzDL1y97ve4",
  authDomain: "travelwebapp-9fcf3.firebaseapp.com",
  projectId: "travelwebapp-9fcf3",
  storageBucket: "travelwebapp-9fcf3.firebasestorage.app",
  messagingSenderId: "841383828143",
  appId: "1:841383828143:web:39d963ff608980040f125a",
  measurementId: "G-2F0K2L738J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);