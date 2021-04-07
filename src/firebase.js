import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAg7lLjeM-6RXTlextn-A2zciRI0YqkLNw",
  authDomain: "netflix-clone-8ff9e.firebaseapp.com",
  projectId: "netflix-clone-8ff9e",
  storageBucket: "netflix-clone-8ff9e.appspot.com",
  messagingSenderId: "736302075820",
  appId: "1:736302075820:web:caf7d712e6f46399503409",
  measurementId: "G-4PWBJ9Q71X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
