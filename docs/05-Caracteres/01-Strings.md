import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cadeias de caracteres

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

## Operações com cadeias de caracteres

Algumas operações são fundamentais para a manipulação de cadeias de caracteres utilizando uma linguagem de programação.

Alguns exemplos dessas operações são:

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  |Operação|Código|Tipo do retorno|
  |--------|------|---------------|
  |Comparação|`.equals(<str>)`|`bool`|
  |Tamanho|`.length()`|`int`|
  |Caractere na posição|`.charAt(<pos>)`|`char`|
  |Sub-cadeia|`.substring(<ini>,<qtde>)`|`String`|
  |MAIÚSCULAS|`.toUpperCase()`|`String`|
  |minúsculas|`.toLowerCase()`|`String`|
  |Concatenação|`.concat(<str>)`|`String`|
  |Concatenação|`<str> + <str>`|`String`|

  **Exemplo**
  ```javascript
  public static void main(String[] args) {
        String st1, st2, st3;
        int i;

        st1 = "Algoritmos";
        st2 = "Estruturas de dados";

        System.out.println(st1.equals(st2));     // false
        System.out.println(st1.length());        // 10
        System.out.println(st1.charAt(7));       // 'm'
        System.out.println(st1.substring(0, 4)); // "Algo"
        System.out.println(st1.toUpperCase());   // "ALGORITMOS"
        System.out.println(st1.toLowerCase());   // "algoritmos"
        System.out.println(st1.concat(st2));     // "AlgoritmosEstruturas de dados"
        System.out.println(st1.concat(" e ").concat(st2));// "Algoritmos e Estruturas de dados"
        System.out.println(st1 + " e " + st2);   // "Algoritmos e Estruturas de dados"

        for (i = 0; i < st1.length(); i++) {     // Percorre cada caractere
            System.out.println(st1.charAt(i));   // Mostra Cada caractere de "Algoritmos"
        }

        st3 = st1 + " e " + st2; // st3 = "Algoritmos e Estruturas de dados"
        System.out.println(st3); // "Algoritmos e Estruturas de dados"

    }
  ```

  Estas mesmas operações também podem ser realizadas sobre *strings* explícitas em código.

  **Exemplo**  

  ```javascript
  public static void main(String[] args) {
        System.out.println("Algoritmos".equals("Estruturas de Dados"));
        System.out.println("Algoritmos".length());
        System.out.println("Algoritmos".charAt(7));
        System.out.println("Algoritmos".substring(0, 4));
        System.out.println("Algoritmos".toUpperCase());
        System.out.println("Algoritmos".toUpperCase());
        System.out.println("Algoritmos".concat(" e Estruturas de Dados"));

    }
  ```

  

  </TabItem>
  <TabItem value="python" label="Python">

  |Operação|Código|Tipo do retorno|
  |--------|------|---------------|
  |Comparação|`<str> == <st2>`|`boolean`|
  |Tamanho|`len(<str>)`|`int`|
  |Caractere na posição|`str[<pos>]`|`str`|
  |Sub-cadeia|`<str>[<ini>:<fim-1>]`|`str`|
  |MAIÚSCULAS|`<str>.upper())`|`str`|
  |minúsculas|`<str>.lower()`|`str`|
  |Concatenação|`<str>.join(<str2>)`|`str`|
  |Concatenação|`<str1> + <str2>`|`str`|

  **Exemplo**
  ```python

        st1 = "Algoritmos"
        st2 = "Estruturas de dados"

        print(st1 == st2);    # False
        print(len(st1))       # 10
        print(st1[7]);        # "m"
        print(st1[0:4]);      # "Algo"
        print(st1.upper());   # "ALGORITMOS"
        print(st1.lower());   # "algoritmos"
        print(st1.join(st2)); # "AlgoritmosEstruturas de dados"
        print(st1.join(" e ").join(st2));# "Algoritmos e Estruturas de dados"
        print(st1 + " e " + st2); # "Algoritmos e Estruturas de dados"

        for i in range(len(s1)): # i percorre todas as posições
            print(st1[i])       # Mostra o caractere na posição i

        for c in st1: # Percorre cada caractere
            print(c)  # Mostra Cada caractere

        st3 = st1 + " e " + st2; # st3 = "Algoritmos e Estruturas de dados"
        print(st3);              # "Algoritmos e Estruturas de dados"
  ```

  Estas mesmas operações também podem ser realizadas sobre *strings* explícitas em código.

  **Exemplo**  

  ```python
  
        print("Algoritmos" == "Estruturas de Dados")
        print(len("Algoritmos"))
        print("Algoritmos"[7])
        print("Algoritmos"[0:4])
        print("Algoritmos".upper())
        print("Algoritmos".lower())
        print("Algoritmos".join(" e Estruturas de Dados"))
        print("Algoritmos" + " e " + "Estruturas de Dados")

  ```

  </TabItem>
</Tabs>

**Exercícios**



## Caracteres especiais

|Caractere|Função|
|---------|------|
|`\n` |quebra de linha|
|`\t` |tabulação |
|`\\` |`\`|

## Tabelas de codificação

ASCII e Unicode são tabelas que são utilizadas para realizar a conversão de valores para caracteres. Ambas Possuem caracteres *printáveis* e *não printáveis*. Os *não printáveis* servem para controle, p.ex.


### ASCII 
A tabela ASCII utiliza 1 byte para armazenar cada caractere, ou seja 8 bits.

 <details> 
 <summary>Tabela ASCII</summary>

 | Decimal | Hexadecimal | Character |
|---------|-------------|-----------|
| 0       | 00          | NUL       |
| 9       | 09          | TAB       |
| 10      | 0A          | LF        |
| 13      | 0D          | CR        |
| 27      | 1B          | ESC       |
| 32      | 20          | SPACE     |
| 33      | 21          | !         |
| 34      | 22          | "         |
| 35      | 23          | #         |
| 36      | 24          | $         |
| 37      | 25          | %         |
| 38      | 26          | &         |
| 39      | 27          | '         |
| 40      | 28          | (         |
| 41      | 29          | )         |
| 42      | 2A          | *         |
| 43      | 2B          | +         |
| 44      | 2C          | ,         |
| 45      | 2D          | -         |
| 46      | 2E          | .         |
| 47      | 2F          | /         |
| 48      | 30          | 0         |
| 49      | 31          | 1         |
| 50      | 32          | 2         |
| 51      | 33          | 3         |
| 52      | 34          | 4         |
| 53      | 35          | 5         |
| 54      | 36          | 6         |
| 55      | 37          | 7         |
| 56      | 38          | 8         |
| 57      | 39          | 9         |
|   58    |    3A       |     :     |
|   59    |    3B       |     ;     |
|   60    |    3C       |     <     |
|   61    |    3D       |     =     |
|   62    |    3E       |     >     |
|   63    |    3F       |     ?     |
|   64    |    40       |     @     |
|   65    |    41       |     A     |
|   66    |    42       |     B     |
|   67    |    43       |     C     |
|   68    |    44       |     D     |
|   69    |    45       |     E     |
|   70    |    46       |     F     |
|   71    |    47       |     G     |
|   72    |    48       |     H     |
|   73    |    49       |     I     |
|   74    |    4A       |     J     |
|   75    |    4B       |     K     |
|   76    |    4C       |     L     |
|   77    |    4D       |     M     |
|   78    |    4E       |     N     |
|   79    |    4F       |     O     |
|   80    |    50       |     P     |
|   81    |    51       |     Q     |
|   82    |    52       |     R     |
|   83    |    53       |     S     |
|   84    |    54       |     T     |
|   85    |    55       |     U     |
|   86    |    56       |     V     |
|   87    |    57       |     W     |
|   88    |    58       |     X     |
|   89    |    59       |     Y     |
|   90    |    5A       |     Z     |
|   91    |    5B       |     [     |
|   92    |    5C       |     \     |
|   93    |    5D       |     ]     |
|   94    |    5E       |     ^     |
|   95    |    5F       |     _     |
|   96    |    60       |     `     |
|   97    |    61       |     a     |
|   98    |    62       |     b     |
|   99    |    63       |     c     |
|  100    |    64       |     d     |
|  101    |    65       |     e     |
|  102    |    66       |     f     |
|  103    |    67       |     g     |
|  104    |    68       |     h     |
|  105    |    69       |     i     |
|  106    |    6A       |     j     |
|  107    |    6B       |     k     |
|  108    |    6C       |     l     |
|  109    |    6D       |     m     |
|  110    |    6E       |     n     |
|  111    |    6F       |     o     |
|  112    |    70       |     p     |
|  113    |    71       |     q     |
|  114    |    72       |     r     |
|  115    |    73       |     s     |
|  116    |    74       |     t     |
|  117    |    75       |     u     |
|  118    |    76       |     v     |
|  119    |    77       |     w     |
|  120    |    78       |     x     |
|  121    |    79       |     y     |
|  122    |    7A       |     z     |
|  123    |    7B       |     {     |
|  124    |    7C       |     \|    |
|  125    |    7D       |     }     |
|  126    |    7E       |     ~     |
|  127    |    7F       |    DEL    |

 </details>

**Atividade**

O que será mostrado na saída padrão quando os códigos a seguir forem executados?

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

1. 
```javascript
System.out.printf("%c%c%c%c%c", 65, 108, 103, 111, 10);
```

2. 
```javascript
System.out.printf("%c%c%c%c%c%c", 0x72, 0x69, 0x74, 0x6D, 0x6F, 10);
```

3. 
```javascript
char c = 'D';
System.out.printf("asci %c : int %d\n", c, (int) c);
```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>


### Unicode

 A tabela ASCII possui limitações, visto sua pequena quantidade de caracteres. Desta forma, o Unicode tenta suprir esta limitação utilizando 2 bytes para cada caractere.

 Os valores correspondentes aos caracteres Unicode podem ser consultados em sua documentação oficial, disponível em [unicode.org](https://unicode.org/charts/).

 **Atividade**

O que será mostrado na saída padrão quando os códigos a seguir forem executados?

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  Como Unicode é uma tabela que relaciona valores a caracteres, precisamos de uma linguagem de programação para visualizá-los.

  </TabItem>
  <TabItem value="java" label="Java">

1. 
```javascript
System.out.printf("%c %c\n", '\u0041', 0x1F60E);
System.out.printf("%c %c\n", '\u0424', '\u0642');
System.out.printf("%c %c %c\n", '\u19E0', '\u28E7', 0x28E7);
```

2. 
```javascript
int i = 0x2800;
while(i<0x2900){
    System.out.printf("%c", i);
    i++;
}
System.out.println();
```

3. 
```javascript
int i = 0x4400;
while(i<0x4500){
    System.out.printf("%c", i);
    i++;
}
System.out.println();
```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>

## Referências

- [UNICODE. Unicode 15.0 Character Code Charts.](https://unicode.org/charts/)