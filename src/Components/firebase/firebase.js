import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDNXXOIEpzm9FbIADf2xmH7PtTOToEpAk",
  authDomain: "clone-8a3ab.firebaseapp.com",
  projectId: "clone-8a3ab",
  storageBucket: "clone-8a3ab.appspot.com",
  messagingSenderId: "238090628469",
  appId: "1:238090628469:web:0afc5397c96af88b22f73c",
  measurementId: "G-9T1MDDS3TD",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = app.firestore();

export { auth, db };
