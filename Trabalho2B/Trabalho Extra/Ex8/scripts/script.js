function calcularPesoIdeal() {
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    var pesoIdeal;

    if (sexo === "masculino") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "feminino") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        alert("Sexo inválido!");
        return;
    }

    document.getElementById("pesoIdeal").innerHTML = "Peso ideal: " + pesoIdeal.toFixed(2) + " kg";
}

btCalcularPesoIdeal.onclick = function(){
    calcularPesoIdeal();
}