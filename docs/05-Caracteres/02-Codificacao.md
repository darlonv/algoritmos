import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tabelas de codificação
ASCII e Unicode são tabelas que são utilizadas para realizar a conversão de valores para caracteres. Ambas Possuem caracteres *printáveis* e *não printáveis*. Os *não printáveis* servem para controle, p.ex.


## ASCII 
A tabela ASCII (*American Standard Code for Information Interchange*) utiliza 1 byte para armazenar cada caractere, ou seja 8 bits.

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


## Unicode

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