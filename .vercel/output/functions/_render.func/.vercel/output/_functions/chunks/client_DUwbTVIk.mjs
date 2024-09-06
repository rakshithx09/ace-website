import { initializeApp } from 'firebase/app';
import 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQUu9PjwegIZi_kY-2ZVL0CZfob8KRHIU",
  authDomain: "ace-website-be01d.firebaseapp.com",
  projectId: "ace-website-be01d",
  storageBucket: "ace-website-be01d.appspot.com",
  messagingSenderId: "871741552562",
  appId: "1:871741552562:web:2d09a9c7b5bdc8610516ab",
  measurementId: "G-DZJG4ETLW7"
};
const app = initializeApp(firebaseConfig);
new GoogleAuthProvider();
const auth = getAuth(app);

export { auth as a };
