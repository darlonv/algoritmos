import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Parâmetros

Uma das possibilidades com os procedimentos e as funções é a passagem de parâmetros. Os parâmetros consistem nos conteúdos a serem passados para as variáveis que estão dentro das funções.

O uso dos parâmetros permite que o conteúdo da função seja realizado de acordo com os conteúdos das variáveis a ela passados.

**Exemplo**
- Desenvolva uma função que retorna verdadeiro se o valor passado por parâmetro for par.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    //módulos
    modulo par(inteiro: numero)
        se(mod(numero,2) = 0)
        então
            retorne verdadeiro;
        senão
            retorne falso;
        fimse;
    fimmodulo;
  
    //variáveis
    inteiro: x;

    //entrada
    escreva("Entre com um número: ");
    leia(x);

    //processamento e saída
    se(par(x))
    então
        escreva(x, "é par.");
    senão
        escreva(x, "é ímpar.");
    fimse.
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
    //módulos
    public static boolean par(int numero){
        if(numero % 2 == 0){
            return true;
        }else{
            return false;
        }
    }

    //main
    public static void main(String[] args){
        //variáveis
        int: x;
        Scanner entrada = new Scanner(System.in);

        //entrada
        System.out.println("Entre com um número: ");
        leia(x);
        entrada.close();

        //processamento e saída
        if(par(x)){
            System.out.printf("%d é par.\n");
        }else{
            System.out.printf("%d é ímpar.\n");
        }
    }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
    #módulos
    def par(numero):
        if numero%2 == 0:
            return True
        else:
            return False;
  
    #entrada
    x = int(input("Entre com um número: "))

    #processamento e saída
    if par(x):
        print(f"{x} é par.");
    else:
        print(f"{x} é ímpar.");
  ```

  </TabItem>
</Tabs>


**Exemplo**
- Desenvolva uma função que retorna a soma de todos os números ímpares em um intervalo.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    //módulos
    modulo par(inteiro: numero)
        se(mod(numero,2) = 0)
            então
                retorne verdadeiro;
            senão
                retorne falso;
        fimse;
    fimmodulo;

    modulo impar(inteiro: numero)
        retorne(não par(numero));
    fimmodulo;

    modulo somaImparesIntervalo(inteiro: inicio, inteiro: fim)
        inteiro: soma ← 0, i;
        para i de inicio até fim passo 1 faça
            se(impar(i))
            então
                soma ← soma + i;
            fimse;
        fimpara;
        retorne soma;
    fimmodulo.

    //variáveis
    inteiro: ini, fim, soma;

    //entrada
    escreva("Entre com os valores de início e fim: ");
    leia(ini);
    leia(fim);

    //processamento
    soma ← somaImparesIntervalo(ini, fim);

    //saída
    escreva("A soma dos valores ímpares no intervalo [", ini, ",", fim, "] é ", soma);
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
    //módulos
    public static boolean par(int numero){
        if(numero%2 == 0){
            return true;
        }else{
            return false;
        }
    }

    public static boolean impar(int numero){
        return !par(numero);
    }

    public static int somaImparesIntervalo(int inicio, int fim){
        int soma = 0, i;
        for(i=inicio; i<=fim; i++)
            if(impar(i)){
                soma = soma + i;
            }
        return soma;
    }

    //variáveis
    int ini, fim, soma;
    Scanner entrada = new Scanner(System.in);

    //entrada
    System.out.println("Entre com os valores de início e fim: ");
    ini = entrada.nextInt();
    fim = entrada.nextInt();
    entrada.close();

    //processamento
    soma = somaImparesIntervalo(ini, fim);

    //saída
    System.out.printf("A soma dos valores ímpares no intervalo [ %d , %d é %d\n", ini, fim, soma);
  fim.
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
    #módulos
    def par(numero)
        if numero % 2 == 0:
            return True
        else:
            return False
        
    def impar(numero):
        return not par(numero)

    def somaImparesIntervalo(inicio, fim):
        soma = 0
        for i in range(ini, fim+1):
            if impar(i):
                soma = soma + i
        return soma

    
    #entrada
    print("Entre com os valores de início e fim: ");
    ini = int(input())
    fim = int(input())

    #processamento
    soma ← somaImparesIntervalo(ini, fim)

    #saída
    prinf(f"A soma dos valores ímpares no intervalo [{ini},{fim}] é {soma}")
  ```

  </TabItem>
</Tabs>

**Exercícios**  
- Desenvolva funções que realizem os seguinte cálculos:
    - O maior valor entre duas variáveis do tipo inteiro;
    - O menor valor entre duas variáveis do tipo inteiro;
    - A soma de todos os números impares em um intervalo, em que o usuário pode digitar o início e o fim do intervalo em qualquer ordem;
    - O Mínimo Múltiplo Comum (MMC) entre dois valores;
    - O Máximo Divisor Comum (MDC) entre dois valores.