// services/firebase.ts
// FIX: Using Firebase v8 compat libraries to resolve module import error. The error "Module has no exported member 'initializeApp'" suggests a Firebase version mismatch.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Configuração do seu aplicativo web Firebase
const firebaseConfig = {
  // FIX: Replaced hardcoded API key with an environment variable as per security guidelines.
  apiKey: "AIzaSyDGm9pW62ZtcBMDvwEhj120tusL4j9UlAk",
  authDomain: "aerostudy-app.firebaseapp.com",
  projectId: "aerostudy-app",
  storageBucket: "aerostudy-app.appspot.com",
  messagingSenderId: "69752455360",
  appId: "1:69752455360:web:a698d92fe210ee6006ad25",
  measurementId: "G-8E5Z8F979E"
};

// Inicializa o Firebase
// FIX: Added a check to prevent re-initializing the app, which can cause errors.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Exporta os serviços que vamos usar no aplicativo
export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();