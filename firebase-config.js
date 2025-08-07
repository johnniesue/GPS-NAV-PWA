// Import Firebase core and App Check
import firebase from "firebase/app";
import "firebase/app-check";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDeVLmKQXCMN_JZNwFL9OhfCQKVRHsVNy4",
  authDomain: "a1-customer-dashboard.firebaseapp.com",
  projectId: "a1-customer-dashboard",
  storageBucket: "a1-customer-dashboard.firebasestorage.app",
  messagingSenderId: "981606789719",
  appId: "1:981606789719:web:327592a2cefa2536bda912"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize App Check with reCAPTCHA v3
const appCheck = firebase.appCheck();
appCheck.activate('YOUR_SITE_KEY_HERE', true); // Replace with actual site key
