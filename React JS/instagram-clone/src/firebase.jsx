import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCoH7NpyAzT9TX2Ot4azmV3qbOJpeht6pc",
  authDomain: "instagram-clone-d352d.firebaseapp.com",
  databaseURL: "https://instagram-clone-d352d.firebaseio.com",
  projectId: "instagram-clone-d352d",
  storageBucket: "instagram-clone-d352d.appspot.com",
  messagingSenderId: "155913674230",
  appId: "1:155913674230:web:9301b6f12ef8ea7aad3bd7",
  measurementId: "G-LJ6M6FPVG2",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
export { db, auth, storage };
