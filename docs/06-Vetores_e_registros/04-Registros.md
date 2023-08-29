import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Registros

Um registro é uma variável composta heterogênea, em que podemos observá-la como um conjunto de elementos que podem ser de tipos distintos (diferente dos vetores e matrizes). Dizemos que cada um destes elementos é um **campo**, e conjunto dos **campos** forma o **registro**.

**Problema** 

Considere como exemplo a seguinte situação: é necessário armazenar informações sobre um produto determinado, que possui dados como descrição (caractere), lote (inteiro) e peso (real). Neste momento inicial apenas observaremos as variáveis necessárias e seus tipos, sem valores, processamento ou saída.

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio;
    //variáveis
    caractere: descricao;
    inteiro: lote;
    real: peso;
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public static void main(String[] args){
    //variáveis
    String descricao;
    int lote;
    float peso;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  descricao = ''
  lote = 0
  peso = 0.o
  ```

  </TabItem>
</Tabs>

Imagine agora que surgiu a necessidade de armazenar a informação de mais dois produtos, ou seja, temos prod_1, prod_2 e prod_3. Será então necessário armazenar as informações de descrição, lote e peso para cada produto. Uma possível implementação seria:

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio;
    //variáveis
    caractere: prod_1_descricao, prod_2_descricao, prod_3_descricao;
    inteiro: prod_1_lote, prod_2_lote, prod_3_lote;
    real: prod_1_peso, prod_2_peso, prod_3_peso;
  fim.
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public static void main(String[] args){
    //variáveis
    String prod_1_descricao, prod_2_descricao, prod_3_descricao;
    int prod_1_lote, prod_2_lote, prod_3_lote;
    float prod_1_peso, prod_2_peso, prod_3_peso;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  prod_1_descricao = 0, prod_2_descricao = 0, prod_3_descricao = 0
  prod_1_lote, prod_2_lote, prod_3_lote = 0
  prod_1_peso = 0.0, prod_2_peso = 0.0, prod_3_peso = 0.0
  ```

  </TabItem>
</Tabs>

Observe que o problema está em que é necessário declarar uma a uma das variáveis correspondentes a cada produto.

Isto pode ser entendido como cada produto sendo um grupo de variáveis, ou seja, um registro com um grupo de campos. Com isto, cada novo produto é composto por um registro.


**Sintaxe**

- Para definir um registro, utilizamos a seguinte sintaxe:

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  tipo <nome do registro> = registro
                              <tipo do dado>: <nome do campo>;
                            fimregistro
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  public class <NomeDoRegistro> {
    <tipo do dado> <nome do campo>;
  }
  ```

:::caution Atenção
  Em Java, utilizaremos o conceito de **classes** como registros, visto que atende aqui nossa finalidade didática. Classes fazem parte do paradigma de orientação a objetos, e possuem outras funcionalidades e finaliadades. Aqui estamos chamando de registros e seus campos, porém na verdade estamos utilizando classes e seus atributos.

  Em Java há também o tipo **record**, que funciona como um registro. Porém, não será abordado neste material devido à sua característica de imutabilidade.
:::

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  from dataclasses import dataclass

  @dataclass
  class <NomeDoRegistro>:
    <nome do campo>
  ```
:::caution Atenção
  Em Python, utilizaremos as **classes**, como registros, visto que atende aqui nossa finalidade didática. Classes são parte do paradigma de orientação a objetos, e possui muitas outras funcionalidades e finalidades. Aqui estamos chamando de registros e seus campos, porém na verdade estamos utilizando classes e seus atributos.
:::
  </TabItem>
</Tabs>

**Exemplo**  
- Declaração de produtos utilizando registros:

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  //especificação do registro
  tipo Produto  = registro
                    caractere: descricao;
                    inteiro: lote;
                    real: peso;
                  fimregistro;

  //declaração da variável do tipo do registro
  Produto prod_1, prod_2, prod_3;
  
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript 
  class Produto {
    String descricao;
    int lote;
    float peso;
  }

  public class Main{
    public static void main(String[] args){
      //Declaração das variáveis do tipo do registro
      Produto prod_1 = new Produto();
      Produto prod_2 = new Produto();
      Produto prod_3 = new Produto();
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  from dataclasses import dataclass

  @dataclass
  class Produto:
    descricao = ""
    lote = 0
    peso = 0.0
  ```

  </TabItem>
</Tabs>

Assim como nos vetores e matrizes, cada elemento pode acessado de maneira individual.  O acesso aos campos de cada registro é realizado utilizando `.` (ponto).

**Exemplo**

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inicio
  //especificação do registro
  tipo Produto  = registro
                    caractere: descricao;
                    inteiro: lote;
                    real: peso;
                  fimregistro;

  //declaração da variável do tipo do registro
  Produto prod_1, prod_2, prod_3;

  //definição dos valores a cada campo
  prod_1.descricao ← "leite";
  prod_1.lote ← 100;
  prod_1.peso ← 0.750;

  prod_2.descricao = "chocolate";
  prod_2.lote ← 84;
  prod_3.peso ← 0.150;

  prod_3.descricao ← "agua mineral";
  prod_3.lote ← 502;
  prod_3.peso ← 0.450;
  
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript 
  class Produto {
    String descricao;
    int lote;
    float peso;
  }

  public class Main{
    public static void main(String[] args){
      //Declaração das variáveis do tipo do registro
      Produto prod_1 = new Produto();
      Produto prod_2 = new Produto();
      Produto prod_3 = new Produto();

      //definição dos valores a cada campo
      prod_1.descricao = "leite";
      prod_1.lote = 100;
      prod_1.peso = 0.750f;

      prod_2.descricao = "chocolate";
      prod_2.lote = 84;
      prod_3.peso = 0.150f;

      prod_3.descricao = "agua mineral";
      prod_3.lote = 502;
      prod_3.peso = 0.450f;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  from dataclasses import dataclass

  @dataclass
  class Produto:
    descricao = ""
    lote = 0
    peso = 0.0

  #variáveis
  prod_1 = Produto()
  prod_2 = Produto()
  prod_3 = Produto()

  #definição dos valores a cada campo
  prod_1.descricao = "leite"
  prod_1.lote = 100
  prod_1.peso = 0.750

  prod_2.descricao = "chocolate"
  prod_2.lote = 84
  prod_3.peso = 0.150

  prod_3.descricao = "agua mineral"
  prod_3.lote = 502
  prod_3.peso = 0.450
  ```

  </TabItem>
</Tabs>

**Exercícios**




