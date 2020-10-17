import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCuUFlUDOrVeJLTXIN3PEXqB6-GXz4QOKM",
    authDomain: "clone-21ec6.firebaseapp.com",
    databaseURL: "https://clone-21ec6.firebaseio.com",
    projectId: "clone-21ec6",
    storageBucket: "clone-21ec6.appspot.com",
    messagingSenderId: "896394023281",
    appId: "1:896394023281:web:3b0d69b4c005d4050da6d0",
    measurementId: "G-3B3QY7M8N3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebaseApp.firestore()
export { db, auth }