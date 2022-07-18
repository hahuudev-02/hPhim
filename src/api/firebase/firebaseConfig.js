// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtsbOscA3t6o8kl5A-7T8Ypj4x9OdwRkc",
  authDomain: "hphim-55b0b.firebaseapp.com",
  projectId: "hphim-55b0b",
  storageBucket: "hphim-55b0b.appspot.com",
  messagingSenderId: "287642909824",
  appId: "1:287642909824:web:64997de095ab3ed065fa65",
  measurementId: "G-TFCTZXD9SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };