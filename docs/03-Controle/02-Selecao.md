---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Seleção

Uma estrutura de **seleção** possibilita que determinadas ações, ou seja, linhas de um algoritmo, sejam executadas em ou não. A **decisão** se essas linhas serão ou não executadas depende uma **condição** ([FORBELLONE 2022, pg 50](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/75)).




A estrutura de seleção é dada pelo uso da estrutura `se`. Com ela é possível definir *se*  determinado trecho de código seja executado de acordo com determinada **condição**. A **condição** é uma expressão que resulta em `verdadeiro` ou `falso`. Caso o resultado da expressão seja `verdadeiro`, o trecho de código é executado.

## Simples

A seleção **simples** consiste em executar determinado trecho de código caso o resultado da expressão seja verdadeiro.

### Sintaxe

Estrutura do código de seleção simples.

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c
  se(<expressão>)
    então
      //código a ser executado caso o 
      //resultado da <expressão> seja verdadeiro.
  fimse;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c
  if(<expressão>)
    //código a ser executado caso o resultado da <expressão> seja verdadeiro.
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  if <expressão>:
    #código a ser executado caso o 
    #resultado da <expressão> seja verdadeiro.
  ```

  </TabItem>
</Tabs>

**Exemplo**  
- Peça ao usuário que digite um número inteiro `x`, que corresponde à sua idade em anos. Mostre como saída a mensagem "*Parabéns! Você tem `x` anos!*." E caso a idade do usuário seja maior que 18 anos, também deve ser mostrada a mensagem "*Você é maior de idade.*".

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c showLineNumbers
  início
  //variáveis
  inteiro: idade;

  //entrada
  escreva("Qual é a sua idade? ");
  leia(idade);
  
  //saída
  escreva("Parabéns! Você tem ", idade, " anos.");
  // highlight-start
  se(idade > 18)
    então
      escreva("Você é maior de idade.");
  fimse;
  // highlight-end
  
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c showLineNumbers
  //variáveis
  int idade;
  Scanner entrada;

  //entrada
  entrada = new Scanner(System.in);
  System.out.println("Qual é a sua idade?");
  idade = entrada.nextInt();
  entrada.close();

  //saída
  System.out.printf("Parabéns! Você tem %d anos.\n", idade);
  // highlight-start
  if(idade > 18)
    System.out.println("Você é maior de idade.");
  // highlight-end
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python showLineNumbers
  #variáveis e entrada
  idade = int(input("Qual é a sua idade?"))

  #saída
  print(f"Parabéns! Você tem {idade} anos.")
  # highlight-start
  if idade > 18: print("Você é maior de idade.")
  # highlight-start
  ```

  </TabItem>
</Tabs>

A estrutura apresentada no exemplo pode ser utilizada **apenas** quando o trecho de código a ser executado seja de apenas **uma única linha**. 

### Blocos

Quando o trecho de código é composto de mais de uma linha, precisamos definir um **bloco** com o código a ser executado caso a condição seja verdadeira.

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c showLineNumbers
  se(<expressão>)
    então
      início
        //código a ser executado caso o 
        //resultado da <expressão> seja verdadeiro.
        //aqui podem existir várias linhas
      fim;
  fimse;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c showLineNumbers
  if(<expressão>)
  { //<- Início do bloco
    //código a ser executado caso o resultado da <expressão> seja verdadeiro.
    //aqui podem existir várias linhas
  } //<- Fim. do bloco
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python showLineNumbers
  if <expressão>:
    #código a ser executado caso o 
    #resultado da <expressão> seja verdadeiro.
    #aqui podem existir várias linhas
  ```

  </TabItem>
</Tabs>


**Exemplo**

- Peça ao usuário que digite um número $x$. Mostre esse número elevado ao quadrado ($x^2$). E caso o número digitado seja maior que 10, mostre também esse número elevado à terceira ($x^3$) e quarta ($x^4$) potências.

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c showLineNumbers
  início
  //variáveis
  inteiro: x;
  inteiro: x_elev;

  //entrada
  escreva('Entre com um valor para x: ');
  leia(x);

  //processamento e saída
  xelev ← x*x;
  escreva(x, "^2= ", x_elev);

  se(x>10)
    então
      // highlight-start
      início
        x_elev ← x_elev *x;
        escreva(x, "^3= ", xelev);
        x_elev ← x_elev *x;
        escreva(x, "^4= ", xelev);
      fim;
      // highlight-end
  fimse;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```c showLineNumbers
  //variáveis
  int x, x_elev;
  Scanner entrada;

  //entrada
  entrada = new Scanner(System.in);
  x = entrada.nextInt();
  entrada.close();

  //processamento e saída
  x_elev = x*x;
  System.out.printf("%d^2= %d\n", x, x_elev);

  if(<expressão>)
  // highlight-start
  { 
    x_elev = x_elev*x;
    System.out.printf("%d^3= %d\n", x, x_elev);
    x_elev = x_elev*x;
    System.out.printf("%d^4= %d\n", x, x_elev);
  } 
  // highlight-end
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python showLineNumbers
  #variáveis e entrada
  x = int(input("Entre com um valor para x: "))

  #processamento e saída
  x_elev = x*x
  print(f"{x}^2: {x_quad}")
  if x>10:
    # highlight-start
    x_elev = x_elev*x
    print(f"{x}^3: {x_quad}")
    x_elev = x_elev*x
    print(f"{x}^4: {x_quad}")
    # highlight-end
  ```

  </TabItem>
</Tabs>


- Peça ao usuário para digitar um número na tela. Caso o número digitado seja positivo, mostre na tela a mensagem "Número positivo".

```
inicio
//variaveis
inteiro: numero;

//entrada
escreva("Numero: ");
leia(numero);

//processamento e saida
se (numero > 0)
    então
        inicio;
            escreva("Número positivo");
        fim;
//saida
fim.
```

````

````{tab-item} Java

```java
if(<condição>){
    <Código a ser executado caso a condição resulte verdadeiro>
}
```

**Exemplo**

- Peça ao usuário para digitar um número na tela. Caso o número digitado seja positivo, mostre na tela a mensagem "Número positivo".

```java
import java.util.Scanner;

//variaveis
int numero;
Scanner entrada;

//entrada
System.out.println("Numero: ");
entrada = new Scanner(System.in);
numero = entrada.nextInt();

//processamento e saída
if(numero > 0){
    System.out.println("Número positivo.");
}
```

**Observação**  

Repare que:
- O trecho de código que pertence ao `if` é definido por um bloco, que é delimitado por `{` e `}`.

````

````{tab-item} Python 3
```python
if <condicao>:
    <Código a ser executado caso a condição resulte verdadeiro>
```

**Exemplo**

- Peça ao usuário para digitar um número na tela. Caso o número digitado seja positivo, mostre na tela a mensagem "Número positivo".

```python
//entrada
numero = int(input()(
if numero>0 :
    print("Número positivo")

```

**Observação** 

Repare que:
- Existe um `:` logo após a condição;
- O trecho de código que pertence ao `if` deve estar identado mais à direita. Esta identação é o que define qual parte do código faz parte do `if`.

````

`````



```python

```


```python

```

### Observação
Repare que:
- Existe um `:` logo após a condição;
- O trecho de código que pertence ao `if` deve estar identado mais à direita. Esta identação é o que define qual parte do código faz parte do `if`.


```python

```

## else
A estrutura `else` (senão) permite adicionar um trecho de código à estrutura `if`, de forma que o trecho de código especificado no `else` será executado apenas se a condição descrita no `if` for falsa (`False`).

### Sintaxe

```py
if <condição>:
    código se verdadeiro
else:
    código se falso
```

### Exemplo:

```py
A = 10
if A == 10:
    print('A é igual a 10')
else:
    print('A não é igual a 10')
```


```python

```

Modifique o valor atribuído à variável `A` para `9`, e observe o resultado apresentado.


```python

```

### Observação
Repare que:
- A palavra `else` fica na mesma identação que a palavra `if`;
- Existe um `:` logo após o `else`;
- O trecho de código que pertence ao `else` deve estar identado mais à direita. Esta identação é o que define qual parte do código faz parte do `else`.

### Atividades

Pergunte 2 números ao usuário. Mostre esses números em ordem, do menor para o maior.


```python

```

Peça ao usuário que digite um número inteiro. Em seguida, informe se o número digitado é par ou ímpar.


```python

```

Pergunte 3 números ao usuário. Mostre o menor número digitado.


```python

```

Pergunte 3 números ao usuário. Mostre o maior número digitado.


```python

```

**Exercícios**

- [Beecrowd 2780 - Basquete de Robôs](https://www.beecrowd.com.br/judge/pt/problems/view/2780)
- [Beecrowd 3170 - Bolinhas de Natal](https://www.beecrowd.com.br/judge/pt/problems/view/3170)  
- [Beecrowd 2787 - Xadrez](https://www.beecrowd.com.br/judge/pt/problems/view/2787)













**Exercícios adicionais**  

Estes exercícios também utilizam a estrutura `if`, porém é necessário utilizar `.split()` na leitura dos dados. Nestes, observe que há sempre dois valores **na mesma linha**. 

- [Beecrowd 1044 - Múltiplos](https://www.beecrowd.com.br/judge/pt/problems/view/1044)  
Neste caso, para realizar a leitura dos dados, utilize:
```python
a, b = input().split()
a = int(a)
b = int(b)
```

- [Beecrowd 1041 - Coordenadas de um Ponto](https://www.beecrowd.com.br/judge/pt/problems/view/1041)  
Neste caso, para realizar a leitura dos dados, utilize:
```python
x, y = input().split()
x = float(x)
y = float(y)
```



## Referências

- [FORBELLONE, André Luiz Villar; EBERSPÄTCHER, Henri Frederico. Lógica de programação: A construção de algoritmoss e estruturas de dados com aplicações em Python. 4.ed. São Paulo: Pearson; Porto Alegre: Bookman, 2022](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/75)

  