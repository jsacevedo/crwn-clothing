import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCslmcyzHYid7kHl0MAiqUZd4p2ZMBSG-0',
  authDomain: 'crwn-db-c1ce5.firebaseapp.com',
  projectId: 'crwn-db-c1ce5',
  storageBucket: 'crwn-db-c1ce5.appspot.com',
  messagingSenderId: '206277356135',
  appId: '1:206277356135:web:e3e92b006e3d898f3482c2',
  measurementId: 'G-ESDW6V8HYD',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
