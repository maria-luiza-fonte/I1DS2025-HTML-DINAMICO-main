const carregarDados = async () => {
  //esconde a div erro
  let divErro = document.getElementById("div-erro");
  divErro.style.display = "nome";
  divErro.innerHTML = "";

  try {
    const response = await fetch("https://api.coinbase.com/v2/currencies");
    const dados = await response.json(); //
    prepararTabela(dados.data);
    if (!response.ok) throw new Error(`Erro HTML: ${response.status}`);
  } catch (erro) {
    divErro.style.display = "block";
    divErro.innerHTML = `<b>Erro ao acessar a API:</b> ${erro.message}`;
  }
};

const prepararTabela = (dados) => {
  const linhaTabela = document.getElementById("itens");
  linhaTabela.innerHTML = "";

  let contador = 0;

  dados.forEach((moeda) => {
    let linhaAuxiliar = contador % 2 !== 0 ? "<tr class=`listra`>" : "<tr>";
    linhaAuxiliar += `<td>${moeda.id}</td><td>${moeda.name}</td></tr>`;

    contador++;
    linhaTabela.innerHTML += linhaAuxiliar;
  });
};
