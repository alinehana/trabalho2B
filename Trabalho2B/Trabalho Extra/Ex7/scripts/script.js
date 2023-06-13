function calcularValor() {
    var codigo = document.getElementById("codigo").value;
    var quantidade = document.getElementById("quantidade").value;
    var preco;

    switch (codigo) {
        case "1":
            preco = 11.00;
            break;
        case "2":
            preco = 8.50;
            break;
        case "3":
            preco = 8.00;
            break;
        case "4":
            preco = 9.00;
            break;
        case "5":
            preco = 10.00;
            break;
        case "6":
            preco = 4.50;
            break;
        default:
            alert("Código inválido!");
            return;
    }
    var valorTotal = preco * quantidade;
    document.getElementById("valorTotal").innerHTML = "Valor total a ser pago: R$" + valorTotal.toFixed(2);
}

btCalcularValor.onclick = function(){
    calcularValor();
}