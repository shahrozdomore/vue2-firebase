//Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

//Firebase config
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Utils
// utils
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
// collection references
// const usersCollection = db.collection("users");

// export utils/refs
// export { db, auth, usersCollection };
