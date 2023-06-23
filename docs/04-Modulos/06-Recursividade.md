import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recursividade

Diz-se que uma função que aplica a recursividade é uma função recursiva. A principal característica de uma função recursiva é que ela chama a si própria durante sua execução.


**Exemplo**

Considere o módulo abaixo, que apresenta números em ordem decrescente:

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo decrescente(inteiro: x)
        inteiro: i;
        para i de x até 0 passo -1 faça:
            escreva(i);
        fimpara;
    fimmodulo;

    decrescente(5);
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public static void decrescente(int x){
    int i;
    for(i=x;i>=0;x--){
        System.out.println(i);
    }
  }

  public static void main(String[] args){
    decrescente(5);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  def decrescente(x):
    for i in range(x,-1,-1):
        print(i)

  decrescente(5)
  ```

  </TabItem>
</Tabs>




É possível implementar esse mesmo módulo de maneira recursiva.

**Exemplo**

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo decrescenteRec(inteiro: x)
      escreva(x)
      se(x>0)
        //highlight-next-line
        descrescrenteRec(x-1); //<-- chamada à própria função
      fimse;
    fimmodulo;

    decrescenteRec(5);
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public static void decrescenteRec(int x){
    System.out.println(x);
    if(x>0){
      //highlight-next-line
      decrescenteRec(x-1); //<-- chamada à própria função
    }
  }

  public static void main(String[] args){
    decrescenteRec(5);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  def decrescenteRec(x):
    print(x)
    if x>0:
      #highlight-next-line
      decrescenteRec(x-1) #<-- chamada à própria função

  decrescenteRec(5)
  ```

  </TabItem>
</Tabs>

Observe nestes exemplos, no módulo recursivo  *não existe* propriamente uma estrutura de repetição, como na função apresentada anteriormente.

**Exercício**  
1. Implemente uma função recursiva que calcula e retorna a soma da sequência de números de 1 até $x$.

## Critério de parada
Uma das características da recursividade é a presença de um **critério de parada**, que controla quando a função deve parar. Sem esse recurso, a função continua sua execução indefinidamente. No exemplo desenvolvido, a estrutura `if` define que a recursividade deve ocorrer apenas enquanto `x>0`.

## Iterações
Normalmente, uma função recursiva é semelhante a uma estrutura de repetição, onde cada chamada à função corresponde a uma iteração da estrutura de repetição.  

O uso de estruturas de recursão é limitado devido à pilha de chamadas de função. A pilha de chamadas é uma estrutura do sistema operacional que controla as chamadas às funções, e a cada chamada de função um elemento da pilha é adicionado.

A região de memória em que se encontra a pilha é limitada, e ao requisitar mais memória que o possível, a estrutura entra em um estado de erro. A este tipo de erro dá-se o nome de **estouro de pilha**.


**Exemplo**

Considere os dois módulos abaixo, sem e com recursividade. Ambas realizam a soma da sequência de valores de 1 a $n$.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
    modulo somaSequencia(inteiro: x)
      //Soma de uma sequencia de 0 até x
      inteiro: soma = 0, i;
      para i de x até 1 passo -1 faça:
        soma = soma + i;
      fimpara;
      retorne soma;
    fimmodulo;

    modulo somaSequenciaRec(inteiro: x)
      //Soma de uma sequencia de 0 até x recursiva
      se(x > 0)
      então
        retorne x + somaSequenciaRec(x-1);
      retorne 0;
      fimse;
    fimmodulo;

    inteiro n;

    n = 10;
    escreva("Soma da sequência de 1 a", n, ":", somaSequencia(n));    //<-- sem recursividade
    escreva("Soma da sequência de 1 a", n, ":", somaSequenciaRec(n)); //<-- com recursividade

  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public static int somaSequencia(int x){
    //Soma de uma sequencia de 0 até x
    int soma=0, i;
    for(i=x;i>0;i--){
        soma = soma + i;
    }
    return soma;
  }

  public static int somaSequenciaRec(int x){
    //Soma de uma sequencia de 0 até x recursiva
    if(x>0){
        return x + somaSequenciaRec(x-1);
    }
    return 0;    
  }

  public static void main(String[] args){
    int n;

    n = 10;
    System.out.printf("Soma da sequência de 1 a %d : %d\n", n, somaSequencia(n));   //<-- sem recursividade
    System.out.printf("Soma da sequência de 1 a %d : %d\n", n, somaSequenciaRec(n));   //<-- sem recursividade
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  def somaSequencia(x):
    #Soma de uma sequencia de 0 até x
    soma = 0
    for i in range(x,0):
        soma = soma +i
    return soma

  def somaSequenciaRec(x):
    #Soma de uma sequencia de 0 até x recursiva
    if x > 0:
        return x + somaSequenciaRec(x-1)
    return 0
  ```

  </TabItem>
</Tabs>

**Atividade**

- Nos exemplos anteriores, altere o valor de `n`. Observe qual é o valor máximo possível para cada módulo, com e sem recursividade. Utilize potências de $10$, como $10^2$, $10^3$, $10^5$, $10^6$, $10^9$. Observe onde ocorreram erros, e identifque por quê eles ocorreram.



**Exercícios**  

- Implemente uma função que calcula a potência de um número. $y = b^e$, onde $b$ e $e$ correspondem à base e ao expoente, respectivamente. Utilize recursividade.
- Implemente a soma dos valores da sequência de 1 a $n$, utilizando apenas duas variáveis como parâmetro. Implemente utilizando recursividade.
- Desenhe um triângulo seguindo o seguinte formato, onde $n$ define a quantidade de linhas utilizadas:
```
*
* *
* * *
* * * *
* * * * *
* * * * * *
```

- Resolva o problema da Torre de Hanói, para $n$ discos.

<!-- 
```javascript
public static void hanoi(int n, char origem, char destino, char auxiliar){
  if(n==1){
    System.out.printf("Mova o disco %d de %c para %c.\n", n, origem, destino);
  }else{
    hanoi(n-1, origem, auxiliar, destino);
    System.out.printf("Mova o disco %d de %c para %c.\n", n, origem, destino);
    hanoi(n-1, auxiliar, destino, origem);
  }
}

public static void main(String[] args){
  int n;
  Scanner sc = new Scanner(System.in);
  System.out.println("Quantidade discos: ");
  n = sc.nextInt();
  sc.close();
  hanoi(n, 'A', 'C', 'B');
}
``` -->
