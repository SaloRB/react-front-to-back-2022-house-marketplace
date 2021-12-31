import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9U89jTLg65cQU41lScoDMh9D090R8u8",
  authDomain: "house-marketplace-app-78167.firebaseapp.com",
  projectId: "house-marketplace-app-78167",
  storageBucket: "house-marketplace-app-78167.appspot.com",
  messagingSenderId: "1041536904251",
  appId: "1:1041536904251:web:3ddd7943adfcec37bfc01e",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
