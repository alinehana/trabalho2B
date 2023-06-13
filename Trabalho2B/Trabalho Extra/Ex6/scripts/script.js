function calcularCredito() {
  var saldoMedio = parseFloat(document.getElementById("saldoMedio").value);
  var percentualCredito;

  if (saldoMedio >= 0 && saldoMedio <= 200) {
    percentualCredito = 0;
  } else if (saldoMedio <= 400) {
    percentualCredito = 0.2;
  } else if (saldoMedio <= 600) {
    percentualCredito = 0.3;
  } else {
   percentualCredito = 0.4;
  }

  var valorCredito = saldoMedio * percentualCredito;

  document.getElementById("mensagem").innerHTML = "Saldo Médio: R$" + saldoMedio.toFixed(2) + "<br>Valor do Crédito: R$" + valorCredito.toFixed(2);
  }

btCredito.onclick = function(){
  calcularCredito();
}