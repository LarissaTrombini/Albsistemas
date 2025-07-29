// Firebase via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWefqDsrHoxE5omMq3Bnf9BTz5waAV-Qg",
  authDomain: "alb-site.firebaseapp.com",
  databaseURL: "https://alb-site-default-rtdb.firebaseio.com",
  projectId: "alb-site",
  storageBucket: "alb-site.appspot.com",
  messagingSenderId: "619405356101",
  appId: "1:619405356101:web:b7c8b22876a3005897872c"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Referência aos produtos
const produtosRef = ref(database, 'produtos');

// Onde exibir os produtos
const container = document.getElementById("lista-produtos");

onValue(produtosRef, (snapshot) => {
  const produtos = snapshot.val();
  container.innerHTML = "";

  if (produtos) {
    Object.keys(produtos).forEach((id) => {
      const p = produtos[id];

      const item = document.createElement("div");
      item.className = "produto";
      item.innerHTML = `
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <strong>R$ ${p.preco}</strong>
      `;
      container.appendChild(item);
    });
  } else {
    container.innerHTML = "<p>Nenhum produto encontrado.</p>";
  }
});
