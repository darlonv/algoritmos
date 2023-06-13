---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Repetição

Considere que é necessário desenvolver um programa que mostre na tela uma sequência com os números de $0$ a $5$. Como poderia ser feito?

Uma das formas seria:
``` c
escreva(0);
escreva(1);
escreva(2);
escreva(3);
escreva(4);
escreva(5);
```

Uma outra forma seria colocando cada valor em uma variável, que chamaremos de **variável de controle**. Teríamos então:
```c
inteiro valor;

valor←0;
escreva(valor);
valor←1;
escreva(valor);
valor←2;
escreva(valor);
valor←3;
escreva(valor);
valor←4;
escreva(valor);
valor←5;
escreva(valor);
```  

Ao observar o último exemplo, percebemos que há um padrão que se repete. A variável `var` recebe o valor que será apresentado e o `escreva` mostra na tela o valor da variável.

Reconhecendo que a estrutura segue um padrão, pode-se aplicar uma **estrutura de repetição**. O uso da estrutura de repetição permite que o mesmo trecho de código seja executado diversas vezes, modificando apenas o **valor de variáveis**.

## enquanto

A estrutura de repetição `enquanto` consiste em repetir um bloco *enquanto* uma determinada condição for verdadeira.

A estrutura sintática do `enquanto` segue a seguinte forma:
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  enquanto(<condição>) faça
    ...código...
  fimenquanto;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  while(<condição>){
    ...
    ...código...
    ...
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  while <condição> :
    ...
    ...código...
    ...
  ```

  </TabItem>
</Tabs>


Poderíamos reescrever o exemplo anterior utilizando esta estrutura. 

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inteiro: valor;
  valor ← 0;
  enquanto( var <= 5 ) faça
    escreva(var);
    valor ← valor+1 ; 
  fimenquanto;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  int valor;
  valor = 0;
  while( valor <= 5 ){
    System.out.println(valor);
    valor = valor+1;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  valor = 0
  while valor<=5 :
    print(valor)
    valor = valor +1
  ```

  </TabItem>
</Tabs>


Observe que a estrutura executada diversas vezes, e a quantidade de vezes a ser executada dependerá do resultado da condição.

:::caution Cuidado
Observe que antes de adentrar na estrutura, é necessário inicializar a variável, e a variável deve ter seu valor modificado durante a execução do laço de repetição. Caso a variável não se altere, ocorre o risco de gerar um laço que é executado infinitamente, um *loop* infinito.
:::

**Exercícios**  
- Desenvolva um algoritmo que realiza uma contagem regressiva para o lançamento de um foguete. Seu programa deve apresentar na tela uma sequência de valores, iniciando de 10 e finalizando em 0.
- Peça ao usuário que digite diversos números inteiros, parando quando o número 0 for digitado. Para cada número digitado, informe se este é par ou ímpar.
- Peça ao usuário que digite um número inteiro. Em seguida, apresente a tabuada desse número, de 1 a 10.
- Peça ao usuário que digite 5 números positivos. Em seguida, mostre o menor valor entre os números digitados.
- Atualize o exercício anterior, informando também o maior valor digitado.
- Desenvolva um algoritmo que calcula o MDC entre dois números inteiros positivos.
:::info 
O MDC (Máximo Divisor Comum) é o maior valor que divide simultaneamente dois números.
:::

- Desenvolva um algoritmo que calcula e mostra o MMC entre dois números inteiros positivos.
:::info
O MMC (Mínimo múltiplo Comum) é o menor valor que é múltiplo de ambos os números.
:::



### Contadores

- Desenvolva um algoritmo em que o usuário pode digitar diversos números (quantos ele quiser), parando quando o número 0 for digitado. Ao final, informe quantos números foram digitados.
- Desenvolva um algoritmo em que o usuário insere uma senha para ingresssar no sistema. A senha correta é `QPwoei`. Caso o usuário digite a senha incorretamente, mostre a mensagem "Senha incorreta. Tente novamente". Caso a senha senha digitada incorretamente por 3 vezes, mostra a mensagem "Falha ao logar no sistema".

### Acumuladores

- Escreva um algoritmo que solicita um número inteiro positivo ao usuário, e em seguida calcula a soma de todos os números pares de 0 até o número informado.
- Peça ao usuário que digite dois números, b e p (base e potência). Em seguida, calcule o valor de $b^p$ e apresente o resultado na tela.

- Peça ao usuário que digite diversos números inteiros, parando quando um valor negativo for digitado. Mostre a média entre todos os valores digitados.

- Desenvolva um algorimo solicite ao usuário um número e exiba a sequência de Fibonacci até o valor fornecido.
:::info
A sequência de Fibonacci é uma sequência de números em que a cada número da sequência é a soma dos dois números anteriores na sequência. Os primeiros números na sequência são 1 e 1. Os primeiros números da sequência são 1, 1, 2, 3, 5, 8, 13, 21, 33, ...
::: 


## repita

Podemos utilizar uma outra estrutura, em que a condição é testada ao final. Nesta estrutura, o conteúdo da repetição sempre é executado pelo menos uma vez. A estrutura é repetida enquanto a condição for falsa.

A estrutura sintática do comando `repita` é a seguinte:
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  repita
    ...
    ...código...
    ...
  até <condição>;
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  do{
    ...
    ...código...
    ...
  }while(<condição>);
  ```

  </TabItem>
</Tabs>

**Exercícios**  
- Escreva um programa que solicite ao usuário digitar um número maior que 10. O programa deve continuar solicitando o número até que o usuário insira um número válido.
- Desenvolva um algoritmo que peça ao usuário solicite ao usuário adivinhar um número secreto entre 1 e 100. O programa deve continuar solicitando palpites até que o usuário acerte o número secreto. Como dica, o programa deve informar se o valor digitado foi alto ou baixo.
- Elabore um algoritmo que realiza o levantamento de roupas em uma loja. As roupas podem ser calças (J), camisetas (T) ou camisas (C). O usuário deve entrar com J, T ou C simulando a leitura das peças. Ao final, o algoritmo deve mostrar a quantidade e porcentagem de calças, camisetas e camisas que foram registradas. Para finalizar a contagem, o usuário deve digitar a letra F.

## para

A estrutura `para` consiste em uma estrutura de repetição em que há uma **variável de controle**. Esta variável assume valores predeterminados. Ao utilizar a estrutura `para`, de antemão já é sabido a o número de iterações que serão executadas.

A sintaxe da estrutura `para` segue a seguinte forma:
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  para val de vi até vf passo p faça
  ...
  ...
  ...
  fimpara;
  
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```js
  int val;
  for(val=vi; <condição> ; <incremento>){
    ...
    ...código...
    ...
  }
  ```

  onde:
  - val: variável de controle;
  - vi: valor inicial;
  - condição: condição a ser testada no início de cada iteração;
  - incremento: código a ser executado ao final de cada iteração.  
  

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  for val in range(vi, vf):
    ...
    ...código...
    ...
  ```

  </TabItem>
</Tabs>





## Referências

[FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. Lógica de programação a construção de algoritmos e estruturas de dados. 3. ed. -. São Paulo: Prentice Hall, 2005. ISBN 9788576050247.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/11?code=DUT9ceW6cevP76Zo+EZuhLshlFiipf6bm1qH+Er9IE2FR2aabpwRBUFHWBQY+ppEDI1u1phvX3Bo9xII7UTG/g==)  

[ASCENCIO, A. F. G.; CAMPOS, E. A. V. Fundamentos da programação de computadores algoritmos, Pascal e C/C++. São Paulo: Prentice Hall, 2002. ISBN 9788587918369.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/474/pdf/17?code=5aKNgQDVA1oGkIID/Mxq/5biXE3mV+4408hOmSg69vmeXo0W9VHrtyzrwyezUND1EQo7jhOxxg2X7UCNFBYZHg==)  

MATTHES, E. Curso intensivo de Python: uma introdução à prática e baseada em projetos à programação. São Paulo: Novatec, 2015.  

MENEZES, N. N. C. Introdução à programação com Python: algoritmos e lógica de programação para iniciantes. 3.ed. São Paulo: Novatec, 2019.  



### Outros materiais

[Python. ForLoop - Python Wiki.](https://wiki.python.org/moin/ForLoop)  
