let txtRespuesta  = document.getElementById("respuesta")


function primo() {
    let num = document.getElementById("input_num").value;
   

    if (!isNaN(num)) {
        let seraPrimo = esPrimo(num)
        mostrarPrimo(seraPrimo)
    }
    else {
        alert("No se permiten letras ni caracteres, por favor vuelva a intentarlo.");
    }
}

function esPrimo(num) {
    p = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            p++
        }
    }

    if (p == 2)
        return true
    else
        return false

}


function mostrarPrimo(siEs) {
    if (siEs) {
        txtRespuesta.style.visibility = "visible"
        txtRespuesta.innerText = "numero es primo"
        txtRespuesta.style.color = "green"
    } else {
        txtRespuesta.style.visibility = "visible"
        txtRespuesta.innerText = "numero no es primo"
        txtRespuesta.style.color = "red" 
    }
}
