import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
require("dotenv").config();

// cleaner definition for the apikey
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "let-s-sweat.firebaseapp.com",
  databaseURL: "https://let-s-sweat.firebaseio.com",
  projectId: "let-s-sweat",
  storageBucket: "let-s-sweat.appspot.com",
  messagingSenderId: "22140800874",
  appId: "1:22140800874:web:c65c4eb72187e3624a5f13",
  measurementId: "G-082HZV6XVP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
