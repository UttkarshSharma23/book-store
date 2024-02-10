// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4fuWaC8BBU7D9D2q-DesAJxfVdWhMMl4",
  authDomain: "mern-book-inventory-67d72.firebaseapp.com",
  projectId: "mern-book-inventory-67d72",
  storageBucket: "mern-book-inventory-67d72.appspot.com",
  messagingSenderId: "778889545007",
  appId: "1:778889545007:web:e0f0ef45bf70e107654dda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;