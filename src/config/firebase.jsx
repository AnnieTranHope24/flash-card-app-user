import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3rkVcJ_RpPpHjcwKpo5m4BGuuFxPfq8Y",
  authDomain: "flashcard-app-server.firebaseapp.com",
  projectId: "flashcard-app-server",
  storageBucket: "flashcard-app-server.appspot.com",
  messagingSenderId: "642385661144",
  appId: "1:642385661144:web:e5ca0195ef461679f55bad",
  measurementId: "G-FDDDVKS7P7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;