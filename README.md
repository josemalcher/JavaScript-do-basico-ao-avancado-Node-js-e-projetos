# JavaScript do básico ao avançado (c/ Node.js e projetos)

https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/

Aprenda tudo sobre JavaScript(ES6+), lógica de prog., orientação a objetos, crie projetos para web com Node.js e Express

## <a name="indice">Índice</a>

1. [Seção 01: Introdução](#parte1)     
2. [Seção 02: Tipos de dado e operadores lógicos](#parte2)     
3. [Seção 03: Exercícios sobre tipos de dados](#parte3)     
4. [Seção 04: Estruturas de Programação](#parte4)     
5. [Seção 05: Exercícios sobre estrutura de programação](#parte5)     
6. [Seção 06: Funções](#parte6)     
7. [Seção 07: Exercícios sobre funções](#parte7)     
8. [Seção 08: Arrays e Objetos](#parte8)     
9. [Seção 09: Exercícios sobre arrays e objetos](#parte9)     
10. [Seção 10: Conceitos de orientação a objetos](#parte10)     
11. [Seção 11: Exercícios sobre orientação a objetos](#parte11)     
12. [Seção 12: Debugs e erros no JavaScript](#parte12)     
13. [Seção 13: Expressões Regulares](#parte13)     
14. [Seção 14: Exercícios sobre Expressões Regulares](#parte14)     
15. [Seção 15: Programação Assíncrona com JavaScript](#parte15)     
16. [Seção 16: JavaScript e o navegador](#parte16)     
17. [Seção 17: Eventos com JavaScript](#parte17)     
18. [Seção 18: Projeto 1: Jogo da Velha (HTML, CSS, DOM e eventos)](#parte18)     
19. [Seção 19: Aprendendo Node.js](#parte19)     
20. [Seção 20: Projeto com Node, Express, Sequelize: Job Finder](#parte20)     
21. [Seção 21: Projeto 3: Quizz com Vanilla JS (Manipulação e eventos de DOM)](#parte21)     
---


## <a name="parte1">1 - Seção 01: Introdução</a>

1. Apresentação do curso

2. Introdução

3. O que é JavaScript?

4. Onde o JavaScript é utilizado?

5. Fazendo download do VSCode (editor de texto utilizado no curso)

6. Como executar JS no navegador por arquivo

7. Como executar JS diretamente no navegador

8. Maneira alterantiva de executar JS

9. Como pesquisar problemas/dúvidas de código no Stackoverflow

10. Como pesquisar problemas/dúvidas de código no Google

11. Minha sugestão para você acompanhar o curso

12. Slides do Curso

13. Conclusão da seção

14. Arquivos do curso

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Seção 02: Tipos de dado e operadores lógicos</a>

15. Introdução da seção

16. O que são tipos de dados?

17. Tipo de dado: number

- [Secao-02-Tipos-de-dado-e-operadores-logicos/17-Tipo-de-dado-number.js](Secao-02-Tipos-de-dado-e-operadores-logicos/17-Tipo-de-dado-number.js)

```javascript
console.log(typeof 5)
console.log(typeof 12.6)
console.log(typeof -12)
/*
number
number
number
*/

```

18. Operações aritméticas com number

- [Secao-02-Tipos-de-dado-e-operadores-logicos/18-Operacoes-aritmeticas-com-number.js](Secao-02-Tipos-de-dado-e-operadores-logicos/18-Operacoes-aritmeticas-com-number.js)

```javascript
console.log((2 + 3));
console.log((5 - 12));
console.log((4 * 4));
console.log((5 / 3));
console.log((20 % 2));
console.log((21 % 2));
console.log(typeof (2 + 3));
console.log(typeof (5 - 12));
console.log(typeof (4 * 4));
console.log(typeof (5 / 3));
console.log(typeof (20 % 2));
console.log(typeof (21 % 2));
/*
5
-7
16
1.6666666666666667
0
1
number
number
number
number
number
number
*/

```

19. Conhecendo os special numbers

- [Secao-02-Tipos-de-dado-e-operadores-logicos/19-Conhecendo-os-special-numbers.js](Secao-02-Tipos-de-dado-e-operadores-logicos/19-Conhecendo-os-special-numbers.js)

```javascript
console.log(Infinity);
console.log(-Infinity);
console.log(NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
/*
Infinity
-Infinity
NaN
number
number
number
*/
```

20. Tipo de dado: string

- [Secao-02-Tipos-de-dado-e-operadores-logicos/20-Tipo-de-dado-string.js](Secao-02-Tipos-de-dado-e-operadores-logicos/20-Tipo-de-dado-string.js)

```javascript
console.log("Oi, meu nome é Matheus");
console.log('Eu queria comprar um carro.');
console.log(`Teste`);
console.log("Infinity");
console.log(Infinity);
/*
Oi, meu nome é Matheus
Eu queria comprar um carro.
    Teste
Infinity
Infinity
*/

console.log(typeof "Oi, meu nome é Matheus");
console.log(typeof 'Eu queria comprar um carro.');
console.log(typeof `Teste`);
console.log(typeof "Infinity");
console.log(typeof Infinity);
/*
string
string
string
string
number
*/
```

21. Mais sobre strings

- [Secao-02-Tipos-de-dado-e-operadores-logicos/21-Mais-sobre-strings.js](Secao-02-Tipos-de-dado-e-operadores-logicos/21-Mais-sobre-strings.js)

```javascript
console.log("Primeira linha \n Segunda linha");
console.log("O meu nome é 'Matheus'");
console.log('O nome dela é "Roberta"');
console.log(`A multiplicação de 5 por 3 é ${5*3}`);
console.log("O " + "meu" + " nome " + "é" + " Matheus.");
/*
Primeira linha
 Segunda linha
O meu nome é 'Matheus'
O nome dela é "Roberta"
A multiplicação de 5 por 3 é 15
O meu nome é Matheus.
*/
```

22. Tipo de dado: boolean

- [Secao-02-Tipos-de-dado-e-operadores-logicos/22-Tipo-de-dado-boolean.js](Secao-02-Tipos-de-dado-e-operadores-logicos/22-Tipo-de-dado-boolean.js)

```javascript
console.log(typeof true);
console.log(typeof false);
console.log(typeof (10 > 2));
console.log(typeof (5 > 200));
/*
boolean
boolean
boolean
boolean
* */
console.log(true);
console.log(false);
console.log((10 > 2));
console.log((5 > 200));
/*
true
false
true
false
*/

```

23. Comparações com booleans

- [Secao-02-Tipos-de-dado-e-operadores-logicos/23-Comparacoes-com-booleans.js](Secao-02-Tipos-de-dado-e-operadores-logicos/23-Comparacoes-com-booleans.js)

```javascript
console.log(1 > 2);
console.log(5 < 10);
console.log(3 >= 3);
console.log(5 <= 4);
/*
false
true
true
false
*/
console.log(5 == 4);
console.log('Matheus' != 'Matheus');
console.log(3 === '3');
console.log(4 === 4);
/*
false
false
false
true
*/

```

24. Operadores lógicos: teoria

![img/operadores-logicos.png](img/operadores-logicos.png)

25. Operadores lógicos: prática

- [Secao-02-Tipos-de-dado-e-operadores-logicos/25-Operadores-logicos-pratica.js](Secao-02-Tipos-de-dado-e-operadores-logicos/25-Operadores-logicos-pratica.js)

```javascript
console.log(5 > 3 && 3 == 2); // false
console.log(5 > 3 || 3 == 1); // true

console.log(3 == 3 && "Matheus" == "Matheus"); // true
console.log("Felipe" == "João" || false); // false

console.log(!(!(true && true))); // true

console.log(true && true); // true

console.log(false || false); // false

```

26. Operador ternário

- [Secao-02-Tipos-de-dado-e-operadores-logicos/26-Operador-ternario.js](Secao-02-Tipos-de-dado-e-operadores-logicos/26-Operador-ternario.js)

```javascript
console.log(5 > 2 ? 'É sim' : 'É não'); // É sim

console.log(false ? 5 : 4); // 4

console.log("Matheus" == "Matheus" ? "Olá, Matheus!" : "Não é o Matheus!"); // Olá, Matheus!

```

27. Conhecendo os empty values

- [Secao-02-Tipos-de-dado-e-operadores-logicos/27-Conhecendo-os-empty-values.js](Secao-02-Tipos-de-dado-e-operadores-logicos/27-Conhecendo-os-empty-values.js)

```javascript
console.log(null); // null
console.log(undefined); // undefined

```

28. Conversão automática de valor

- [Secao-02-Tipos-de-dado-e-operadores-logicos/28-Conversao-automatica-de-valor.js](Secao-02-Tipos-de-dado-e-operadores-logicos/28-Conversao-automatica-de-valor.js)

```javascript
console.log(("123" + 4)); // 1234
console.log(("30" - 20)); // 10
console.log(("ausd" * 3));// NaN

console.log(typeof ("123" + 4)); // string
console.log(typeof ("30" - 20)); // number
console.log(typeof ("ausd" * 3));// number

```

29. Conclusão da seção

Teste 1: Questionário sobre tipos de dados

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 03: Exercícios sobre tipos de dados</a>

30. Introdução da seção

31. Exercício 01: explicação

32. Exercício 01: solução

- [Secao-03-Exercicios-sobre-tipos-de-dados/32-Exercicio-01.js](Secao-03-Exercicios-sobre-tipos-de-dados/32-Exercicio-01.js)

```javascript
console.log("Hello World!");
console.log('Meu nome é José');
console.log(`Este aqui é o template literals`);
/*
Hello World!
Meu nome é José
Este aqui é o template literals
*/

```

33. Exercício 02: explicação

34. Exercício 02: solução

- [Secao-03-Exercicios-sobre-tipos-de-dados/34-Exercicio-02.js](Secao-03-Exercicios-sobre-tipos-de-dados/34-Exercicio-02.js)

```javascript
console.log(235); // 235
console.log(13.5); // 13.5
console.log((3 * (12 + 4)) / 8); // 6

```

35. Exercício 03: explicação

36. Exercício 03: solução

- [Secao-03-Exercicios-sobre-tipos-de-dados/36-Exercicio-03.js](Secao-03-Exercicios-sobre-tipos-de-dados/36-Exercicio-03.js)

```javascript
console.log(12 > 5);
console.log(4 <= 4);
console.log("Matheus" != "João");
/*
true
true
true
*/
```


37. Exercício 04: explicação

38. Exercício 04: solução

- [Secao-03-Exercicios-sobre-tipos-de-dados/38-Exercicio-04.js](Secao-03-Exercicios-sobre-tipos-de-dados/38-Exercicio-04.js)

```javascript
console.log(3 == 3 && 4 > 1); // true
console.log(4 <= 2 || "Matheus" == "Pedro"); // false
console.log(!(2 === 2)); // false

```


39. Exercício 05: explicação

40. Exercício 05: solução

- [Secao-03-Exercicios-sobre-tipos-de-dados/40-Exercicio-05.js](Secao-03-Exercicios-sobre-tipos-de-dados/40-Exercicio-05.js)

```javascript
console.log(415 * "Não é numero");
// NaN

```

41. Conclusão da seção

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Seção 04: Estruturas de Programação</a>

42. Introdução da seção

43. O que é um software?

44. O que são variáveis?

- [Secao-04-Estruturas-de-Programacao/44-O-que-sao-variaveis.js](Secao-04-Estruturas-de-Programacao/44-O-que-sao-variaveis.js)

```javascript
let nome = "Malcher jr";

console.log(nome); // Malcher jr

console.log(`O meu nome é ${nome}`); // O meu nome é Malcher jr

let laranjas = 5;

console.log(laranjas * laranjas); // 25

nome = "José";

console.log(nome); // José

laranja = 83284;

console.log(laranja); // 83284

laranja = "Laranja";

console.log(laranja); // Laranja

let um = 1, dois = 2, tres = 3;

console.log(um + dois + tres); // 6

```

45. Outras forma de declarar variáveis

- [Secao-04-Estruturas-de-Programacao/45-Outras-forma-de-declarar-variaveis.js](Secao-04-Estruturas-de-Programacao/45-Outras-forma-de-declarar-variaveis.js)

```javascript
var nome = "Malcher jr";
const ip = "127.0.0.1";

console.log(nome); // Malcher jr
console.log(ip); // 127.0.0.1

ip = 'asdihus';
// TypeError: Assignment to constant variable.
```

46. Convenção no nome de variáveis

- [Secao-04-Estruturas-de-Programacao/46-Convencao-no-nome-de-variaveis.js](Secao-04-Estruturas-de-Programacao/46-Convencao-no-nome-de-variaveis.js)

```javascript
// let 3nome = 'teste'; // SyntaxError: Invalid or unexpected token

let nome3 = 'teste';
let $nome = 'teste2';
let _nome = 'teste3';

// let @nome = 'teste'; // SyntaxError: Invalid or unexpected token
// let !nome = 'teste'; // SyntaxError: Unexpected token '!'

let Nome = 'teste';
let seuNome = 'teste';
let seu_nome = 'teste';

```

47. Palavras reservadas da linguagem JavaScript

- [Secao-04-Estruturas-de-Programacao/47-Palavras-reservadas-da-linguagem-JavaScript.js](Secao-04-Estruturas-de-Programacao/47-Palavras-reservadas-da-linguagem-JavaScript.js)

```javascript
//let if = 'Teste'; // SyntaxError: Unexpected token 'if'
//let function = 'teste'; // SyntaxError: Unexpected token 'function'

let functionTest = 'teste';
let function1 = 'teste2';

console.log(functionTest);// teste
console.log(function1);// teste2

```

48. O ambiente do JavaScript

49. As estruturas das funções

50. Função built in: prompt

- [Secao-04-Estruturas-de-Programacao/50-Funcao-built-in-prompt.js](Secao-04-Estruturas-de-Programacao/50-Funcao-built-in-prompt.js)

```javascript
let idade = prompt("Qual a sua idade?");

console.log(idade);
// 20

let nome = prompt("Qual o seu nome?");

console.log(`O seu nome é ${nome}`);
// O seu nome é jose

```

51. Função built in: alert

- [Secao-04-Estruturas-de-Programacao/51-Funcao-built-in-alert.js](Secao-04-Estruturas-de-Programacao/51-Funcao-built-in-alert.js)

```javascript
alert("Esta é a mensagem!");
alert("Esta é a mensagem 2!");

```

52. Função built in: Math

- [Secao-04-Estruturas-de-Programacao/52-Funcao-built-in-Math.js](Secao-04-Estruturas-de-Programacao/52-Funcao-built-in-Math.js)

```javascript
let maior = Math.max(6,12,28,55,8);
console.log(maior); // 55

let menor = Math.min(6,12,28,55,8);
console.log(menor); // 6

let arredondar = Math.round(5.2934723);
console.log(arredondar); // 5

let arredondarParaCima = Math.ceil(5.2934723);
console.log(arredondarParaCima); 6

```

53. Função built in: console.log

- [Secao-04-Estruturas-de-Programacao/53-Funcao-built-in-console-log.js](Secao-04-Estruturas-de-Programacao/53-Funcao-built-in-console-log.js)

```javascript
let idade = 36;
let nome = "Malcher jr";

console.log(idade); // 36   
console.log(nome); // Malcher jr

console.log(`O meu nome é ${nome}, e tenho ${idade} anos`);
// O meu nome é Malcher jr, e tenho 28 anos
```

54. O que são estruturas de controle?

55. Estrutura de controle: if

- [Secao-04-Estruturas-de-Programacao/55-Estrutura-de-controle-if.js](Secao-04-Estruturas-de-Programacao/55-Estrutura-de-controle-if.js)

```javascript
let idade = 19;

if(idade == 19) {
    console.log("A idade é = 19"); // A idade é = 19
}

if(idade > 25) {
    console.log("A idade é maior que 25");
}

let nome = "Matheus";

if(nome == "Matheus" && idade > 10) {
    console.log("Liberado!"); // Liberado!
}

let passaporte = true;

if((nome == "Matheus" && idade > 30) || passaporte == true) {
    console.log("Liberado 2!"); // Liberado 2!
}

```

56. Estrutura de controle: else

- [Secao-04-Estruturas-de-Programacao/56-Estrutura-de-controle-else.js](Secao-04-Estruturas-de-Programacao/56-Estrutura-de-controle-else.js)

```javascript
let velocidade = 70;

if(velocidade <= 80) {
    console.log("Não foi multado");
} else {
    console.log("Foi multado!");
}
// Não foi multado

```

57. Estrutura de controle: else if

- [Secao-04-Estruturas-de-Programacao/57-Estrutura-de-controle-else-if.js](Secao-04-Estruturas-de-Programacao/57-Estrutura-de-controle-else-if.js)

```javascript
let nome = "Malcher";
let idade = 36;

if(nome != undefined && nome == "Joaquim") {
    console.log("Nome está definido");
} else if(nome == "Malcher" && nome.length > 5 && idade == 36) {
    console.log("O nome é Malcher");
} else {
    console.log("Não é Malcher!");
}

if(1 > 2) {
    console.log("Teste");
} else if(1 == 1) {
    console.log("Testando");
}

/*
O nome é Malcher
Testando
*/

```

58. O que são estruturas de repetição?

59. Estrutura de repetição: while

- [Secao-04-Estruturas-de-Programacao/59-Estrutura-de-repeticao-while.js](Secao-04-Estruturas-de-Programacao/59-Estrutura-de-repeticao-while.js)

```javascript
let x = 10;

while(x > 0) {
    console.log("O x é " + x);
    x = x - 1;
}

let y = 0;

while(y <= 10) {
    console.log(y);
    y = y + 1;
}

let z = 10;

while(z > 0) {
    console.log(z);
    z--;
}
```

60. Estrutura de repetição: do while

- [Secao-04-Estruturas-de-Programacao/60-Estrutura-de-repeticao-do-while.js](Secao-04-Estruturas-de-Programacao/60-Estrutura-de-repeticao-do-while.js)

```javascript
let x = 100;

do {
    console.log(x/2);
    x = x - 5;
} while(x >= 0);


// while() {

// }
```

61. Estrutura de repetição: for

- [Secao-04-Estruturas-de-Programacao/61-Estrutura-de-repeticao-for.js](Secao-04-Estruturas-de-Programacao/61-Estrutura-de-repeticao-for.js)

```javascript
for(let i = 0; i < 100; i = i + 3) {

    console.log(`A soma de i com 2 é: ${i + 2}`);

}
/*
A soma de i com 2 é: 2
A soma de i com 2 é: 5
A soma de i com 2 é: 8
A soma de i com 2 é: 11
(...)
 */
```

62. O que é identação?

- [Secao-04-Estruturas-de-Programacao/62-O-que-e-identacao.js](Secao-04-Estruturas-de-Programacao/62-O-que-e-identacao.js)

```javascript
let x = 0;
let y = 0;

if (x == 0 && y == 0) {

    let z = 5;

    if (z > 2) {

        console.log(z);

        for (i = 0; i < 5; i = i + 1) {

            console.log(i);

            if (i == 2) {
                console.log("i é = 2");
            }

        }

    }

}

```

63. Utilizando break

- [Secao-04-Estruturas-de-Programacao/63-Utilizando-break.js](Secao-04-Estruturas-de-Programacao/63-Utilizando-break.js)

```javascript
let nome = "Matheus";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = "João";
    }

    if(i == 5 && nome == "João") {
        console.log("O nome é João, pode parar");
        break;
    }

    console.log(i);

}
/*
0
1
2
3
4
O nome é João, pode parar
*/

```

64. Utilizando continue

- [Secao-04-Estruturas-de-Programacao/64-Utilizando-continue.js](Secao-04-Estruturas-de-Programacao/64-Utilizando-continue.js)

```javascript
for(let i = 10; i > 0; i = i - 1) {

    if(i % 2 == 0) {
        console.log("Caiu no continue");
        continue;
    }

    console.log(i);

}
/*
Caiu no continue
9
Caiu no continue
7
Caiu no continue
5
Caiu no continue
3
Caiu no continue
1
*/

```

65. Incrementação resumida

66. Estrutura de controle: switch

67. Um pouco mais sobre declaração de variáveis

68. Como escrever comentários

69. Conclusão da seção

Teste 2: Questionário sobre lógica de programação

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Seção 05: Exercícios sobre estrutura de programação</a>



[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Seção 06: Funções</a>



[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Seção 07: Exercícios sobre funções</a>



[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Seção 08: Arrays e Objetos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Seção 09: Exercícios sobre arrays e objetos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Seção 10: Conceitos de orientação a objetos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Seção 11: Exercícios sobre orientação a objetos</a>



[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - Seção 12: Debugs e erros no JavaScript</a>



[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - Seção 13: Expressões Regulares</a>



[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - Seção 14: Exercícios sobre Expressões Regulares</a>



[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - Seção 15: Programação Assíncrona com JavaScript</a>



[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Seção 16: JavaScript e o navegador</a>



[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Seção 17: Eventos com JavaScript</a>



[Voltar ao Índice](#indice)

---


## <a name="parte18">18 - Seção 18: Projeto 1: Jogo da Velha (HTML, CSS, DOM e eventos)</a>



[Voltar ao Índice](#indice)

---


## <a name="parte19">19 - Seção 19: Aprendendo Node.js</a>



[Voltar ao Índice](#indice)

---


## <a name="parte20">20 - Seção 20: Projeto com Node, Express, Sequelize: Job Finder</a>



[Voltar ao Índice](#indice)

---


## <a name="parte21">21 - Seção 21: Projeto 3: Quizz com Vanilla JS (Manipulação e eventos de DOM)</a>



[Voltar ao Índice](#indice)

---

