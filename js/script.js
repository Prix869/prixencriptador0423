function encriptar() {
    var texto = document.getElementById("textoInicial").value.toLowerCase();
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    document.getElementById("resultadoFinal").value = texto;
}

function desencriptar() {
    var texto = document.getElementById("resultadoFinal").value.toLowerCase();
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    document.getElementById("textoInicial").value = texto;
}

function copiar() {
    var resultado = document.getElementById("resultadoFinal");
    resultado.select();
    document.execCommand("copy");
    var copiado = document.getElementById("copiado");
    copiado.classList.add("mostrado");
    setTimeout(function () {
        copiado.classList.remove("mostrado");
    }, 3000);
}

function borrar() {
    document.getElementById("textoInicial").value = "";
    document.getElementById("resultadoFinal").value = "";
}