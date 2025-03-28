const atualizarDados = () => {
  let dados = document.getElementById("itens");

  dados.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let preco = Math.random() * 100;

    let elemento = "";

    //criando listra de cor diferente para linhas impares//
    if (i % 2 != 0) elemento = "<tr class='listra'>";
    else elemento = "<tr>";

    //inserindo os intens da linha  (tr)
    elemento += `<td>Produto ${i} </td><td>R$ ${preco.toFixed(2)} </td>`;

    dados.innerHTML += elemento;
  }
};
