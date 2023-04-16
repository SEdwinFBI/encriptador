function crypto() {

    let textoM = document.getElementById("texto").value;
    let texto_introducido = textoM.toLowerCase();
    let resultado = "";
    for (let i = 0; i < texto_introducido.length; i++) {
        const caracter = texto_introducido.charAt(i);
        if (caracter === "e") {
            resultado += "enter";
        } else if (caracter === "i") {
            resultado += "imes";
        } else if (caracter === "a") {
            resultado += "ai";
        } else if (caracter === "o") {
            resultado += "ober";
        } else if (caracter === "u") {
            resultado += "ufat";
        } else {
            resultado += caracter;
        }
    }
    document.getElementById("resultadoCrypto").value = resultado;
}

function descrypto() {
    let textoM = document.getElementById("texto").value;
    let texto_introducido = textoM.toLowerCase();
    const resultado = texto_introducido.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById("resultadoCrypto").value = resultado;
}

function copiarYEliminar() {
    const input = document.getElementById("resultadoCrypto");

    // Copiar el contenido del input al portapapeles
    navigator.clipboard.writeText(input.value);

    // Eliminar el contenido del input
    input.value = "";
}