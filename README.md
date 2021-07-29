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

54. O que são estruturas de controle?

55. Estrutura de controle: if

56. Estrutura de controle: else

57. Estrutura de controle: else if

58. O que são estruturas de repetição?

59. Estrutura de repetição: while

60. Estrutura de repetição: do while

61. Estrutura de repetição: for

62. O que é identação?

63. Utilizando break

64. Utilizando continue

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

