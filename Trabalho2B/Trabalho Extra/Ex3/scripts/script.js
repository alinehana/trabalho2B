function calcularNotas() {
    var valor = parseInt(document.getElementById("valor").value);
    var notas100 = Math.floor(valor / 100);
    valor %= 100;
    var notas50 = Math.floor(valor / 50);
    valor %= 50;
    var notas10 = Math.floor(valor / 10);
    valor %= 10;
    var notas5 = Math.floor(valor / 5);
    valor %= 5;
    var notas1 = valor;
    document.getElementById("resultado").innerHTML = "Valor lido: " + valor + " Notas de 100: " + notas100  + " Notas de 50: " + notas50+ " Notas de 10: " + notas10 +
    " Notas de 5: " + notas5 + " Notas de 1: " + notas1;
  }

btCalcular.onclick = function(){
    calcularNotas();
}