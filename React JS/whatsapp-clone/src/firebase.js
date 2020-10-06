// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDwnyaHLaU3rw2EyijzOZDPCffIexpw0tE",
  authDomain: "whatsapp-clone-fa037.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-fa037.firebaseio.com",
  projectId: "whatsapp-clone-fa037",
  storageBucket: "whatsapp-clone-fa037.appspot.com",
  messagingSenderId: "562331949405",
  appId: "1:562331949405:web:74c769e96a2b8757b330b4",
  measurementId: "G-GTTZVKQB7E",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
