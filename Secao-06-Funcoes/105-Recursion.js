function recursao(n) {

    if(n - 1 < 2) {
        console.log("Recursão parou");
    } else if(n % 2 != 0) {
        console.log("Número ímpar " + n);
        recursao(n - 1)
    } else {
        console.log("Número par " + n);
        recursao(n - 2);
    }

}

recursao(39);
recursao(10);
recursao(55);
/*
Número ímpar 39
Número par 38
Número par 36
Número par 34
Número par 32
Número par 30
Número par 28
Número par 26
Número par 24
Número par 22
Número par 20
Número par 18
Número par 16
Número par 14
Número par 12
Número par 10
Número par 8
Número par 6
Número par 4
Recursão parou
Número par 10
Número par 8
Número par 6
Número par 4
Recursão parou
*/
