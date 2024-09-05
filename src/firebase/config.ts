// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQUu9PjwegIZi_kY-2ZVL0CZfob8KRHIU",
  authDomain: "ace-website-be01d.firebaseapp.com",
  projectId: "ace-website-be01d",
  storageBucket: "ace-website-be01d.appspot.com",
  messagingSenderId: "871741552562",
  appId: "1:871741552562:web:2d09a9c7b5bdc8610516ab",
  measurementId: "G-DZJG4ETLW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export { auth, provider, signInWithPopup };
