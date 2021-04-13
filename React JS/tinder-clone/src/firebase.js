import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBfORTtIE1gIj0sC2tmHEttsbnGm9RHRpU",
  authDomain: "tinder-clone-168ea.firebaseapp.com",
  projectId: "tinder-clone-168ea",
  storageBucket: "tinder-clone-168ea.appspot.com",
  messagingSenderId: "1073863598",
  appId: "1:1073863598:web:5b16fdad1fa2ce3cac063f",
  measurementId: "G-1MJ1JV7P2J",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
