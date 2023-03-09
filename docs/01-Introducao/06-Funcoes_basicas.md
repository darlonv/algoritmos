---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Funções básicas

## Entrada e saída de dados

Para que exista a interação do algoritmo desenvolvido com agentes externos - p.ex. usuário - é necessário a utilização de algumas funções específicas.

### Saída de dados

A saída de dados que utilizaremos aqui é a tela. Para mostrar uma mensagem na tela, utilizaremos a função `escreva()`, acompanhada do que queremos que seja apresentado na tela.


**Exemplos**  
- Para apresentar na tela a mensagem `Olá Mundo`:  


<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```
  escreva("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="java" label="Java">

  ```java
  System.out.println("Olá Mundo");
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Olá Mundo")
  ```

  </TabItem>
</Tabs>


- Para apresentar a mensagem `Bom dia, José`:


<Tabs groupId="language">
  <TabItem value="apple" label="Portugol" default>

  ```
  escreva("Bom dia, José");
  ```

  </TabItem>
  <TabItem value="orange" label="Java">

  ```java
  System.out.println("Bom dia, José");
  ```

  </TabItem>
  <TabItem value="banana" label="Python">

  ```python
  print("Bom dia, José")
  ```

  </TabItem>
</Tabs>


**Exemplo**
- Mostrando um valor na tela

<Tabs groupId="language">
  <TabItem value="apple" label="Portugol" default>

  ```
  altura ← 50
  escreva(altura)
  ```

  </TabItem>
  <TabItem value="orange" label="Java">

  ```java
  int altura = 50;
  System.out.println(altura);
  ```

  </TabItem>
  <TabItem value="banana" label="Python">

  ```python
  altura = 50
  print(altura)
  ```

  </TabItem>
</Tabs>



Saída na tela:
```
50
```

É possível também apresentar diversos valores de uma única vez em uma única saída.

**Exemplo**  

<Tabs groupId="language">
  <TabItem value="apple" label="Portugol" default>

  ```
  nome ← "Dunga";
  idade ← 35;
  escreva(nome, "tem", idade, "anos de idade.");
  ```

  </TabItem>
  <TabItem value="orange" label="Java">

  ```java
  String nome = "Dunga";
  int idade = 35;
  System.out.printf("%s tem %d anos de idade.\n", nome, idade)
  ```

  **Atenção** ao **f** no `printf`!

  </TabItem>
  <TabItem value="banana" label="Python">

  ```python
  nome = Dunga
  idade = 35
  print(f"{nome} tem {idade} anos de idade")
  ```

  </TabItem>
</Tabs>


### Entrada de dados

A entrada de dados é a maneira como o usuário pode inserir dados para dentro do algoritmo. Aqui utilizaremos a função `leia()`.

**Exemplo**  
- Solicite ao usuário que digite seu nome

```
leia(nome)
```

No exemplo, o nome do usuário será armazenado em uma variável chamada `nome`.

**Exemplo**
- Pergunte ao usuário seu nome e idade. Em seguida, mostre na tela as informações digitadas.

<Tabs groupId="language">
  <TabItem value="apple" label="Portugol" default>

  ```
  inicio;

  //Variáveis
  caracterer nome;
  inteiro idade;

  //Entrada
  escreva("Nome: ");
  leia(nome);
  escreva("Idade: ");
  leia(idade);

  //Saída
  escreva(nome, " tem ", idade, " anos de idade.");

  fim.
  ```

  </TabItem>
  <TabItem value="orange" label="Java">

  ```java
  //Variáveis
  String nome;
  int idade;

  //Entrada
  Scanner ler = new Scanner(System.in);

  System.out.println("Nome: ");
  nome = ler.next();
  System.out.println("Idade: ");
  idade = ler.nextInt();

  //Saída
  System.out.printf("%s tem %d anos de idade.\n", nome, idade);
  ```

  **Atenção** ao uso da função `printf`.

  </TabItem>
  <TabItem value="banana" label="Python">

  ```python
  #Entrada
  nome = input("Nome: ")
  idade = input("Idade: ")

  #Saída
  print(f"{nome} tem {idade} anos de idade")
  ```

  </TabItem>
</Tabs>



No exemplo, o nome do usuário será armazenado em uma variável chamada `nome`. Na continuação do algoritmo, este valor pode ser utilizado, acessando o conteúdo da variável.

- Solicite ao usuário que digite um número. Em seguida, mostre na tela o número digitado.

<Tabs groupId="language">
  <TabItem value="apple" label="Portugol" default>

  ```
  inicio;
  //variaveis
  inteiro: valor;

  //entrada
  escreva("Digite um valor: ");
  leia(valor);

  //saida
  escreva("O valor digitado foi ", valor)

  fim.
  ```

  </TabItem>
  <TabItem value="orange" label="Java">

  ```java
  import java.util.Scanner;
  //variaveis
  int valor;

  //entrada
  Scanner entrada = new Scanner(System.in);
  System.out.print("Digite um valor: ");
  valor = entrada.nextInt();

  //saida
  System.out.printf("O valor digitado foi %d\n", valor);
  ```

  </TabItem>
  <TabItem value="banana" label="Python">

  ```python
  valor = input("Digite um valor: ")
  print(f"O valor digitado foi {valor}")
  ```

  </TabItem>
</Tabs>

**Exercícios**  
- Desenvolva um algoritmo que pergunta ao usuário o nome do usuário, e em seguida responde "Boa noite, `user`", substituindo `user` pelo nome digitado.

<details>
  <summary>Resposta</summary>
<Tabs groupId="language">
  <TabItem value="apple" label="Portugol" default>

  ```
  inicio;
  //variaveis
  caractere: nome;

  //entrada
  escreva("Seu nome: ");
  leia(nome);

  //saida
  escreva("Boa noite, ", nome)

  fim.
  ```

  </TabItem>
  <TabItem value="orange" label="Java">

  ```java
  import java.util.Scanner;
  //variaveis
  String nome;

  //entrada
  Scanner entrada = new Scanner(System.in);
  System.out.print("Seu nome: ");
  nome = entrada.next();

  //saida
  System.out.printf("Boa noite %s\n", nome);
  ```

  </TabItem>
  <TabItem value="banana" label="Python">

  ```python
  #entrada
  nome = input("Seu nome: ")

  #saida
  print(f"Boa noite, {valor}")
  ```

  </TabItem>
</Tabs>
</details>

- Faça um algoritmo que pergunta ao usuário a sua idade, e em seguida informa a mensagem "Você tem `X` anos", substituindo `X` pela idade digitada.

- Faça um algoritmo que pergunta ao usuário um valor. Em seguida, mostra esse valor elevado ao quadrado.

- Desenvolva um algoritmo que calcula a média entre dois valores informados pelo usuário.
