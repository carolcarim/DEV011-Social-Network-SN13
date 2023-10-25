// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGy6l4Tz80ry-wRBTtKpbVwh4Sf92yk7Y",
  authDomain: "drinkatlas-sn13.firebaseapp.com",
  projectId: "drinkatlas-sn13",
  storageBucket: "drinkatlas-sn13.appspot.com",
  messagingSenderId: "386530532444",
  appId: "1:386530532444:web:2aedc651715d5094db9a99",
  measurementId: "G-3HNMJCE2MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export function auth() {
  const auth = getAuth();

  try {
    const result = signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  } catch (error) {}
  }
