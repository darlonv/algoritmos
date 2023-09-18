# Listas

# Listas

Chamamos de **listas** às estrutura de dados dinâmicas que permitem adicionar, remover e alterar seus elementos. 

Cada elemento de uma lista possui, além do espaço para armazenamento da informação em si, a informação de onde o próximo elemento se encontra na memória. Para efeito de comparação, nos vetores todos os elementos eram alocados de uma única vez. Já nas listas, cada elemento é alocado individualmente.

**Exemplo**  

![Listas](imagens/listas.drawio.svg)  
Dados armazenados em uma lista  



![Vetores](imagens/vetores.drawio.svg)  
Dados armazenados em um vetor  


**Sintaxe**

```c

```


```javascript
LinkedList<Integer> valores = LinkedList<Integer>();
int i, k=100, passo=10;

i=0;
while(i<k){
    valores.add(i);
    i+=passo;
}

for(i=0;i<valores.size();i++){
    System.out.println(valores.get(i));
}

```


## Tipos de listas

