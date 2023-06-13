function verificarTriangulo() {
  var x = parseFloat(document.getElementById("valorX").value);
  var y = parseFloat(document.getElementById("valorY").value);
  var z = parseFloat(document.getElementById("valorZ").value);
    
  if (x + y > z && x + z > y && y + z > x) {
    if (x === y && y === z) {
      document.getElementById("resultado").innerHTML = "Triângulo Equilátero";
    } else if (x === y || x === z || y === z) {
      document.getElementById("resultado").innerHTML = "Triângulo Isósceles";
    } else {
      document.getElementById("resultado").innerHTML = "Triângulo Escaleno";
    }
  } else {
    document.getElementById("resultado").innerHTML = "Os valores não formam um triângulo";
  }
}

btTriangulo.onclick = function(){
  verificarTriangulo();
}