import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhr3mvFmq1n2lELqf5MYv_d8pDzZx1HqQ",
  authDomain: "e-proj-clone.firebaseapp.com",
  projectId: "e-proj-clone",
  storageBucket: "e-proj-clone.appspot.com",
  messagingSenderId: "154234700674",
  appId: "1:154234700674:web:f50b2d878375f88cb7c59b",
  measurementId: "G-BL3S9C23N3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
