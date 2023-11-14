// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth } from 'firebase/auth'; // -->adrian agrego esto
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAGy6l4Tz80ry-wRBTtKpbVwh4Sf92yk7Y',
  authDomain: 'drinkatlas-sn13.firebaseapp.com',
  projectId: 'drinkatlas-sn13',
  storageBucket: 'drinkatlas-sn13.appspot.com',
  messagingSenderId: '386530532444',
  appId: '1:386530532444:web:2aedc651715d5094db9a99',
  measurementId: 'G-3HNMJCE2MJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/* const analytics = getAnalytics(app); */
export const auth = getAuth(app); // -->adrian agrego esto
export const provider = new GoogleAuthProvider(); // traer metodos

export { app, db };
