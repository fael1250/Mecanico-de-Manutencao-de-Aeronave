// services/firebase.ts
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGm9pW62ZtcBMDvwEhj120tusL4j9UlAk",
  authDomain: "aerostudy-app.firebaseapp.com",
  projectId: "aerostudy-app",
  storageBucket: "aerostudy-app.appspot.com",
  messagingSenderId: "69752455360",
  appId: "1:69752455360:web:a698d92fe210ee6006ad25",
  measurementId: "G-8E5Z8F979E"
};

let auth: firebase.auth.Auth | null = null;
let db: firebase.firestore.Firestore | null = null;
let googleProvider: firebase.auth.GoogleAuthProvider | null = null;
let isFirebaseConfigured = false;

// Só inicializa o Firebase se a API_KEY estiver definida.
if (firebaseConfig.apiKey) {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    auth = firebase.auth();
    db = firebase.firestore();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    isFirebaseConfigured = true;
  } catch (error) {
    console.error("Erro ao inicializar o Firebase:", error);
    isFirebaseConfigured = false;
  }
} else {
  console.warn("Chave de API do Firebase não encontrada. O aplicativo funcionará em modo offline/limitado.");
}

export { auth, db, googleProvider, isFirebaseConfigured };