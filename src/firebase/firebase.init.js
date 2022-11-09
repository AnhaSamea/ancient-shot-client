// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7R7m0sBm-ot3LanZ9p5LX3aqmAXyDVoc",
  authDomain: "ancient-shot.firebaseapp.com",
  projectId: "ancient-shot",
  storageBucket: "ancient-shot.appspot.com",
  messagingSenderId: "225090420276",
  appId: "1:225090420276:web:b2de78588dd408d0a2d461"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;