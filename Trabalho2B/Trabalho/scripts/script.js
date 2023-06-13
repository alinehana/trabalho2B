
function Calcular1(){
    let v1r1 = parseInt(document.getElementById("baseTerreno").value);
    let v1r2 = parseInt(document.getElementById("alturaTerreno").value);

    resultado1.textContent = "A área do terreno é equivalente a " + v1r1 * v1r2 + " metros.";
}

btTerreno.onclick = function(){
    Calcular1();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular2(){
    let v1r1 = parseInt(document.getElementById("quantiaCavalos").value);

    resultado2.textContent = "Serão necessários " +  v1r1 * 4 + " ferraduras."
}

btCavalos.onclick = function(){
    Calcular2();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular3(){
    let v1r1 = parseInt(document.getElementById("quantiaPaes").value);
    let v1r2 = parseInt(document.getElementById("quantiaBroas").value);

    resultado3.textContent = "Seus " + v1r1 + " pães sairão por " + (v1r1 * 0.12) + " reais, e suas "
    + v1r2 + " broas sairão por " + (v1r2 * 1.50) + " reais, totalizando " + (v1r1 * 0.12 + v1r2 * 1.50) + "."; 

    resultadoPoupanca.textContent = "O valor que deverá ser guardado na poupança é de " + ((v1r1 * 0.12 + v1r2 * 1.50) * 0.10);
}

btPadaria.onclick = function(){
    Calcular3();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular4() {
    let v1r1 = (nome.value);
    let v1r2 = parseInt(document.getElementById("idade").value);

    resultado4.textContent = (v1r1) + ", você já viveu " + (v1r2 * 365) + " dias.";
}

btDiasdeVida.onclick = function(){
    Calcular4();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular5() {
    let v1r1 = parseInt(document.getElementById("gasolina").value);

    resultado5.textContent = "Serão adicionados " + (v1r1 / 5) + " litros de gasolina em seu veículo.";
}

btGasolina.onclick = function(){
    Calcular5();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular6() {
    let v1r1 = parseInt(document.getElementById("valorPrato").value);

    resultado6.textContent = "O valor do prato sairá por " + (v1r1 * 12) + " reais.";
}

btPrato.onclick = function(){
    Calcular6();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular7() {
    let v1r1 = parseInt(document.getElementById("dia").value);
    let v1r2 = parseInt(document.getElementById("mes").value);

    resultado7.textContent = "Dias passados desde o início do ano: " + ((v1r2 - 1) * 30 + v1r1);
}

btData.onclick = function(){
    Calcular7();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular8() {
    let v1r1 = parseInt(document.getElementById("tamanhoP").value);
    let v1r2 = parseInt(document.getElementById("tamanhoM").value);
    let v1r3 = parseInt(document.getElementById("tamanhoG").value);

    resultado8.textContent = "O valor arrecadado foi de " + (v1r1 * 10 + v1r2 * 12 + v1r3 * 15) + " reais";
}

btCamisas.onclick = function() {
    Calcular8();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular9() {
    let v1r1 = parseInt(document.getElementById("pontoX1").value);
    let v1r2 = parseInt(document.getElementById("pontoY1").value);
    let v1r3 = parseInt(document.getElementById("pontoX2").value);
    let v1r4 = parseInt(document.getElementById("pontoY2").value);

    resultado9.textContent = "A diferença entre os pontos cartesianos é de " + (v1r1 - v1r3) + "," + (v1r2 - v1r4);
}

btCartesiano.onclick = function() {
    Calcular9();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular10() {
    let totalDias = parseInt(document.getElementById("totalDias").value);
    let v1r1 = Math.floor(totalDias / 360);
    let v1r2 = Math.floor((totalDias % 360) / 30);
    var v1r3 = totalDias % 30;

    resultado10.textContent = "Tempo de dias sem acidentes: " + v1r1 + " anos, " + v1r2 + " meses e " + v1r3 + " dias.";
}

btdiasSemAcidentes.onclick = function(){
    Calcular10();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular11() {
    let v1r1 = parseInt(document.getElementById("salario").value);

    resultado11.textContent = "O salário inicial é de " + v1r1 + ", com o aumento ficará " + (v1r1 + (v1r1 * 0.15)) +
    " e o valor final dele, com o desconto dos impostos, será de " + (v1r1 + ((v1r1 * 0.15) / 0.8)) + " reais.";
}

btSalario.onclick = function(){
    Calcular11();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular12() {
    let numInteiro = parseInt(document.getElementById("numInteiro").value);
    let v1r1 = Math.floor(numInteiro / 100);
    let v1r2 = Math.floor((numInteiro % 100) / 10);
    let v1r3 = numInteiro % 10;

    resultado12.textContent = "CENTENA = " + v1r1 + " DEZENA = " + v1r2 + " UNIDADE = " + v1r3;
}

btNumero.onclick = function(){
    Calcular12();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular13() {
    let v1r1 = parseInt(document.getElementById("raioPizza").value);

    resultado13.textContent = "A área da pizza é de " + (3.14 * (v1r1 * v1r1));
}

btPizza.onclick = function(){
    Calcular13();
}

// ------------------------------------------------------------------------------------------------ Fim

function Calcular14() {
    let valorTotal =  parseInt(document.getElementById("valorTotal").value);;
    let valorDivisao = Math.floor(valorTotal / 3); 
    let resto = valorTotal % 3;
    
    let carlos = valorDivisao;
    let andre = valorDivisao;
    let felipe = valorDivisao + resto;

    document.getElementById("carlos").textContent = "Carlos: R$" + carlos.toFixed(2);
    document.getElementById("andre").textContent = "André: R$" + andre.toFixed(2);
    document.getElementById("felipe").textContent = "Felipe: R$" + felipe.toFixed(2);
}

btConta.onclick = function(){
    Calcular14();
}