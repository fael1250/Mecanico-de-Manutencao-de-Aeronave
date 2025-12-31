// services/firebase.ts
// FIX: Updated imports to use the Firebase v9+ modular SDK syntax.
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do seu aplicativo web Firebase
const firebaseConfig = {
  // FIX: Replaced hardcoded API key with an environment variable as per security guidelines.
  apiKey: process.env.API_KEY,
  authDomain: "aerostudy-app.firebaseapp.com",
  projectId: "aerostudy-app",
  storageBucket: "aerostudy-app.appspot.com",
  messagingSenderId: "69752455360",
  appId: "1:69752455360:web:a698d92fe210ee6006ad25",
  measurementId: "G-8E5Z8F979E"
};

// Inicializa o Firebase
// FIX: Use the imported initializeApp function directly.
const app = initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar no aplicativo
// FIX: Use the imported functions directly.
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();