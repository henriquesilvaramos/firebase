console.log("Carregando configuração do Firebase...");

const firebaseConfig = {
  apiKey: "AIzaSyCvmnNxLyTy4X2TYCGn_L9rXCL7EEsIQlU",
  authDomain: "bateponto-5421a.firebaseapp.com",
  databaseURL: "https://bateponto-5421a-default-rtdb.firebaseio.com",
  projectId: "bateponto-5421a",
  storageBucket: "bateponto-5421a.appspot.com",
  messagingSenderId: "523374311862",
  appId: "1:523374311862:web:2fa16ef81a2ebfe1c52917"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase inicializado"); // Debug após a inicialização
} else {
  firebase.app(); // if already initialized, use that one
}

console.log("Firebase carregado");
