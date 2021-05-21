import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaIrCzsQI5Fi843UekKVPtLgBHJIwaEvM",
    authDomain: "my-app-b1d2d.firebaseapp.com",
    projectId: "my-app-b1d2d",
    storageBucket: "my-app-b1d2d.appspot.com",
    messagingSenderId: "938900052225",
    appId: "1:938900052225:web:98ced7f5a97cd2e3c4e300"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebaseApp;