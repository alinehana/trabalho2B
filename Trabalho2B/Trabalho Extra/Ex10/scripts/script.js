function calcularSalario() {
    var nivel = document.getElementById("nivel").value;
    var horasAula = document.getElementById("horasAula").value;
    var valorHoraAula;

    if (nivel === "1") {
      valorHoraAula = 12;
    } else if (nivel === "2") {
      valorHoraAula = 17;
    } else if (nivel === "3") {
      valorHoraAula = 25;
    } else {
      alert("Nível inválido");
      return;
    }

    var salario = valorHoraAula * horasAula * 4.5;
    document.getElementById("salario").innerHTML = "Salário: R$" + salario.toFixed(2);
  }

btCalcularSalario.onclick = function(){
  calcularSalario();
}