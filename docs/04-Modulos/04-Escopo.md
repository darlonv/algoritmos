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

    //variáveis e entrada
    inteiro: x, y, z;
    escreva("Entre com três valores: ");
    leia(x); leia(y); leia(z);

    escreva("A média é ", media3Valores(x,y,z))

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public static float media3Valores(int a, int b, int c){
    //variáveis
    int soma;
    float media;

    //processamento
    soma = a+b+c;
    media = soma/3;

    //retorno
    return media;
  }

  public static void main(String[] args){
    //variáveis e entrada
    int x,y,z;
    System.out.println("Entre com três valores: ");
    Scanner entrada = new Scanner(System.in);
    x = entrada.nextInt(); y = entrada.nextInt(); z = entrada.nextInt();

    //chamada ao método e saída
    System.out.printf("A média é %f\n", media3Valores(x,y,z));
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
    def media3Valores(a, b, c)
        #processamento
        soma = a+b+c
        media = soma/3

        #retorno
        return media

    #variáveis e entrada
    print("Entre com três valores: ")
    x, y, z = int(input()), int(input()), int(input())

    print("A média é ", media3Valores(x,y,z))
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
  public static float media3Valores(int a, int b, int c){
    //variáveis
    int soma;
    float media;

    //processamento
    soma = a+b+c;
    media = soma/3;

    //retorno
    return media;
  }

  public static void main(String[] args){
    //variáveis e entrada
    int x,y,z;
    System.out.println("Entre com três valores: ");
    Scanner entrada = new Scanner(System.in);
    x = entrada.nextInt(); y = entrada.nextInt(); z = entrada.nextInt();

    //chamada ao método e saída
    System.out.printf("A média é %f\n", media3Valores(x,y,z));

    //erro aqui
    //highlight-next-line
    System.out.printf("A soma dos valores é ", soma);//soma não existe neste escopo
  }
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
        inteiro: v; //variável v local à função
        //highlight-next-line
        v = x+10;  //um valor é atribuído a v dentro da função
        escreva("V dentro do módulo: ", v);
    fimmodulo;

    //variáveis
    inteiro: v; //variável v local ao código principal
    //highlight-next-line
    v = 10; //um valor é atribuído a v fora da função
    escreva("V fora do módulo: ", v); //mostra o valor 10
    mostraValorMaisDez(v);            //mostra o valor 20
    escreva("V fora do módulo: ", v); //mostra o valor 10. O valor original foi mantido.

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
    public static void mostraValorMaisDez(int x){
        int v; //variável v local à função
        //highlight-next-line
        v = x+10;  //um valor é atribuído a v dentro da função
        System.out.printf("V dentro do módulo: %d\n", v);
    }

    public static void main(String[] args){
        //variáveis
        int v; //variável v local ao código principal
        //highlight-next-line
        v = 10; //um valor é atribuído a v fora da função
        System.out.printf("V fora do módulo: %d\n", v); //mostra o valor 10
        mostraValorMaisDez(v);                          //mostra o valor 20
        System.out.printf("V fora do módulo: %d\n", v); //mostra o valor 10. O valor original foi mantido.
    }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
    def mostraValorMaisDez(x):
        #highlight-next-line
        v = x+10;  //um valor é atribuído a v dentro da função
        print("V dentro do módulo: ", v)
    
    #highlight-next-line
    v = 10; #um valor é atribuído a v fora da função
    print("V fora do módulo:", v) #mostra o valor 10
    mostraValorMaisDez(v)         #mostra o valor 20
    print("V fora do módulo:", v) #mostra o valor 10. O valor original foi mantido.
  ```

  </TabItem>
</Tabs>


## Variáveis globais

Aa variáveis **globais** são aquelas que podem ser acessadas por todos, e portanto, são **compartilhadas** entre todas os módulos.

Para definir uma variável como global, basta declará-la fora do módulo.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Olá Mundo");
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