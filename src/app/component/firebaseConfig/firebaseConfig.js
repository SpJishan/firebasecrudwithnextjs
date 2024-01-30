// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS2ja_YAMbc0m19p5DJ9KKIlZt3cNBfTs",
  authDomain: "fir-starter-9f446.firebaseapp.com",
  databaseURL: "https://fir-starter-9f446-default-rtdb.firebaseio.com",
  projectId: "fir-starter-9f446",
  storageBucket: "fir-starter-9f446.appspot.com",
  messagingSenderId: "829420054204",
  appId: "1:829420054204:web:ca8c474f05abede8bc92b9",
  measurementId: "G-3XCKHXM9YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);