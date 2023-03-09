---
sidebar_position: 7
---

**Exemplo**


`````{tab-set}

````{tab-item} Portugol

```

```
````

````{tab-item} Java

```java

```
````

````{tab-item} Python 3
```python

```
````

`````

# Expressões
Uma expressão é uma combinação de elementos, que podem ser valores, variáveis, operadores e chamadas a funções. Com o uso das expressões é possível realizar cálculos que produzem novos valores, ou seja, fazem a transformação das informações.

## Variáveis
Como visto anteriormente, variáveis são localizações na memória que armazenam dados.

Para associar um valor a uma variável utiliza-se o operador **←** ao lado direito da variável.

**Exemplo**


`````{tab-set}

````{tab-item} Portugol
Um exemplo de expressão é
```
soma ← 5 + 4
```
onde:
- `5` e `4` são valores, 
- `+` é um operador aritmético, 
- `=` é o operador de atribuição, e
- `soma` é uma variável.
````

````{tab-item} Java
Um exemplo de expressão é
```java
soma = 5 + 4
```
onde:
- `5` e `4` são valores, 
- `+` é um operador aritmético, 
- `=` é o operador de atribuição, e
- `soma` é uma variável.  
Em Java, o operador de atribuição é utilizado com o caractere `=`
````

````{tab-item} Python 3
Um exemplo de expressão é
```python
soma = 5 + 4
```
onde:
- `5` e `4` são valores, 
- `+` é um operador aritmético, 
- `=` é o operador de atribuição, e
- `soma` é uma variável.  
Em Python, o operador de atribuição é utilizado com o caractere `=`
````

`````

A execução desta expressão resulta em um novo valor, que será armazenado na variável `soma`.

## Operadores

Os operadores são utilizados para construir **expressões**, que podem conter diferentes quantidades de operandos.

### Tipos de operadores

#### Atribuição
Como dito anteriormente, a atribuição é o operador que determina a passagem de valor para uma variável. Por definição toda variável pode ser seu valor alterado, e a modificação deste valor é realizada com o operador de atribuição.

`````{tab-set}

````{tab-item} Portugol
|Operador|Função|
|--------|------|
|`←`|atribuição|

**Exemplo**  
- `lado ← 8`
- `distancia ← 49.6`
- `nome ← "Adalberto"`
- `custo ← 5.50`
````

````{tab-item} Java
|Operador|Função|
|--------|------|
|`=`|atribuição|

**Exemplo**  
- `lado = 8`
- `distancia = 49.6`
- `nome = "Adalberto"`
- `custo = 5.50`
````

````{tab-item} Python 3
|Operador|Função|
|--------|------|
|`=`|atribuição|

**Exemplo**  
- `lado = 8`
- `distancia = 49.6`
- `nome = "Adalberto"`
- `custo = 5.50`

````

`````


#### Aritméticos
São aqueles utilizados para a execução de operações matemáticas, como adição, multiplicação, subtração, divisão, potenciação, etc.

`````{tab-set}

````{tab-item} Portugol
|Operador|Função|Exemplo|
|----|----------| ----------|
|`+` | adição | `5+2 = 7` |
|`-` | subtração | `5-2 = 3` |
|`*` | multiplicação | `3*6 = 18` |
|`/` | divisão | `11/2 = 5.5` |
|`pot(x,y)` | potência. $x^y$ | `pot(5,2) = 25` |
|`rad(x)` | raiz quadrada. $\sqrt{x}$ | `rad(16) = 4` |
|`mod(x,y)` | resto da divisão inteira. | `mod(20,6) = 2` |
|`div(x,y)` | quociente da divisão inteira.| `div(20,6) = 3` |

**Exemplos**
```
//variaveis
inteiro: valor_i;
real: valor_f;

//saida
valor_i ← 5+10; 
escreva(valor_i);
valor_i ← 8-4;
escreva(valor_i);
valor_i ← 6*4;
escreva(valor_i);
valor_f ← 10/5;
escreva(valor_f);
valor_i ← 20%11;
escreva(valor_i);
valor_f ← rad(25);
escreva(valor_f);
```

````

````{tab-item} Java
|Operador|Função|Exemplo|
|----|----------| ----------|
|`+` | adição | `5+2 = 7` |
|`-` | subtração | `5-2 = 3` |
|`*` | multiplicação | `3*6 = 18` |
|`/` | divisão | `10/2 = 5.0` |
|`pot(x,y)` | potência. $x^y$ | `pot(5,2) = 25` |
|`rad(x)` | raiz quadrada. $\sqrt{x}$ | `rad(16) = 4` |
|`mod(x,y)` | resto da divisão inteira. | `mod(20,6) = 2` |
|`div(x,y)` | quociente da divisão inteira.| `div(20,6) = 3` |

**Exemplos**
```java
int valor_i;
float valor_f;

valor_i = 5+10;
System.out.println(valor_i); //15
valor_i = 8-4;
System.out.println(valor_i); //4
valor_i = 6*4;
System.out.println(valor_i); //24
valor_i = 10/2;
System.out.println(valor_i); //5
valor_f = 10/2;
System.out.println(valor_f); //5.0
valor_f = (float) 10/6;
System.out.println(valor_f); //1.6666666
valor_i = 25%11;
System.out.println(valor_i); //3



```
````

````{tab-item} Python 3
|Operador|Função|Exemplo|
|----|----------| ----------|
|`+` | adição | `5+2 = 7` |
|`-` | subtração | `5-2 = 3` |
|`*` | multiplicação | `3*6 = 18` |
|`/` | divisão | `11/2 = 5.5` |
|`**` | potência. $x^y$ | `5**2 = 25` |
|`sqrt(x)` | raiz quadrada. $\sqrt{x}$ (`from math import sqrt`) | `sqrt(16) = 4.0` |
|`%` | resto da divisão inteira. | `20%6 = 2` |
|`//` | quociente da divisão inteira.| `20//6 = 3` |

**Exemplos**
```python
valor_i = 5+10;
print(valor_i); #15
valor_i = 8-4;
print(valor_i); #4
valor_i = 6*4;
print(valor_i); #24
valor_i = 6*4.5;
print(valor_i); #27.0
valor_i = 10/2;
print(valor_i); #5.0
valor_f = 10/2;
print(valor_f); #5
valor_f = 10/6;
print(valor_f); #1.6666666666666667
valor_i = 25%11;
print(valor_i); #3
valor_i = 4**3
print(valor_i) #64
valor_f = sqrt(16)
print(valor_f) #4.0
```
````

`````


**Exercícios**
- Calcule a área de um quadrado de lado L. Utilize duas variáveis.
- No dia de seu aniversário, Tomás deseja saber qual e a sua idade, em dias. Considere que Tomás está completando X anos, e cada ano possui 365 dias. Utilize duas variáveis.

#### Relacionais
São operadores de comparação entre valores. As expressões realizadas com estes operadores retornam um resultado do tipo lógico, `verdadeiro` ou `falso` ([FORBELLONE 2022, p.27](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/51)).

`````{tab-set}

````{tab-item} Portugol
|Operador|Função|
|---|---| 
|`>`  |maior que|
|`<`  |menor que| 
|`=` |igual| 
|`<>` |diferente|
|`>=` |maior ou igual| 
|`<=` |menor ou igual| 

**Exemplos**  
```
escreva(6>7); //falso
escreva(6<7); //verdadeiro
escreva(6=7); //falso
escreva(4=4); //verdadeiro
escreva(12>=12); //verdadeiro
escreva(15>=12); //verdadeiro
escreva(12>=12); //verdadeiro
escreva(12<=12); //verdadeiro
escreva(15<=12); //falso
escreva(8<=12); //verdadeiro
escreva(3<>11); //verdadeiro
escreva(12<>12); //falso
```

````

````{tab-item} Java
|Operador|Função|
|---|---| 
|`>`  |maior que|
|`<`  |menor que| 
|`==` |igual| 
|`!=` |diferente|
|`>=` |maior ou igual| 
|`<=` |menor ou igual| 

**Exemplos**  
```java
System.out.println(6>7); //false
System.out.println(6<7); //true
System.out.println(6==7); //false
System.out.println(4==4); //true
System.out.println(12>=12); //true
System.out.println(15>=12); //true
System.out.println(12>=12); //true
System.out.println(12<=12); //true
System.out.println(15<=12); //false
System.out.println(8<=12); //true
System.out.println(3!=11); //true
System.out.println(12!=12); //false
```
````

````{tab-item} Python 3
|Operador|Função|
|---|---| 
|`>`  |maior que|
|`<`  |menor que| 
|`==` |igual| 
|`!=` |diferente|
|`>=` |maior ou igual| 
|`<=` |menor ou igual| 


**Exemplos**  
```python
print(6>7) #False
print(6<7) #True
print(6==7) #False
print(4==4) #True
print(12>=12) #True
print(15>=12) #True
print(12>=12) #True
print(12<=12) #True
print(15<=12) #False
print(8<=12) #True
print(3!=11) #True
print(12!=12) #False
```
````

`````



#### Lógicos

Os operadores lógiso são utilizados para a composição de expressões lógicas. As possibilidades de resultados de expressões lógicas considerando as entradas são chamadas de Tabelas-Verdade. São elas:


##### Conjunção 

A conjunção corresponde ao **e** lógico. Possui resultado verdadeiro apenas quando ambas entradas forem verdadeiras, e falso para os demais casos.

|p|q|p e q|
|-|-|-----|
|V|V|V|
|V|F|F|
|F|V|F|
|F|F|F|

##### Disjunção

A disjunção corresponde ao **ou** lógico. É falso apenas quando ambas as entradas são falsas. Basta apenas um dos dos operandos serem verdadeiros para resultar em verdadeiro.

|p|q|p ou q|
|-|-|-----|
|V|V|V|
|V|F|V|
|F|V|V|
|F|F|F|


##### Negação

A negação corresponde ao **não** lógico. Consiste na inversão lógica do valor de entrada. A negação é um operador unário, ou seja, atua sobre um único operando.

|p|não p|
|-|-----|
|V|F|
|F|V|



`````{tab-set}

````{tab-item} Portugol
|Operador|Função|
|--------|------|
|`e`  |**e** lógico (conjunção) |
|`ou` |**ou** lógico (disjunção)|
|`não`|**não** lógico (negação) |

````

````{tab-item} Java
|Operador|Função|
|--------|------|
|`&&`|**e** lógico (conjunção)|
|`\|\|` |**ou** lógico (disjunção)|
|`!`|**não** lógico (negação)|

````

````{tab-item} Python 3
|Operador|Função|
|--------|------|
|`and`|**e** lógico (conjunção)|
|`or` |**ou** lógico (disjunção)|
|`not`|**não** lógico (negação)|
````

`````



```python

```


```python

```

**Exemplo**

```
X = 5
X++
escreva(X)
```


```python

```

```py
X = 4
X <<= 2
print(X)
```


```python

```

## Operadores compostos
É possível combinar alguns operadores, que realizam a operação utilizando os parâmetros passados ao operador, e em seguida realiza uma atribuição utilizando a variável à esquerda dos operadores.

`````{tab-set}

````{tab-item} Portugol
|Operador|Função| 
|---|---|
|`++`| incremento de valor 1| 
|`+=`| adição e atribuição| 
|`-=`| subtração e atribuição| 
|`*=`| multiplicação e atribuição| 
|`/=`| divisão e atribuição| 
|`%=`| módulo e atribuição|
````

````{tab-item} Java
|Operador|Função|
|---|---|
|`++`| incremento de valor 1 (unário)| 
|`+=`| adição e atribuição| 
|`-=`| subtração e atribuição| 
|`*=`| multiplicação e atribuição| 
|`/=`| divisão e atribuição|
|`%=`| módulo e atribuição| 
````

````{tab-item} Python 3
|Operador|Função|
|---|---|
|`+=`| adição e atribuição| 
|`-=`| subtração e atribuição| 
|`*=`| multiplicação e atribuição| 
|`/=`| divisão e atribuição|
|`//=`| divisão inteira e atribuição|
|`%=`| módulo e atribuição| 
````

`````

## Prioridade entre operadores
As prioridades definem quais operadores serão executados primeiro. Caso possuam a mesma prioridade, a expressão será executada da esquerda para a direita.

`````{tab-set}

````{tab-item} Portugol
|Tipo|Símbolo|
|----|-------|
|parênteses mais internos|`(` `)`|
|potência, raiz| `pot` `rad`|
|multiplicação, divisão|`*` `/` `div` `mod`|
|adição e subtração|`+` `-`|
|atribuição|`←`|
Adaptado de [FORBELLONE 2022, p.26](https://plataforma.bvirtual.com.br/Leitor/Publicacao/200078/pdf/51).
````

````{tab-item} Java
|Tipo|Símbolo|
|----|-------|
|Operadores pós-fixados<br>operadores pré-fixados<br>*cast*|`exp++`  `exp--`<br>`++exp` `+exp` `-exp` `~exp` `!exp`<br>`(type) exp`|
|multiplicação, divisão| `*` `/` `%`|
|adição, subtração|`+` `-`|
|comparação|`,` `<=` `>` `>=`|
|igualdade|`==` `!=`|
|e lógico|`&&`|
|ou lógico|`\|\|`|
|atribuição|`=`|

Adaptado de [GOODRICH 2013, p.24].
````

````{tab-item} Python 3

|Tipo|Símbolo|
|----|-------|
|parênteses, colchetes e chaves|`()`,`[]`,`{}`|
|potência|`**`|
|positivo, negativo|`+x` `-x`|
|multiplicação e divisão|`*``/` `//` `%`|
|adição e subtração|`+` `-`|
|comparações|`in` `not in` `is` `is not` `<` `<=` `>=` `!=` `==`|
|não lógico|`not`|
|e lógico|`and`|
|ou lógico|`or`| 
|atribuição|`=`|

Adaptado de [PYTHON SOFTWARE FOUNDATION. Expressions - Python 3 documentation](https://docs.python.org/3/reference/expressions.html#operator-precedence).
````
`````

Além destes há outros operadores. Estão aqui listados apenas os que são importantes neste momento do aprendizado.


```python

```
