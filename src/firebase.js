import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKY4ZFvVhBKWXqW0lq-dHClwsFFu7-aLA",
    authDomain: "react-course-394ac.firebaseapp.com",
    projectId: "react-course-394ac",
    storageBucket: "react-course-394ac.appspot.com",
    messagingSenderId: "1057438489537",
    appId: "1:1057438489537:web:b4cbabdadacdf75efb6d40"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);

  export const db = firebaseDB.database().ref();
  export const auth = firebase.auth();