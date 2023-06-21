import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Escopo de variáveis

Chamamos de **escopo** ao espaço em que determinada variável pode ser utilizada. Comumente, o escopo pode ser **local** ou **global**.

## Variáveis locais

Uma variável é considerada **local** quando esta existe apenas em um módulo específico.

**Exemplo**
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo media3Valores(inteiro: a, real: b, real: c)
        //variáveis
        inteiro soma;
        real media;

        //processamento
        soma = a+b+c;
        media = soma/3;

        //retorno
        retorne media;
    fimmodulo;

    //variáveis
    inteiro: x, y, z;
    escreva("Entre com três valores: ");
    leia(x); leia(y); leia(z);

    escreva("A média é ", media3Valores(x,y,z))

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>

Observe que as variáveis `a`, `b`, `c`, `soma` e `media` existem **apenas** dentro do módulo `media3valores`. Com isto, dizemos que o **escopo** destas variáveis é **local** à função `media3Valores`.

Acessar estas variáveis fora de seu escopo ocasiona em um erro.

**Exemplo**
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo media3Valores(inteiro: a, real: b, real: c)
        //variáveis
        inteiro soma;
        real media;

        //processamento
        soma = a+b+c;
        media = soma/3;

        //retorno
        retorne media;
    fimmodulo;

    //variáveis
    inteiro: x, y, z;
    escreva("Entre com três valores: ");
    leia(x); leia(y); leia(z);

    escreva("A média é ", media3Valores(x,y,z));

    //erro aqui
    //highlight-next-line
    escreva("A soma dos valores é ", soma);//soma não existe neste escopo

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>

Em escopos diferentes, variáveis locais podem utilizar os mesmos nomes. Como estão em escopos diferentes são **variáveis diferentes**.

**Exemplo**
<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo mostraValorMaisDez(inteiro: x)
        inteiro: v; //variável v dentro da função
        //highlight-next-line
        v = x+10;  //um valor é atribuído a v dentro da função
        escreva("V dentro do módulo: ", v);
    fimmodulo;

    //variáveis
    inteiro: v; //variável v fora da função
    //highlight-next-line
    v = 10; //um valor é atribuído a v fora da função
    escreva("V fora do módulo: ", v); //mostra o valor 10
    mostraValorMaisDez(v);             //mostra o valor 20
    escreva("V fora do módulo: ", v); //mostra o valor 10. O valor original foi mantido.

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>


## Variáveis globais