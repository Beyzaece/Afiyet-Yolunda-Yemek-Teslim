import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import 'firebase/auth';

// Firebase konfigürasyonu
const firebaseConfig = {
  apiKey: "AIzaSyBc-b8F7HRavNqBPwIjIvGqx64r3xHir0Q",
  authDomain: "afiyetyolunda.firebaseapp.com",
  projectId: "afiyetyolunda",
  storageBucket: "afiyetyolunda.appspot.com",
  messagingSenderId: "328430233361",
  appId: "1:328430233361:web:6c30d5050f5874975a0eb0",
  measurementId: "G-96JFVEHH3P"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore örneği

const restaurantRef = collection(db, "restaurants");

const auth = getAuth(app);
export { app, db, auth };