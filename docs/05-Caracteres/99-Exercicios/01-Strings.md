import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cadeias de caracteres

## Exercícios de fixação

Resolva os exercícios abaixo sobre cadeias de caracteres. Organize seu código utilizando procedimentos e funções.

1. Pergunte o nome do usuário, e mostre o nome na vertical.

<details>
  <summary>Exemplo</summary>

- Entrada:

```
Celso
```

- Saída:

```
C
e
l
s
o
```

</details>

2. Pergunte ao usuário uma frase, e mostre apenas as vogais presentes na frase.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
batata e cebola
```

- Saída:

```
aaaeeoa
```

-------------------
- Entrada:

```
Abacaxi E Acerola
```

- Saída:

```
AaaiEAeoa
```

</details>

3. Digite um nome, e informe quantas letras possuem nesse nome.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
Alessandra
```

- Saída:

```
O nome Alessandra possui 10 letras.
```

--------------------

- Entrada:

```
Adroaldo dos Santos
```

- Saída:

```
O nome Adroaldo dos Santos possui 17 letras.
```

</details>



4. Digite uma frase, e mostre essa frase na ordem inversa (de trás para frente).

<details>
  <summary>Exemplos</summary>

- Entrada:

```
batata e cebola
```

- Saída:

```
alobec e atatab
```

</details>


5. Utilize o texto abaixo para responder aos questionamentos seguintes.
> '*Python e uma linguagem de programacao de alto nivel, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinamica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente possui um modelo de desenvolvimento comunitario, aberto e gerenciado pela organizacao sem fins lucrativos Python Software Foundation. Apesar de varias partes da linguagem possuirem padroes e especificacoes formais, a linguagem como um todo nao e formalmente especificada. O padrão de facto e a implementacao CPython. O nome Python teve a sua origem no grupo humoristico britanico Monty Python, criador do programa Monty Pythons Flying Circus, embora muitas pessoas façam associação com o reptil do mesmo nome.*'  
> (Texto adaptado de [Wikipedia: Python](https://pt.wikipedia.org/wiki/Python))

- Mostre:
    1. o número total de caracteres;
    1. quantas vezes cada vogal aparece;
    1. quantas frases existem no texto;
    1. quantos caracteres possui a maior palavra presente no texto;
    1. qual é a maior palavra presente no texto.
    1. as palavras que possuem duas letras iguais seguidas;
    1. todas as palavras que iniciam com letras maiúsculas;
    1. todas as palavras que possuem a letra "p" (minúscula).

Código para entrada, atribuindo texto diretamenta à variável:

<Tabs groupId='language'>
  <TabItem value="java" label="Java">

```javascript
texto = "Python e uma linguagem de programacao de alto nivel, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinamica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente possui um modelo de desenvolvimento comunitario, aberto e gerenciado pela organizacao sem fins lucrativos Python Software Foundation. Apesar de varias partes da linguagem possuirem padroes e especificacoes formais, a linguagem como um todo nao e formalmente especificada. O padrao de facto e a implementacao CPython. O nome Python teve a sua origem no grupo humoristico britanico Monty Python, criador do programa Monty Pythons Flying Circus, embora muitas pessoas façam associacao com o reptil do mesmo nome.";
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
texto = 'Python e uma linguagem de programacao de alto nivel, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinamica e forte. Foi lançada por Guido van Rossum em 1991. Atualmente possui um modelo de desenvolvimento comunitario, aberto e gerenciado pela organizacao sem fins lucrativos Python Software Foundation. Apesar de varias partes da linguagem possuirem padroes e especificacoes formais, a linguagem como um todo nao e formalmente especificada. O padrao de facto e a implementacao CPython. O nome Python teve a sua origem no grupo humoristico britanico Monty Python, criador do programa Monty Pythons Flying Circus, embora muitas pessoas façam associacao com o reptil do mesmo nome.'
```

  </TabItem>
</Tabs>

6. Peça ao usuário que digite uma entrada, e verifique se essa entrada forma um palíndromo, ou seja, se os caracteres da entrada forem invertidos, a entrada permanece idêntica. 

<details>
  <summary>Exemplos</summary>

- Entrada:

```
A mala nada na lama
```

- Saída:

```
A frase "A mala nada na lama" é um palíndromo
```

--------------------

- Entrada:

```
o breve verbo
```

- Saída:

```
A frase "o breve verbo" é um palíndromo
```

--------------------

- Entrada:

```
anotaram a data da maratona
```

- Saída:

```
A frase "anotaram a data da maratona é um palíndromo"
```

--------------------

- Entrada:

```
anotaram as datas da maratona
```

- Saída:

```
A frase "anotaram as datas da maratona não é um palíndromo"
```

</details>

7. A Cifra de César é uma das mais antigas e conhecidas técnicas de criptografia. Sua técnica consiste na substituição de cada letra do texto por outra, em que a letra é trocada pela letra seguinte no alfabeto com um número fixo.

Implemente um algoritmo de criptografia que utiliza a Cifra de César, utilizando um deslocamento de $3$ letras. Pergunte ao usuário qual frase deseja criptografar. Considere que a entrada não possui espaços, números, caracteres acentuados ou especiais.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
python
```

- Saída:

```
sbwkrq
```
**Observe**: p->s,y->b,t->w,h->k,o->r e n->q.

--------------------

- Entrada:

```
java
```

- Saída:

```
mdyd
```

--------------------

```
anotaramadatadamaratona
```

- Saída:

```
dqrwaudpdgdwdgdpdudwrqd
```

--------------------

```
xadrez
```

- Saída:

```
adguhc
```

</details>

8. Implemente um algoritmo que descriptografa um texto criptografado com a Cifra de César, cifrado utilizando deslocamento de $3$ letras. A entrada deve ser digitada pelo usuário sem espaços, números, caracteres acentuados ou especiais.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
sbwkrq
```

- Saída:

```
python
```
**Observe**: s->p, b->y, w->t, k->h, r->o e q->n.

--------------------

- Entrada:

```
mdyd
```

- Saída:

```
java
```

--------------------

```
dqrwaudpdgdwdgdpdudwrqd
```

- Saída:

```
anotaramadatadamaratona
```

--------------------

```
adguhc
```

- Saída:

```
xadrez
```

</details>

9. Implemente um algoritmo de criptografia que utiliza a Cifra de César, utilizando um deslocamento de $3$ letras. Devem ser considerados apenas as letras da frase, porém o usuário pode digitar qualquer sentenças com qualquer caractere na entrada. Caso hajam letras maiúsculas, estas devem ser convertidas para minúsculas.

10. Implemente um algoritmo de criptografia que utiliza a Cifra de César, utilizando um deslocamento de $n$ letras. Devem ser considerados apenas as letras da frase, porém o usuário pode digitar qualquer sentenças com qualquer caractere na entrada. Caso hajam letras maiúsculas, estas devem ser convertidas para minúsculas. O valor $n$ também deve ser uma entrada definida pelo usuário.

11. Implemente um algoritmo de criptografia que descritografa textos utilizando a Cifra de César, com deslocamento de $n$ letras. Devem ser considerados apenas as letras da frase, porém o usuário pode digitar qualquer sentenças com qualquer caractere na entrada. Caso hajam letras maiúsculas, estas devem ser convertidas para minúsculas. O valor $n$ também deve ser uma entrada definida pelo usuário.


12. Desenvolva um algoritmo que altera todas as vogais de uma frase para uma mesma vogal. Terá como saída 5 frases, cada uma com uma vogal.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
o sapo nao lava o pe. nao lava porque nao quer
```

- Saída:

```
a sapa naa lava a pa. naa lava parqaa naa qaar
e sepe nee leve e pe. nee leve perqee nee qeer
i sipi nii livi i pi. nii livi pirqii nii qiir
o sopo noo lovo o po. noo lovo porqoo noo qoor
u supu nuu luvu u pu. nuu luvu purquu nuu quur
```

</details>

13. Desenvolva um programa que verifica se um CPF está no formato válido (11 dígitos, seguindo o formato **xxx.xxx.xxx-xx**). O programa deve observar se apenas números, pontos e hífen foram digitados, observando nos locais corretos. Ao final deve informar "CPF Válido" ou "CPF Inválido".

<details>
  <summary>Exemplos</summary>

|Entrada   |Saída           |
|----------|----------------|
|123.456.789-01|CPF Válido  |
|12.3456.789-01|CPF Inválido|
|12X.456.789-01|CPF Inválido|
|12345678901   |CPF Inválido|
|12.3456.789-01|CPF Inválido|
|123-456.789-01|CPF Inválido|

</details>



<!-- 13. Importe a biblioteca
```py
from random import shuffle
```
e utilize a função 
```py
shuffle(palavra)
```
para embaralhar uma palavra. Com isto, implemente um jogo que mostra uma palavra embaralhada ao usuário, que deve adivinhar qual é a palavra original. Cadastre algumas palavras no código, e faça com que o sistema escolha uma delas aleatoriamente. O usuário ganha ou perde conforme adivinha corretamente ou incorretamente a palavra original. -->



14. Peça ao usuário que digite uma palavra, e então converta as letras para números utilizando a tabela abaixo, e então mostre o resultado. Converta todas as letras da entrada para maiúsculas.

|letra|número|
|----|----|
|O|0|
|I|1|
|Z|2|
|E|3|
|H|4|
|S|5|
|B|6|
|T|7|
|X|8|
|G|9|

<details>
  <summary>Exemplos</summary>

- Entrada:

```
STREAM
```

- Saída:

```
57R3AM
```

------------------

- Entrada:

```
pool
```

- Saída:

```
P00L
```

------------------

- Entrada:

```
algoritmos
```

- Saída:

```
AL90R17M05
```

------------------


</details>

15. O número 153 é igual à soma dos cubos dos algarismos que o compõe.  
**Observe:**  
$$
1^3+5^3+3^3 = 1 + 125 + 27 = 153
$$

Entre 100 e 999 também existem outros números que seguem esta propriedade. Quais são?



16. Implemente uma função que pergunte um valor x e uma frase ao usuário. Deve ser mostrado na tela a frase por colunas, como apresentado no exemplo abaixo, para `x=3` e frase ABACATES.

<details>
  <summary>Exemplos</summary>
Observe que:
```
A B A
C A T
E S
```  
O resultado deve ser o formato acima lido de cima para baixo, esquerda par a direita.

- Entrada:
```
3
ABACATES
```
- Saída: 
```
ACEBASAT
```

--------------------

- Entrada
```
2
PARALELO
```

- Saída
```
PRLLAAEO
```

</details>


17. Desenvolva uma função que verifica se uma palavra pode ser anagrama da outra, ou seja, se a segunda palavra pode ser formada apenas com a transposição das letras da primeira palavra. Chame sua função de `isAnagram`.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
ABACATES
ACEBASAT
```

- Saída:

```
verdadeiro
```

--------------------


- Entrada:

```
primeira
marifrei
```

- Saída:

```
falso
```

--------------------

- Entrada:

```
frase
resaf
```

- Saída:

```
verdadeiro
```

--------------------

- Entrada:

```
pudim
batata
```

- Saída:

```
falso
```

--------------------

- Entrada:

```
abcdef
cbafed
```

- Saída:

```
verdadeiro
```

--------------------

- Entrada:

```
sera
ser
```

- Saída:

```
falso
```

--------------------

- Entrada:

```
ba
aba
```

- Saída:

```
falso
```

--------------------

- Entrada:

```
Roma
Amor
```

- Saída:

```
verdadeiro
```

--------------------

- Entrada:

```
ovni
ovo
```

- Saída:

```
falso
```

--------------------


<!-- |Entrada|Entrada|Saida| -->
<!-- |-|-|-| -->
<!-- |`ABACATES`| `ACEBASAT` |`True`| -->
<!-- |`primeira`|`marifrei`|`False`| -->
<!-- |`frase`| `resaf`|`True`| -->
<!-- |`pudim`|`batata`|`False`| -->
<!-- |`abcdef`|`cbafed`|`True`| -->
<!-- |`sera`|`ser`|`False`| -->
<!-- |`ba`|`aba`|`False`| -->
<!-- |`Roma`|`Amor`|`True`| -->
<!-- |`ovni`|`ovo`|`False`| -->

</details>


18. Desenvolva uma função que recebe como entrada uma cadeia de caracteres, que possui diversos caracteres que se repetem em sequência. Sua função deve retornar uma cadeia de caracteres contendo a quantidade de vezes que o caractere se repete e o caractere em si, separados por vírgula.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
ABB
```

- Saída:

```
1A,2B
```

--------------------

- Entrada:

```
HHHH
```

- Saída:

```
4H
```

--------------------


- Entrada:

```
AAABBCCCC
```

- Saída:

```
3A,2B,4C
```

--------------------

- Entrada:

```
AAAAAGGGCCCTTTCCTTAAAAAATCG
```

- Saída:

```
5A,3G,3C,3T,2C,2T,6A,1T,1C,1G
```

--------------------

- Entrada:

```
..,,aaaAAAAA--------!!!!!!!!!!!!!!!999999900      .
```

- Saída:

```
2.,2,,3a,5A,8-,15!,79,20,6 ,1.
```

--------------------

</details>


19. Desenvolva uma função que recebe como entrada uma cadeia de caracteres que é composta por um número inteiro seguido de um caractere, onde número indica a quantidade de vezes que o caractere deve ser repetido. Este padrão pode ocorrer diversas vezes na entrada, separada por vírgulas.

<details>
  <summary>Exemplos</summary>

- Entrada:

```
1A,2B
```

- Saída:

```
ABB
```

--------------------

- Entrada:

```
4H
```

- Saída:

```
HHHH
```

--------------------


- Entrada:

```
3A,2B,4C
```

- Saída:

```
AAABBCCCC
```

--------------------

- Entrada:

```
5A,3G,3C,3T,2C,2T,6A,1T,1C,1
```

- Saída:

```
AAAAAGGGCCCTTTCCTTAAAAAATCG
```

--------------------

- Entrada:

```
2.,2,,3a,5A,8-,15!,79,20,6 ,1.
```

- Saída:

```
..,,aaaAAAAA--------!!!!!!!!!!!!!!!999999900      .
```

--------------------

</details>

<!-- 20. Desenvolva diversas funções que realizam a conversão de valores  -->

<!-- ## Procedimentos e funções

### Testes

## Problemas

## Desafios -->