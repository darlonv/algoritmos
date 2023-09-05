# Repetição

1. Peça ao usuário que digite um valor inteiro $n$. Mostre na tela os números de $1$ até $n$, em sequência.

1. Peça o usuário que digite $5$ números, com valores que podem ser entre $0$ e $1000$. Mostre o maior e menor número digitados.

1. Peça ao usuário que digite um valor inteiro $n$. Em seguida, apresente os números de $n$ a $1$, na ordem do maior para o menor.

1. Pergunte um número $k$ ao usuário, e mostre a tabuada desse número, com múltiplos de $1$ a $20$.

1. Calcule a soma $s$ e a média $m$ dos primeiros $n$ números, começando por $1$, de forma que $n$ é digitado pelo usuário.  
Matematicamente, isto é equivalente a:
$$
s = \sum_{i=1}^ni \\
m = \frac{\sum_{i=1}^ni}{n} = \frac{s}{n}
$$ 

1. Calcula a soma $s$ e a média $m$ de todos os números inteiros no intervalo $[a,b]$, de forma que $a$ e $b$ são digitados pelo usuário. De forma matemática:  
$$
s = \sum_{i=a}^{b}i \\
m = \frac{\sum_{i=a}^{b}i}{b-a} = \frac{s}{b-a}
$$ 

1. Pergunte um número $x$ ao usuário, e então mostre todos os números de $1$ a $100$ que são divisíveis por $x$.

1. Calcule o fatorial $f$ de um número $x$, tal que $x$ é digitado pelo usuário.  
De forma matemática:
$$
f=x!\\
f= x\times(x-1)\times(x-2)\times...\times2\times1
$$

1. Faça um programa para calcular a soma dos números pares no intervalo $[a,b]$, tal que $a$ e $b$ são digitados pelo usuário.

1. Pergunte $n$ ao usuário, e informe se $n$ é ou não um número primo. Considere $2$ como primeiro número primo.

1. Mostre todos os números entre $500$ e $2000$ que, quando divididos por $11$, possuem resto da divisão igual a $5$.

1. Pergunte $n$ ao usuário, e mostre a seguinte soma $s$, de forma que:
$$
s = 1/1 + 1/2 + 1/3 + ... + 1/(n-1) + 1/n
$$  
que, matematicamente é:
$$
\sum_{i=1}^{n}\frac{1}{i}
$$

1. Desenvolva um algoritmo que mostra todos os divisores de um número que são menores que ele.

:::note Exemplo
Para `n=20`:
```
Divisores:
1
2
4
5
10
```
Para `n=81`:
```
Divisores:
1
3
9
27
```
:::

1. Dado um número $n$, inteiro e positivo, dizemos que $n$ é perfeito se $n$ for igual à soma de seus divisores positivos e diferentes de $n$. Desenvolva um algoritmo que verifica se determinado número é perfeito.  

:::note Exemplo

Para `n=6`:
```
True
```

$6$ é perfeito, pois $6=3+2+1$.
Para `n=15`:
```
False
```

$15$ não é perfeito, pois $15\neq5+3+1$.
:::

1. Pergunte ao usuário dois números, $x$ e $y$, e mostre todos os números perfeitos no intervalo $[x,y]$.

1. Calcule e mostre a sequência de Fibonacci $F$, de $1$ até $n$.  Considere:
$$
F(1)=1\\
F(2)=1\\
F(n) = F(n-1)+F(n-2)\\
$$

:::note Exemplo

Para `n=11`:
```
1 1 2 3 5 8 13 21 34 55 89 
```
:::

1. Faça um programa que pergunte $n$ ao usuário, tal que $n$ corresponde ao número de linhas, que devem ser impressas de acordo com o padrão mostrado no exemplo.

:::note Exemplo

Para `n=5`: 
```
*
**
***
****
*****
```
:::



 