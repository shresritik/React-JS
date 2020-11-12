import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByk54usIze1AygpEPoWt3Mr3GB9RSx858",
  authDomain: "shresritik.firebaseapp.com",
  databaseURL: "https://shresritik.firebaseio.com",
  projectId: "shresritik",
  storageBucket: "shresritik.appspot.com",
  messagingSenderId: "622343911576",
  appId: "1:622343911576:web:2db5d1d4e6ad4fb64d38ed",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
