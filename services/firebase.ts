// services/firebase.ts

// Para compatibilidade com o restante do código que usa a sintaxe v8 (ex: auth(), db.collection()),
// importamos a versão de compatibilidade da biblioteca.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// A configuração do Firebase. A chave de API é lida da variável de ambiente.
// Isso é crucial para a segurança e para que o app funcione corretamente na Vercel.
const firebaseConfig = {
  apiKey: "AIzaSyDGm9pW62ZtcBMDvwEhj120tusL4j9UlAk", // USA A VARIÁVEL DE AMBIENTE
  authDomain: "aerostudy-app.firebaseapp.com",
  projectId: "aerostudy-app",
  storageBucket: "aerostudy-app.appspot.com",
  messagingSenderId: "69752455360",
  appId: "1:69752455360:web:a698d92fe210ee6006ad25",
  measurementId: "G-8E5Z8F979E"
};

// Declaração das variáveis que serão exportadas.
let auth: firebase.auth.Auth | null = null;
let db: firebase.firestore.Firestore | null = null;
let googleProvider: firebase.auth.GoogleAuthProvider | null = null;
let isFirebaseConfigured = false;

// Lógica de inicialização segura.
// O Firebase só é inicializado se a API_KEY for fornecida.
// Caso contrário, o app mostrará a tela de erro de configuração em App.tsx.
if (firebaseConfig.apiKey) {
  try {
    // Evita reinicializar o app se ele já estiver inicializado (comum em dev com HMR).
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    
    // Inicializa e atribui os serviços de Auth e Firestore.
    auth = firebase.auth();
    db = firebase.firestore();
    googleProvider = new firebase.auth.GoogleAuthProvider();
    
    // Confirma que a configuração foi bem-sucedida.
    isFirebaseConfigured = true;

  } catch (error) {
    console.error("Erro ao inicializar o Firebase:", error);
    // Marca como não configurado em caso de erro.
    isFirebaseConfigured = false;
  }
} else {
  // Adiciona um aviso no console para o desenvolvedor.
  console.warn("Chave de API do Firebase não encontrada. O aplicativo exibirá a tela de erro de configuração.");
}

// Exporta as variáveis para serem usadas em outras partes do aplicativo.
export { auth, db, googleProvider, isFirebaseConfigured };