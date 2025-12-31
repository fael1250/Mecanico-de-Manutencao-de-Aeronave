// services/firebase.ts
import * as firebaseApp from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";

// Configuração do seu aplicativo web Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDGm9pW62ZtcBMDvwEhj120tusL4j9UlAk",
  authDomain: "aerostudy-app.firebaseapp.com",
  projectId: "aerostudy-app",
  storageBucket: "aerostudy-app.appspot.com",
  messagingSenderId: "69752455360",
  appId: "1:69752455360:web:a698d92fe210ee6006ad25",
  measurementId: "G-8E5Z8F979E"
};

// Inicializa o Firebase
const app = firebaseApp.initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar no aplicativo
export const auth = firebaseAuth.getAuth(app);
export const db = firestore.getFirestore(app);
export const googleProvider = new firebaseAuth.GoogleAuthProvider();
