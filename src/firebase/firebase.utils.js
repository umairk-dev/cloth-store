import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYhnIjDR8Yznp6eqX8cFZaz_o8GSPuYNY",
  authDomain: "uber-clone-90ffd.firebaseapp.com",
  databaseURL: "https://uber-clone-90ffd.firebaseio.com",
  projectId: "uber-clone-90ffd",
  storageBucket: "uber-clone-90ffd.appspot.com",
  messagingSenderId: "1041893054790",
  appId: "1:1041893054790:web:81a0cf8d2e765cb27f6d47",
  measurementId: "G-579T26QR12",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
