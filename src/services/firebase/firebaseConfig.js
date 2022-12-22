import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDy4OKuN-OHsJ1vzYzXAjlyWjT0OPwFoDs",
  authDomain: "e-comerce-dunder-mifflin.firebaseapp.com",
  projectId: "e-comerce-dunder-mifflin",
  storageBucket: "e-comerce-dunder-mifflin.appspot.com",
  messagingSenderId: "187809324160",
  appId: "1:187809324160:web:fafdd9b9effd9dc1cc1a65"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);