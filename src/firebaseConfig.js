import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI9MC9qMkmjuV23QEVVfLmaw6Gywu82sY",
  authDomain: "vue3-project-mrs.firebaseapp.com",
  projectId: "vue3-project-mrs",
  storageBucket: "vue3-project-mrs.appspot.com",
  messagingSenderId: "587619424480",
  appId: "1:587619424480:web:9ea9ac223c778164fc5885"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };