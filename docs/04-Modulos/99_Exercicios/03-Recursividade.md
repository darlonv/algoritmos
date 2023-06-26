
# Recursividade

Resolva os exercícios apresentados abaixo, utilizando recursividade.

1. Implemente o cálculo do Fatorial.

:::info Definição

$$
Fatorial(x) = x! = 1\times2\times3\times...\times(x-1)\times x
$$

:::

2. Calcule a potência de qualquer número inteiro positivo elevado a qualquer número inteiro positivo, utilizando recursividade.

3. Calcule o resultado da função $E(n)$,tal que

$$
E(n) = \frac{1}{1}+\frac{1}{2}+\frac{1}{3}+...+\frac{1}{n-1}+\frac{1}{n}
$$

4. Implemente uma função para verificar se determinado valor é ou não regular. Um número é dito regular se sua decomposição em fatores primos apresenta apenas potências de 2, 3 e 5.

5. Desenhe um triângulo seguindo o seguinte formato, onde $n$ define a quantidade de linhas utilizadas:
```
*
* *
* * *
* * * *
* * * * *
* * * * * *
```

6. Desenhe uma pirâmide, seguindo o formato abaixo, perguntando ao usuário o número de linhas que ele deseja para o padrão.
```
- - - - * - - - -
- - - * * * - - -
- - * * * * * - -
- * * * * * * * -
* * * * * * * * *
```

7. Desenhe um triângulo, seguindo o formato apresentado abaixo, perguntando `n` ao usuário. No caso do exemplo, `n=5`.
```
*
* *
* * *
* * * * 
* * * * *
* * * *
* * *
* *
*
```

8. Calcule o enésimo termo da sequência de Fibonacci para x, sabendo que cada termo é composto da soma dos dois termos anteriores. Para `F(n)`, tem-se:
```py
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)
```

9. Desenvolva uma módulo que calcula uma aproximação para o número Euler $e$, sem utilizar estruturas de repetição. Como teste, utilize $n=10$.


:::info Definição

Uma das maneiras de calcular o número de Euler $e$ pode ser calculado utilizando a seguinte equação:

$$
e = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + … + \frac{1}{(n-1)!} + \frac{1}{n!}
$$

- [Número de Euler](https://pt.wikipedia.org/wiki/Número_de_Euler)

:::


10. Calcule o resto da divisão inteira (mod), utilizando recursividade. Sabe-se que:
```
mod(x,y) = mod(x-y, y) se x > y
mod(x,y) = x se x < y
mod(x,y) = 0 se x = y
```

11. Calcule o máximo divisor comum (mdc) de dois números inteiros x e y. Sabe-se que:
```
mdc(x,y) = mdc(x-y,y) se x>y
mdc(x,y) = mdc(y,x)
mdc(x,x) = x
```

12. Desenvolva uma função que retorna verdadeiro se determinado valor $x$ é um número primo, e falso caso contrário.