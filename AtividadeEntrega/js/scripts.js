// ATIVIDADE 01
const ligar = () => {
  let lampada = document.getElementById("lampada");

  //   lampada.src = "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};
// -----------------------------------------

// ATIVIDADE 02
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  canvas.innerHTML = "";

  if (qtdImagem <= 0)
    alert("O campo quantidade não pode estar nulo ou negativo!");
  else {
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML += "<img src='img/logo.png' alt=''>";
    }
  }
};
// -----------------------------------------

//ATIVIDADE 03
const validaForm = () => {
  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";

  let nome = inCli;
  let data = inData;
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;

  switch (true) {
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value == "" ||
      mail.value == "" ||
      prod.value == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O campo não pode estar vazio!";
      break;

    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";

      break;

    case nome.value.trim().length < 5 || prod.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;

    default:
      break;
  }
};
// -----------------------------------------

// ATIVIDADE 04
const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = 0;
  let valDesconto = 0;
  let valFinalPedido = 0;

  if (valPedido >= 2000) {
    perDesconto = 1.5;
  } else if (valPedido >= 1500) {
    perDesconto = 1;
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
  } else {
    perDesconto = 0;
  }

  valDesconto = (valPedido * perDesconto) / 100;
  valFinalPedido = valPedido - valDesconto;
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2);
  inValFinal.value = valFinalPedido.toFixed(2);
};
