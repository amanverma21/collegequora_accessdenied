import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAykR1yfRxVOMqQoXuxX-KMugOMurYJX8",
  authDomain: "collegequora-access-denied.firebaseapp.com",
  projectId: "collegequora-access-denied",
  storageBucket: "collegequora-access-denied.appspot.com",
  messagingSenderId: "742735663028",
  appId: "1:742735663028:web:9208eceb14fef4c931ace1",
  measurementId: "G-9M039WQFE3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
