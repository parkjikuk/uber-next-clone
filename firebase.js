import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQhOfmjJtSRorSkl_OAKzwINcffBtvwE0",
  authDomain: "uber-next-clone-beaf5.firebaseapp.com",
  projectId: "uber-next-clone-beaf5",
  storageBucket: "uber-next-clone-beaf5.appspot.com",
  messagingSenderId: "848569270436",
  appId: "1:848569270436:web:5501a4f328d4615814e631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }