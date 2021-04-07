import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBh36KZoTeXjsG4QLnUb26Jg3NueRxToiQ",
  authDomain: "netflix-b152b.firebaseapp.com",
  projectId: "netflix-b152b",
  storageBucket: "netflix-b152b.appspot.com",
  messagingSenderId: "526865625151",
  appId: "1:526865625151:web:647167fed67ff2ba3d488a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
