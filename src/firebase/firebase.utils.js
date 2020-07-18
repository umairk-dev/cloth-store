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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("====================================");
      console.log("error creating user", error.message);
      console.log("====================================");
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
