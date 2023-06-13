function calcularPagamento() {
    var precoEtiqueta = parseFloat(document.getElementById("precoEtiqueta").value);
    var condicaoPagamento = document.getElementById("condicaoPagamento").value;
    var valorPago;

    switch (condicaoPagamento) {
        case "a":
            valorPago = precoEtiqueta * 0.9; // 10% de desconto
            break;
        case "b":
            valorPago = precoEtiqueta * 0.85; // 15% de desconto
            break;
        case "c":
            valorPago = precoEtiqueta; // preço normal, sem juros
            break;
        case "d":
            valorPago = precoEtiqueta * 1.1; // preço normal + 10% de juros
            break;
        default:
            alert("Condição de pagamento inválida!");
            return;
    }

    document.getElementById("valorPago").innerHTML = "Valor a ser pago: R$" + valorPago.toFixed(2);
}

btCalcularPagamento.onclick = function(){
    calcularPagamento();
}