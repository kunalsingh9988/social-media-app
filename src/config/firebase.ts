// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtgjcQtkq-WPrJTFum1yvNAzaIa2CCVNU",
  authDomain: "social-media-app-a7e98.firebaseapp.com",
  projectId: "social-media-app-a7e98",
  storageBucket: "social-media-app-a7e98.appspot.com",
  messagingSenderId: "621701087845",
  appId: "1:621701087845:web:539d5da0b9a716481abc8c",
  measurementId: "G-4XZV9LWF0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app) 
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)