import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCEHv-MzRnKgDV9jvu_F7-vmSAolJzDOm8",
  authDomain: "clone-02-8599b.firebaseapp.com",
  projectId: "clone-02-8599b",
  storageBucket: "clone-02-8599b.appspot.com",
  messagingSenderId: "355900991804",
  appId: "1:355900991804:web:2d23d91f79010e3d9bd639"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}
