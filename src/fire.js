import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB0jZcHFtBcTNK9E32jx3g5k2IeGUsUHB4",
  authDomain: "study-552ee.firebaseapp.com",
  databaseURL: "https://study-552ee.firebaseio.com",
  projectId: "study-552ee",
  storageBucket: "study-552ee.appspot.com",
  messagingSenderId: "678851042127",
  appId: "1:678851042127:web:76e8034813abfc4bd3033a"
};

export const fire = firebase.initializeApp(config);

const db = fire.firestore();
export const fireDb = db;
