function calcularPedido(){
  //entrada


  corte = document.getElementById('corte').value;
  barba = document.getElementById('barba').value;
  depilacao = document.getElementById('depilacao').value;

  //processamento
  //corte
  if (corte == "tesoura") {
      imagem = "img/corteTesoura.jpg";
      precoCorte = "R$60.00";
  }
  else if (corte == "maquina") {
      imagem = "img/maquina.jpg";
      precoCorte = "R$45.00";
  }
  else {
      imagem = "img/TesouraMaquina.jpg";
      precoCorte = "R$52.00";
  }

  //barba
  if (barba == "simples") {
      precoBarba = "R$30.00";
  }
  else if (barba == "modelada") {
      precoBarba = "R$45.00";
  }

  //depilação
  if (depilacao == "quente") {
      precoDepilacao = "R$300.00";
  }
  else if (depilacao == "fria") {
      precoDepilacao = "R$250.00";
  }
  else {
      precoDepilacao = "R$850.00";
  }

  total = (precoBarba) + (precoCorte) + (precoDepilacao);


  //saida
  document.getElementById('foto').src = imagem;
  document.getElementById('total').value = total.toFixed(2);
}

function finalizar(){

  total = document.getElementById('total').value;
  if (total == 0.00) {
    msg = "Você deve selecionar pelo menos 1 elemento da lista.";
  }
  else {
    msg = "Pedido Cadastrado com Sucesso! \n";
    msg += "O Total do Seu Pedido é R$ ";
    msg += total;
  }
  document.getElementById('msg').value = msg;
  alert(msg);


}
