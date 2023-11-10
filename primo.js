

function primo() {
    var consultaNumero = document.getElementById("input_num").value;
    let num = consultaNumero
    console.log(consultaNumero);
    if (num == Number) {
        var p = 0;
        for (var i = 1; i <= num; i++) {
            if (num % i == 0) {
                p = p + 1
            }
        }
        if (p > 2){
            document.querySelector(".escondidorojo").style.visibility="visible";
            console.log("El número "+num+" no es primo estúpida.");
        }
        else
            document.querySelector(".escondidoverde").style.visibility="visible";
            console.log("El numero: "+num+" : Es primo");
        }
    else {
        alert("No se permiten letras ni caracteres, por favor vuelva a intentarlo.")
    }    
}

