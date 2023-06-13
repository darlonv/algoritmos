# Modularização

A construção de um **módulo** trata do desenvolvimento de um sub-algoritmo, este especializado em resolver determinado problema. É como se refinássemos um problema, e a partir das pequenas soluções chegássemos a uma solução final para todo o problema. Outra vantagem da modularização é a **reutilização de código**, dado que quando o mesmo sub-problema aparece diversas vezes, não é necessário reescrever a solução para o sub-problema diversas vezes, assim reaproveitando soluções já desenvolvidas.

É comum a categorização de módulos em **procedimentos** e **funções**. Nos procedimentos, há a mera execução de trechos de código, enquanto nas funções um valor é **retornado** na linha de código que executou a chamada à determinada função.

## Procedimentos

Um procedimento é um conjunto de linhas de um algoritmo que são agrupados, e quando o procedimento é chamado, todas as linhas são executadas.

**Exemplo**  
Tome como exemplo um sistema em que no início do algoritmo é mostrado um cabeçalho e ao final é mostrado um rodapé, estes compostos por uma sequência de `"="`. O algoritmo consiste em perguntar o nome do usuário e apresentar seu nome na tela, junto com a mensagem "Boa noite".

Uma forma de solução para o problema seria:

``` c
inicio

//variaveis
caractere nome;

//cabecalho
escreva("==========");

//Entrada e saída
escreva("Nome: ");
leia(nome);
escreva("Boa noite ", nome);

//rodapé
escreva("==========");

fim.
```

No exemplo observe que há uma sequência que se repete. Estas linhas poderiam ser parte de um procedimento.

``` c
inicio
    //módulos
    modulo linhas
        escreva("==========")
    fimmodulo.

    //variaveis
    caractere nome;

    //cabecalho
    linhas();   

    //Entrada e saída
    escreva("Nome: ");
    leia(nome);
    escreva("Boa noite ", nome);

    //rodapé
    linhas();
fim.
```

**Atividade**
- O que deveria ser feito para modificar o cabeçalho, utilizando `*`?
    - É necessário realizar esta modificação em quantas linhas?

:::info

As principais vantagens da modularização são:
- O mesmo trecho de código pode ser executado mais de uma vez, diminuindo a quantidade de código escrito;
- Caso seja necessário atualizar esse trecho de código, este é modificado em apenas um lugar no algoritmo;
- O teste de código fica mais simplificado, dado que é possível testar trechos de código;

:::

## Funções

Os procedimentos consistem na mera execução das linhas de código que estão contidas neles. Já as funções podem **retornar** um valor, ou seja, trazer um valor que foi calculado ou obtido dentro delas para dentro do algoritmo.

**Exemplo**  

Considere um algoritmo que pergunta a três pessoas sua idade e 

**Exercício**

Desenvolva um algoritmo que possui uma função chamada `tipo_triangulo`, que retorna

**Exercício**  

Considere um algoritmo que pergunta a altura e o peso de uma pessoa, e a partir disso calcula seu índice de massa corporal (IMC), de acordo com a seguinte fórmula:
$$
imc = \frac{peso}{altura^2}
$$

Uma possível solução seria: