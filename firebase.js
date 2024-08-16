// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, grtFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu7xNxtyrVtij-8km9fVdCZGMCqB2kFKA",
  authDomain: "inventory-management-f49e9.firebaseapp.com",
  projectId: "inventory-management-f49e9",
  storageBucket: "inventory-management-f49e9.appspot.com",
  messagingSenderId: "83290069916",
  appId: "1:83290069916:web:8bb079294b3e3e3e098659",
  measurementId: "G-LP53PW05BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}