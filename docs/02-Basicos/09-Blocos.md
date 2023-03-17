---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Blocos de código

É comum em algoritmos e linguagens de programação a delimitação de trechos de código. A tais delimitações chamamos de bloco.

**Exemplo**  
O exemplo apresentado abaixo apresenta apenas a estrutura para definição de códigos, ele não faz parte da solução de nenhum problema específico. É apenas a ilustração da subdivisão de um código em blocos.

<Tabs groupId='language'>
  <TabItem value="portugol" label="Portugol" default>

  ```c showLineNumbers
  início
    //comando 1
    //comando 2
    // highlight-start
    início              //<-- Início do bloco
        //comando 3
        //comando 4
        //comando 5
    fim;                //<-- Término do bloco
    // highlight-end
    // comando 6
    // comando 7
  fim.
  ```

  Adaptado de ([Forbellone 2022, p. 43](https://plataforma.bvirtual.com.br/Leitor/Publicacao/323/pdf/))


  </TabItem>
  <TabItem value="java" label="Java">

   ```c showLineNumbers
  {
    // comando 1 ;
    // comando 2 ;
    // highlight-start
    {                   //<-- Início do bloco
        // comando 3 ;
        // comando 4 ;
        // comando 5 ;
    }                   //<-- Término do bloco
    // highlight-end
    // comando 6 ;
    // comando 7 ;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python showLineNumbers
    # comando 1
    # comando 2
    # highlight-start
        # comando 3     #<-- Início do bloco
        # comando 4
        # comando 5     #<-- Término do bloco
    # highlight-end
    # comando 6 ;
    # comando 7 ;
  ```

Em Python, os blocos são definidos pela indentação do código, ou seja, pelo alinhamento no início de cada linha do código. Este alinhamento pode ser feito por caracteres *tab* ou *espaços*.

  </TabItem>
</Tabs>



