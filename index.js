function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
   
    let textoCifrado = texto
        .replace(/a/gi, "wr")
        .replace(/e/gi, "kn")
        .replace(/i/gi, "ds")
        .replace(/o/gi, "tg")
        .replace(/u/gi, "zx");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
    } else {
        tituloMensaje.textContent = "Ningun Mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes Ingresar algun texto!")
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    
    let textoCifrado = texto
        .replace(/wr/gi, "a")
        .replace(/kn/gi, "e")
        .replace(/ds/gi, "i")
        .replace(/tg/gi, "o")
        .replace(/zx/gi, "u");
        
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
    } else {
        tituloMensaje.textContent = "Ningun Mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes Ingresar algun texto!")        
    }
}