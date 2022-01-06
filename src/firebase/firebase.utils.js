import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCYX6NxJws_Ptv8bC95khuGRreYU2zRaSQ",
    authDomain: "cloth-store-db-ccf8f.firebaseapp.com",
    projectId: "cloth-store-db-ccf8f",
    storageBucket: "cloth-store-db-ccf8f.appspot.com",
    messagingSenderId: "108446497588",
    appId: "1:108446497588:web:8f93715740bfe86e268361"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;