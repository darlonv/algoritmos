import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conversões

É possível converter os tipos de dados de e para cadeias de caracteres.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  |De|Para|Operação| 
  |--|----|--------|
  |inteiro|caractere|`caractere(<inteiro>)`|
  |caractere|inteiro|`inteiro(<caractere>)`|
  |real|caractere|`real(<caractere>)`|
  |caractere|real||`caractere(<real>)`|
  ||||

  ```c
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  |De|Para|Código| 
  |--|----|--------|
  |int|String|`Integer.toString(<int>)`, `String.valueOf(<int>)`|
  |String|int|`Integer.parseInt(<String>)`|
  |float|String|`Float.toString(<int>)`, `String.valueOf(<float>)`|
  |String|float|`Float.parseFloat(<String>)`|

  Exemplos  



  ```javascript
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  |De|Para|Código| 
  |--|----|--------|
  |int|str|`str(<int>)`|
  |str|int|`int(<str>)`|
  |float|str|`str(<float>)`|
  |str|float|`float(<str>)`|

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>

## Conversão utilizando cadeias de formatação

Podemos usar as *strings de formatação* para converter valores para o tipo caractere.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  String st; 
  int x = 10;
  st = String.format("%d", x); //<- st = "10"
  System.out.println(st);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  x = 10
  st = f"{x}" #<- st = "10" . Atenção ao f, indicando a *string* formatada.
  print(st)
  ```

  </TabItem>
</Tabs>

Observe que esta mesma operação também pode ser utilizada para realizar a concatenação de cadeias de caracteres.

**Exemplos**  

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  String st1 = "abc"; 
  String st2 = "def"; 
  st1 = String.format("%s%s", st1,st2); //<- st1 = "abcdef"
  System.out.println(st1);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  st1 = "abc"
  st2 = "def"
  st1 = f"{st1}{st2}" #<- st1 = "abcdef"
  print(st)
  ```

  </TabItem>
</Tabs>

## Referências

- [UNICODE. Unicode 15.0 Character Code Charts.](https://unicode.org/charts/)