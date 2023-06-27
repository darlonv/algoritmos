import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Caracteres e cadeias de caracteres

Denominamos como **cadeia de caracteres** à sequência de caracteres que compõe uma frase armazenada em memória.

O uso deste tipo de dado depende da linguagem de programação utilizada, o que diferencia a forma como é implementada, e consequentemente, seu uso pode variar.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  As variáveis do tipo `caractere` são utilizadas tanto para um único caractere como para cadeias de caracteres.

  **Exemplo**

  ```c
  inicio
    //variáveis
    caractere c, msg;
    c = "A";
    msg = "Algoritmos.";

    //saída
    escreva("Conteúdo de c  :", c);
    escreva("Conteúdo de msg:", msg);
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

Há pelo menos dois tipos de dados: 

- `char`, que armazena um único caractere; e 
- `String`, que permite armazenar sequências de caracteres

```javascript showLineNumbers
public static void main(String[] args){
    //variáveis
    char c;
    String msg;
    c = 'A';             //<- char  : aspas simples ('')
    msg = "Algoritmos."; //<- String: aspas duplas  ("")

    //saída
    System.out.printf("Conteúdo de c  : %c\n", c);   //<- %c : char
    System.out.printf("Conteúdo de msg: %s\n", msg); //<- %s : String
}
```

Observe as diferenças:
- dos tipos de dados (`char` e `String`) na declaração de variáveis (linhas 3-4);
- o uso de aspas simples ('') para `char` e aspas duplas ("") para `String`, quando o conteúdo das variáveis estiver explícito no código (linhas 5-6);
- o uso de `%c` e `%s` em *strings* formatadas (linhas 8-9).


  </TabItem>
  <TabItem value="python" label="Python">

  O tipo de dado `str` abrange tanto caractere como cadeias de caracteres.

  **Exemplo**
  ```python
  #variáveis
  c = "A"
  msg = "Algoritmos"
  
  #saída
  print(c)
  print(msg)
  ```

  e o uso das cadeias de caracteres pode ser tanto como como aspas simples e duplas.

  **Exemplo**
  ```python
  #variáveis
  c = 'A'
  msg = 'Algoritmo'
  
  #saída
  print(c)
  print(msg)
  ```

  Como o uso de aspas simples ou duplas é indiferente, podemos utilizar aspas simples como caractere comum dentro de uma sequência que inicia com aspas duplas, e vice-versa.

  **Exemplo**
  ```python
  #variáveis
  simples = "Seu nome começa com a letra 'D'."
  duplas  = 'Ele dizia que morava "Longe"'
  
  #saída
  print(c)
  print(msg)
  ```

  </TabItem>
</Tabs>

## Os tipos char e string

A forma como as linguagens de programação organizam os dados em memória é diferente. Por isso, as operações entre os diferentes tipos de dados podem ser diferentes

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  **Comparação**  
  A comparação é realizada utilizando o operador `=`, tanto para caractere como cadeias de caracteres, visto que são do mesmo tipo.

  **Exemplo**

  ```c
  inicio
    //variáveis
    caractere charA = "A", charB = "B";
    caractere msgA = "Algoritmos", msg = "Algoritmos";
    
    //Comparação entre caracteres
    se(charA = charB)
    então
        escreva("O conteúdo de charA e charB é igual.");
    senão
        escreva("O conteúdo de charA e charB é diferente.");
    fimse;

    //Comparação entre sequência de caracteres
    se(msgA = msgB)
    então
        escreva("O conteúdo de msgA e msgB é igual.");
    senão
        escreva("O conteúdo de msgA e msgB é diferente.");
    fimse;

  fim.

  ```

  Aqui trataremos o tipo `caractere` de maneira indiferente para qualquer quantidade de caracteres presente.

  </TabItem>
  <TabItem value="java" label="Java">

  **Comparação**  
  As comparações são realizadas utilizando o operador `==` para variáveis do tipo `char`. Já para cadeias de caracteres, é necessário utilizar o método `.equals()`.

  **Exemplo**

  ```javascript
  public static void main(String[] args){
    //variáveis
    char   charA = 'A', charB = 'B';
    String msgA = "Algoritmos", msg = "Algoritmos";
    
    //Comparação entre caracteres
    if(charA == charB){
        System.out.println("O conteúdo de charA e charB é igual.");
    }else{
        System.out.println("O conteúdo de charA e charB é diferente.");
    }

    //Comparação entre sequência de caracteres
    if(msgA.equals(msgB)){
        System.out.println("O conteúdo de msgA e msgB é igual.");
    }else{
        System.out.println("O conteúdo de msgA e msgB é diferente.");
    }

  }

  ```

  </TabItem>
  <TabItem value="python" label="Python">

  **Comparação**  
  A comparação é realizada utilizando o operador `=`, tanto para caractere como cadeias de caracteres, visto que são do mesmo tipo.

  **Exemplo**

  ```python
  inicio
    #variáveis
    charA = "A", charB = "B"
    msgA = "Algoritmos", msg = "Algoritmos"
    
    #Comparação entre caracteres
    if charA == charB:
        print("O conteúdo de charA e charB é igual.")
    else:
        print("O conteúdo de charA e charB é diferente.")
    

    #Comparação entre sequência de caracteres
    if msgA == msgB :    
        escreva("O conteúdo de msgA e msgB é igual.")
    else:
        escreva("O conteúdo de msgA e msgB é diferente.")
  ```

  </TabItem>
</Tabs>

## caracteres especiais

## Ascii e Unicode