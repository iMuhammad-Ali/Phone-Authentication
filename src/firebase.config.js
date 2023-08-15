// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBhn7oVYceBRrHdmfckTWWulgGtVNAu0A",
  authDomain: "connect-me-360.firebaseapp.com",
  databaseURL: "https://connect-me-360-default-rtdb.firebaseio.com",
  projectId: "connect-me-360",
  storageBucket: "connect-me-360.appspot.com",
  messagingSenderId: "183998015918",
  appId: "1:183998015918:web:c20421dbf01e41cd4a803f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
