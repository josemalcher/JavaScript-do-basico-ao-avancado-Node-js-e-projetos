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

29. Conclusão da seção

Teste 1: Questionário sobre tipos de dados

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 03: Exercícios sobre tipos de dados</a>



[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Seção 04: Estruturas de Programação</a>



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

