import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vetores

Chamamos de **vetores** ou *arrays* às estruturas de dados que possibilitam armazenar um conjunto de valores de forma organizada e contígua. Podemos fazer uma analogia com um trem, onde cada vagão do trem corresponde uma variável, e os vagões organizados em sequência formam o trem. Nesta analogia o trem é o vetor.

Os vetores são fundamentais para o desenvolvimento de algoritmos. Com eles podemos solucionar problemas em que seja necessário armazenar informações que estejam relacionadas a uma mesma atividade.

Os vetores possuem algumas características, o que define como será o vetor. São elas:
- Identificador: nome dado ao vetor;
- Tamanho: quantidade de elementos do vetor;
- Tipo: tipo de dado que cada elemento do vetor. Todos os elementos do vetor devem possuir o mesmo tipo;

## Alocação estática

Inicialmente abordaremos a criação de vetores de maneira estática, para compreender o funcionamento. Aqui, sabemos de antemão o tamanho do vetor, e já atribuiremos valores iniciais para cada posição.

**Sintaxe**

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  <tipo> []: <nome> = {<valores>};
  ```

  **Exemplo** 
  ```c
  inteiro []: idade = {20, 22, 18, 40, 37, 20, 12, 65, 68, 40};                                //armazena informações da idade de 10 pessoas,
  real []: altura = {1.62, 1.10,  0.23, 1,80, 1,42, ,1.20, 0.90, 1.40 };  //armazena a altura de 8 pessoas
  logico []: porta_aberta = {verdadeiro, falso, falso, verdadeiro};       //armazena informações sobre 4 portas
  ```


  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  <tipo>[] <nome> = new <tipo>[<qtde>];
  ```

  **Exemplo** 
  ```javascript
  int[] idade = {20, 22, 18, 40, 37, 20, 12, 65, 68, 40}; //armazena informações da idade de 10 pessoas,
  float [] altura = {1.62f, 1.10f,  0.23f, 1,80f, 1,42f,1.20f, 0.90f, 1.40f };  //armazena a altura de 8 pessoas
  boolean [] porta_aberta = {true, false, false, true};   //armazena informações sobre 4 portas
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  <nome> = []
  ```

  **Exemplo** 
  ```python
  idade = [20, 22, 18, 40, 37, 20, 12, 65, 68, 40]; //armazena informações da idade de 10 pessoas,
  altura = [1.62, 1.10,  0.23, 1,80, 1,42,1.20, 0.90, 1.40 ];  //armazena a altura de 8 pessoas
  porta_aberta = [true, false, false, true];   //armazena informações sobre 4 portas
  ```

  Obs: Em Python, abordaremos a estrutura de dados *list* para compreendermos o funcionamento dos vetores. Diferentes dos vetores, as *lists* são dinâmicas e permitem manipulação mais complexas que os vetores. Dado isto, aqui daremos foco às suas características estáticas.

  </TabItem>
</Tabs>

**Exemplos**  

<Tabs groupId='language'>
  <TabItem value="pseudocodigo" label="Pseudocódigo" default>

  ```c
  inteiro [10]: altura;     //armazena informações da altura de 10 pessoas
  real [8]: area;           //armazena a área de 8 objetos
  logico [4]: porta_aberta; //armazena informações sobre 4 portas
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```javascript
  int altura = new int[10];        //armazena informações da altura de 10 pessoas
  float area = new float[8];       //armazena a área de 8 objetos
  bool porta_aberta = new bool[4]; //armazena informações sobre 4 portas
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  altura = [];               #armazena informações da altura de pessoas
  area = [];                 #armazena a área de objetos
  porta_aberta = new bool[]; #armazena informações sobre portas
  ```

  Obs: Em Python, abordaremos a estrutura de dados *list* para compreendermos o funcionamento dos vetores. Diferentes dos vetores, as *lists* são dinâmicas e permitem manipulação mais complexas que os vetores. Dado isto, aqui abordaremos apenas suas características estáticas.

  </TabItem>
</Tabs>

**Exemplo**  
Considere o seguinte problema: desenvolver um algorimo que calcula uma média de 5 valores.
- Desenvolva um algoritmo em que 

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

## Alocação dinâmica

@todo: string split

## Referências

- [Forbellone, André Luiz Villar; Eberspätcher, Henri Frederico. Lógica de programação: a construção de algoritmos e estruturas de dados. 4.ed. São Paulo: Pearson Prentice Hall, 2022.](https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/)