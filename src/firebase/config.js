import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLJfyYGgnBj1qgAgJHTy-rMSrZrAJPR1U",
  authDomain: "uolkut-desafio-semana-xii.firebaseapp.com",
  projectId: "uolkut-desafio-semana-xii",
  storageBucket: "uolkut-desafio-semana-xii.appspot.com",
  messagingSenderId: "1027291444568",
  appId: "1:1027291444568:web:a6d3a2ddca38bcd809212d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
