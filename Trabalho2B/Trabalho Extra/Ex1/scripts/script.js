function ordenarValores() {
  let valores = [];
  for (let i = 1; i <= 5; i++) {
    let input = document.getElementById("valor" + i);
    let valor = parseInt(input.value);
    valores.push(valor);
  }
  valores.sort(function(a, b) {
    return b - a;
  });
  let resultado = document.getElementById("resultado");
  resultado.textContent= "Valores ordenados em ordem decrescente: " + valores.join(", ");
}

btValor.onclick = function(){
  ordenarValores();
}