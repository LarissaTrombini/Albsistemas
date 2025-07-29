// admin.js
import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.getElementById('produtoForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const descricao = document.getElementById('descricao').value;
  const imagem = document.getElementById('imagem').value;

  try {
    await addDoc(collection(db, "produtos"), {
      nome, preco, descricao, imagem
    });
    document.getElementById('mensagem').innerText = "Produto cadastrado com sucesso!";
    document.getElementById('produtoForm').reset();
  } catch (error) {
    console.error("Erro ao salvar:", error);
    document.getElementById('mensagem').innerText = "Erro ao cadastrar o produto.";
  }
});
