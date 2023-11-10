function primo(num) {
    var p = 0;
    for (var i = 1; i <= num; i = i + 1) {

        if (num % i == 0) {
            p = p + 1
        }
    }
 
    if (p > 2)
        console.log("El número "+num+" no es primo estúpida.");

    else
        console.log("El numero: "+num+" : Es primo");

}

primo(8);
