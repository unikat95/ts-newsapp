import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOgqIiYpelzgfQE3fYsdvyjkP4YD3qV0w",
  authDomain: "ts-neswapp.firebaseapp.com",
  projectId: "ts-neswapp",
  storageBucket: "ts-neswapp.firebasestorage.app",
  messagingSenderId: "13634623157",
  appId: "1:13634623157:web:a597abe24656efb7cb10fc",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
