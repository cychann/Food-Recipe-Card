import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8xa6XwkwIAxQRuQonDtbVjr5EXEHnmUc",
  authDomain: "food-recipe-card.firebaseapp.com",
  projectId: "food-recipe-card",
  storageBucket: "food-recipe-card.appspot.com",
  messagingSenderId: "469336326316",
  appId: "1:469336326316:web:040f268de8e3ab39439f09",
  measurementId: "G-DGM0C5SBLY",
};

export const firebaseApp = initializeApp(firebaseConfig);
