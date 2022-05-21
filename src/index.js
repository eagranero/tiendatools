import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAn_jc1mFooAKaMShlnQC8vANFQ7qh9HNE",
  authDomain: "tiendatools-ce56b.firebaseapp.com",
  projectId: "tiendatools-ce56b",
  storageBucket: "tiendatools-ce56b.appspot.com",
  messagingSenderId: "91972339799",
  appId: "1:91972339799:web:57138a6c649d9086c47b12"
};


const root = ReactDOM=createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
