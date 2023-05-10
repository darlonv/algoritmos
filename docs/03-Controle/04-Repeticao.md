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
- Peça ao usuário que digite diversos números inteiro, parando quando o número 0 for digitado. Para cada número digitado, informe se este é par ou ímpar.
- Desenvolva um algoritmo em que o usuário pode digitar diversos números (quantos ele quiser), parando quando o número 0 for digitado. Ao final, informe quantos números foram digitados.
- Escreva um algoritmo que solicita um número inteiro positivo ao usuário, e em seguida calcula a soma de todos os números pares de 0 até o número informado.
- Peça ao usuário que digite um número inteiro. Em seguida, apresente a tabuada desse número, de 1 a 10.
- Peça ao usuário que digite 5 números positivos. Em seguida, mostre o menor valor entre os números digitados.
- Atualize o exercício anterior, informando também o maior valor digitado.
- Atualize o algoritmo do exercício anterior, informando também a média entre os valores digitados.
- Atualize o algoritmo do exercício anterior, em que o usuário pode digitar qualquer quantidade de números, parando quando um valor negativo for digitado.
- Desenvolva um algoritmo que calcula o MDC entre dois números positivos.
:::info 
O MDC (Máximo Divisor Comum) é o maior valor que divide simultâneamente dois números.
:::

- Desenvolva um algoritmo que calcula e mostra o MMC entre dois números positivos.
:::info
O MMC (Mínimo múltiplo Comum) é o menor valor que é múltiplo de ambos os números.
:::



### Contadores

### Acumuladores

## repita


## para






## Referências

[FORBELLONE, A. L. V.; EBERSPÄCHER, H. F. Lógica de programação a construção de algoritmos e estruturas de dados. 3. ed. -. São Paulo: Prentice Hall, 2005. ISBN 9788576050247.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/11?code=DUT9ceW6cevP76Zo+EZuhLshlFiipf6bm1qH+Er9IE2FR2aabpwRBUFHWBQY+ppEDI1u1phvX3Bo9xII7UTG/g==)  

[ASCENCIO, A. F. G.; CAMPOS, E. A. V. Fundamentos da programação de computadores algoritmos, Pascal e C/C++. São Paulo: Prentice Hall, 2002. ISBN 9788587918369.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/474/pdf/17?code=5aKNgQDVA1oGkIID/Mxq/5biXE3mV+4408hOmSg69vmeXo0W9VHrtyzrwyezUND1EQo7jhOxxg2X7UCNFBYZHg==)  

MATTHES, E. Curso intensivo de Python: uma introdução à prática e baseada em projetos à programação. São Paulo: Novatec, 2015.  

MENEZES, N. N. C. Introdução à programação com Python: algoritmos e lógica de programação para iniciantes. 3.ed. São Paulo: Novatec, 2019.  



### Outros materiais

[Python. ForLoop - Python Wiki.](https://wiki.python.org/moin/ForLoop)  
