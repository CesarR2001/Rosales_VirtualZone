import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeJmDegg73omoWpnHFgMZBAp8ao71Rq9I",
    authDomain: "virtualzone-digital.firebaseapp.com",
    projectId: "virtualzone-digital",
    storageBucket: "virtualzone-digital.firebasestorage.app",
    messagingSenderId: "789542669690",
    appId: "1:789542669690:web:5fda2ace1c5f64575a5ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)