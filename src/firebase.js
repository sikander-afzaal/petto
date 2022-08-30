// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOREYLfkXseuTTjTDFaQyC039heuLt_gk",
  authDomain: "petto-88779.firebaseapp.com",
  projectId: "petto-88779",
  storageBucket: "petto-88779.appspot.com",
  messagingSenderId: "979067637579",
  appId: "1:979067637579:web:764c5561d306cee4fe62ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
