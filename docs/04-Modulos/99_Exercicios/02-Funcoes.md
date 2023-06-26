
# Funções
1. Implemente a função `maior5`, que recebe como entrada 5 números, retornando o maior dos valores.

2. Implemente a função `menor5`, que recebe como entrada 5 números, retornando o menor dos valores.

3. Implemente a função `ehPositivo`, que retorna verdadeiro caso o valor passado por parâmetro seja maior que zero, e falso caso contrário.

4. Implemente a função `ehNegativo`, que retorna verdadeiro caso o valor passado por parâmetro seja menor que zero, e falso caso contrário.

5. Implemente a função `fatorial`, que calcula e retorna o fatorial de um número inteiro.


:::note Definição
**Fatorial**

O fatorial de um valor consiste no produto dele pelo seus antecessores maiores que 0. Para representar o fatorial de um número, é utilizado o número seguido do sinal de exclamação.  

Exemplo:  
$5! = 5\times4\times3\times2\times1 = 120$

Por conveniência, define-se que $0! = 1$.
:::


<details>
  <summary>Exemplos</summary>

- Chamada:
```c
fatorial(5)
```
- Retorno:
```
120
```
------------------------------
- Chamada:
```c
fatorial(0)
```
- Retorno:
```
1
```

</details>

7. Implemente uma função chamada `primo`, que retorna verdadeiro caso o valor passado por parâmetro seja um número primo.

:::note Definição
**Números primos**

Um número é dito ser primo quando este possui apenas dois divisores, sendo ele próprio e o número $1$.

Exemplos:  
- 5 é um número primo;
- 19 é um número primo;
- 33 não é um número primo.
:::

8. Desenvolva uma função que calcula o número de combinações simples $C$ de $n$ elementos tomados $p$ a $p$.

:::note Definição
**Combinação**

A combinação simples é um tipo de agrupamento de análise combinatória. Esta consiste em todas as variações possíveis de elementos de dado conjunto, desde que a ordem não seja importante.

Para calcular o número de combinações simples $C$ de $n$ elementos tomados $p$ a $p$ utilizamos a seguinte equação:

$$C^n_p = \frac{n!}{p!(n-p)!}$$

Exemplo:  
- Combinação de 10 elementos tomados de 4 a 4:  

$$C^{10}_4 = \frac{10!}{4!(10-4)!} = \frac{10\times9\times8\times7\times6!}{4\times3\times2\times1\times6!} = \frac{10\times9\times8\times7}{4\times3\times2\times1}=\frac{5040}{24}=210$$
:::

<details>
  <summary>Exemplos</summary>

- Chamada:
```c
combinacao(10,4)
```
- Retorno:
```
210
```
----------
- Chamada:
```c
combinacao(7,2)
```
- Retorno:
```
21
```
----------
```c
combinacao(4,3)
```
- Retorno:
```
4
```

</details>

9. Implemente uma função chamada perfeito, que retorna verdadeiro caso o valor passado por
parâmetro seja um número perfeito, e falso caso contrário. 

:::note Definição
**Números perfeitos**

Um número perfeito é aquele que é igual à soma de todos os seus divisores, exceto ele próprio.  

Exemplo:  

$6$ é um número perfeito, pois $6=1+2+3$.
:::

10. Implemente um procedimento chamado `perfeitos` que recebe dois números inteiros `ini` e `fim` como parâmetro, e exibe na tela todos os números perfeitos que estão no intervalo entre `[ini,fim]`.

<details>
  <summary>Exemplo</summary>

- Chamada
```c
perfeitos(2,10)
```
- Saída
```
6
```
</details>

11. Implemente um procedimento chamado `primos`, que apresenta todos os números primos em um intervalo especificado.

<details>
  <summary>Exemplos</summary>

- Chamada
```c
primos(2,11)
```
- Saída
```
2
3
5
7
11
```

</details>

12. Implemente uma função chamada `conversorTemperatura`, que recebe três parâmetros como entrada: 
- um valor de temperatura (real), 
- a escala da temperatura de entrada (caractere) e 
- a escala da temperatura de saída (caractere).  
Os possíveis valores para escala são C, F, K, R (maiúsculas ou minúsculas) que correspondem às escalas Celsius, Fahrenheit, Kelvin e Réaumur. A função deve retornar a temperatura informada na entrada para a temperatura na escala definida para saída.

<details>
  <summary>Exemplos</summary>

- Chamada:
```c
converterTemperatura(100.0, 'C', 'K')
```
- Retorno:
```
373.15
```
retorna 373.15, pois 100º Celsius equivale a 273.15 Kelvin.

----------
- Chamada:
```c
converterTemperatura(22.0, 'R', 'c')
```
- Retorno:
```
27.5
```
Retorna 27.5, pois 22º Réaumur equivale a 27.5º Celsius.

</details>

13. Faça uma função chamada `pot2` que retorna verdadeiro caso o parâmetro passado seja uma potência de 2.

14. Desenvolva uma função chamada `potN`, que possui dois parâmetros $x$ e $n$. A função deve retornar verdadeiro caso $x$ seja uma potência de $n$.

15. Implemente uma função chamada `distanciaCartesiana` que recebe dois pares de números, que correspondem a pontos em um plano cartesiano com coordenadas $x,y$. A função deve retornar a distância entre esses dois pontos. Não é necessário arredondar valores.

:::note Definição
**Distância cartesiana**

A distância $d$ entre os pontos $(x_0, y_0)$ a $(x_1,y_1)$ no plano cartesiano é calculada utilizando a seguinte equação:

$$
d = \sqrt{(x_1-x_0)^2 + (y_1-y_0)^2}
$$

:::

<details>
  <summary>Exemplos</summary>

- Chamada:  

```c
distanciaCartesiana(0,0,0,1)
```

- Retorno:

```
1.0
```

Retorna $1.0$, pois a distância do ponto $(0,0)$ a $(0,1)$ é $1$.

----------

- Chamada:

```c
distanciaCartesiana(5,3,7,0)
```

- Retorno:

```
3.605551275463989
```

Retorna $3.605551275463989$, pois esta é a distância do ponto $(5,3)$ ao ponto $(7,0)$.

----------

- Chamada:

```c
distanciaCartesiana(3,0,6,4)
```

- Retorno:
```
5.0
```
Retorna $5.0$, pois a distância do ponto $(3,0)$ a $(6,4)$ é $5$.

</details>

16. Implemente uma função chamada `trianguloPerimetro`, que recebe três pares de números, que correspondem a coordenadas em um plano cartesiano. Tais coordenadas correspondem aos vértices de um triângulo. Calcule e retorno o perímetro do triângulo formado pelos pontos. Os parâmetros devem ser identificados como `x0`, `y0`, `x1`, `y1`, `x2` e `y2`.

<details>
  <summary>Exemplos</summary>

- Chamada:

```c
trianguloPerimetro(0,0,1,1,1,0)
```

- Retorno:

```
3.414213562373095
```

Retorna $3.414213562373095$, pois é o perímetro do triângulo formado pelos pontos $(0,0)$, $(1,1)$ e $(1,0)$.

----------

- Chamada:
```c
trianguloPerimetro(0,0,3,4,3,0) 
```
- Retorno:
```
12.0
```
Retorna $12.0$, pois é o perímetro do triângulo formado pelos pontos $(0,0)$, $(3,4)$ e $(3,0)$

</details>


17. Desenvolva um procedimento que recebe como entrada a idade de um nadador. Seu retorno deve ser a a categoria em que o nadador deve competir, de acordo com a tabela apresentada.

|Idade (anos)|Categoria|
|------------|---------|
|5 a 7| Infantil A|
|8 a 10|Infantil B|
|11 a 13| Juvenil A|
|14 a 17| Juvenil B|
|18 e acima de 18| Adulto|

Fonte: Adaptado de [PINHO](https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/Funcoes/lista.htm).  


18. Programe uma função chamada `soma_s` que tem como entrada um valor $n$, tal que $n$ pertence aos inteiros positivos. A função deve retornar o valor da soma S, onde:
$$S = \frac{1}{1}+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n-1}+\frac{1}{n}$$

19. Desenvolva um procedimento chamado `cabecalho`, que "desenha" na tela um retângulo com valores especificados pelo usuário, junto com uma mensagem. Devem ser passados os valores da largura, os caracteres que compõem a borda e o número de espaços antes de mostrar a mensagem.


<details>
  <summary>Exemplos</summary>

- Entrada:
    - Mensagem= "Olá, Turma."
    - Espacos=4
    - Largura=25
    - Borda="X"
- Chamada:
```c
cabecalho("Olá, Turma.", 4, 25, "X");
```
- Saída:
```
XXXXXXXXXXXXXXXXXXXXXXXXX
    Olá, Turma.
XXXXXXXXXXXXXXXXXXXXXXXXX
```

--------------------

- Chamada:
```c
cabecalho("Tchau!", 1, 8, "#");
```
- Saída:
```
########
 Tchau!
########
```

</details>

Fonte: Adaptado de [OLIVEIRA](http://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/17504/material/cmp1048-lista_exercicios-01.pdf).


20. Implemente uma função para verificar se determinado valor é ou não regular. Um número é dito regular se sua decomposição em fatores primos apresenta apenas potências de 2, 3 e 5.

Fonte: Adaptado de [OLIVEIRA](http://professor.pucgoias.edu.br/SiteDocente/admin/arquivosUpload/17504/material/cmp1048-lista_exercicios-01.pdf).  


21. Desenvolva uma função chamada `notaParaConceito`, que recebe como entrada uma nota e a converte para conceito, de acordo com a tabela apresentada a seguir.

|Nota|Conceito|
|----|--------|
|[0,0 - 7,0[|D|
|[7,0 - 8,0[|C|
|[8,0 - 9,5[|B|
|>9,5|A|

> Fonte: Adaptado de [PINHO](https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/Funcoes/lista.htm).

