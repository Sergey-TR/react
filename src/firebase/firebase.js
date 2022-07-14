import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import { firebaseConfig } from "./configFirebase";

const firebaseDB = firebase.initializeApp(firebaseConfig);
export const db = firebaseDB.database().ref();
export const defaultAuth = firebase.auth();

