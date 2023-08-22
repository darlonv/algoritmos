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


Assim como nos vetores e matrizes, cada elemento pode acessado de maneira individual. 
