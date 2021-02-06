import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgKg46QGPfI3NHLYVH4rjoW1x149NHF3g",
  authDomain: "vigor-7a90d.firebaseapp.com",
  projectId: "vigor-7a90d",
  storageBucket: "vigor-7a90d.appspot.com",
  messagingSenderId: "627079510646",
  appId: "1:627079510646:web:08ac01c3a03e6f00ebbd57",
  measurementId: "G-PGYFY64BWW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
