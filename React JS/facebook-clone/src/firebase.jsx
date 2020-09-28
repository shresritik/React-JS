// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDd_mJK4iiI8FYBNI_YlMnK34vHaVDkOLA",
  authDomain: "facebook-clone-4f848.firebaseapp.com",
  databaseURL: "https://facebook-clone-4f848.firebaseio.com",
  projectId: "facebook-clone-4f848",
  storageBucket: "facebook-clone-4f848.appspot.com",
  messagingSenderId: "151228411408",
  appId: "1:151228411408:web:0ca9cb5bee9ffc66696495",
  measurementId: "G-0YMS7QL5WV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
