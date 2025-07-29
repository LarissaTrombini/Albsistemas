const produtos = [
    { nome: "Picanha", preco: "R$ 49,90", imagem: "picanha.jpg" },
    { nome: "Costela", preco: "R$ 39,90", imagem: "picanha.jpg" },
    { nome: "Fraldinha", preco: "R$ 44,90", imagem: "picanha.jpg" },
    { nome: "Linguiça", preco: "R$ 19,90", imagem: "picanha.jpg" },
    { nome: "Maminha", preco: "R$ 42,90", imagem: "picanha.jpg" },
    { nome: "Cupim", preco: "R$ 38,90", imagem: "picanha.jpg" },
    { nome: "Alcatra", preco: "R$ 45,90", imagem: "picanha.jpg" },
    { nome: "Filet Mignon", preco: "R$ 59,90", imagem: "picanha.jpg" },
    { nome: "Coração", preco: "R$ 15,90", imagem: "picanha.jpg" },
    { nome: "Espetinho", preco: "R$ 12,90", imagem: "picanha.jpg" },
    { nome: "Porção de Batata", preco: "R$ 9,90", imagem: "picanha.jpg" },
    { nome: "Porção de Polenta", preco: "R$ 8,90", imagem: "picanha.jpg" },
    // Adicione mais produtos aqui
  ];
  
  let indice = 0;
  const produtosPorTela = 9;
  const grid = document.getElementById("menuGrid");
  
  function mostrarProdutos() {
    grid.innerHTML = "";
    const slice = produtos.slice(indice, indice + produtosPorTela);
    slice.forEach(produto => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.preco}</p>
      `;
      grid.appendChild(card);
    });
    indice = (indice + produtosPorTela) % produtos.length;
  }
  
  mostrarProdutos();
  setInterval(mostrarProdutos, 5000);
  