function calcularAumento() {
  var cargo = document.getElementById("cargo").value;
  var salarioAntigo = parseFloat(document.getElementById("salario").value);
  var percentualAumento;

  switch (cargo) {
    case "Gerente":
      percentualAumento = 0.1;
      break;
    case "Engenheiro":
      percentualAumento = 0.2;
      break;
    case "Técnico":
      percentualAumento = 0.3;
      break;
    default:
      percentualAumento = 0.4;
  }

  var aumento = salarioAntigo * percentualAumento;
  var novoSalario = salarioAntigo + aumento;
  var diferenca = aumento;

  document.getElementById("salarioAntigo").innerHTML = salarioAntigo.toFixed(2);
  document.getElementById("novoSalario").innerHTML = novoSalario.toFixed(2);
  document.getElementById("diferenca").innerHTML = diferenca.toFixed(2);
}

btAumento.onclick = function(){
  calcularAumento();
}