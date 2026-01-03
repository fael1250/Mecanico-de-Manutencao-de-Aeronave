// services/firebase.ts

import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// A configuração do Firebase. A chave de API é lida da variável de ambiente.
const firebaseConfig = {
  apiKey: process.env.API_KEY, // USA A VARIÁVEL DE AMBIENTE
  authDomain: "aerostudy-app.firebaseapp.com",
  projectId: "aerostudy-app",
  storageBucket: "aerostudy-app.appspot.com",
  messagingSenderId: "69752455360",
  appId: "1:69752455360:web:a698d92fe210ee6006ad25",
  measurementId: "G-8E5Z8F979E"
};

// Declaração das variáveis que serão exportadas.
let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let googleProvider: GoogleAuthProvider | null = null;
let isFirebaseConfigured = false;

// Lógica de inicialização segura usando a sintaxe modular v9+.
if (firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    googleProvider = new GoogleAuthProvider();
    isFirebaseConfigured = true;
  } catch (error) {
    console.error("Erro ao inicializar o Firebase:", error);
    isFirebaseConfigured = false;
  }
} else {
  console.warn("Chave de API do Firebase não encontrada. O aplicativo exibirá a tela de erro de configuração.");
}

// Exporta as variáveis para serem usadas em outras partes do aplicativo.
export { auth, db, googleProvider, isFirebaseConfigured };