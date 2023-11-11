


function primo() {
    let num = document.getElementById("input_num").value;

    if (!isNaN(num) && num !="") {

        let seraPrimo = esPrimo(num)
        mostrarPrimo(seraPrimo)
    }
    else {
        alert("Debe ingresar un número, no se permiten letras ni caracteres, por favor vuelva a intentarlo.");
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
        document.querySelector(".escondidoverde").style.visibility = "visible";
        document.querySelector(".escondidorojo").style.visibility = "hidden";
    } else {
        document.querySelector(".escondidoverde").style.visibility = "hidden";
        document.querySelector(".escondidorojo").style.visibility = "visible";
    }
}
