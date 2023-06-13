function calcularImposto() {
    var anoFabricacao = parseInt(document.getElementById("ano").value);
    var valorTabela = parseFloat(document.getElementById("valor").value);

    var taxa;

    if (anoFabricacao < 1990) {
        taxa = 0.01; // 1% para carros fabricados antes de 1990
    } else {
        taxa = 0.015; // 1.5% para carros fabricados a partir de 1990
    }

    var imposto = valorTabela * taxa;

    document.getElementById("resultado").innerHTML = "Imposto a ser pago: R$ " + imposto.toFixed(2);
}

btImposto.onclick = function(){
    calcularImposto();
}