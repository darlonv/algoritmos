---
sidebar_position: 8
---

```python
import base64
from IPython.display import Image, display
import matplotlib.pyplot as plt

def mm(graph):
  graphbytes = graph.encode("ascii")
  base64_bytes = base64.b64encode(graphbytes)
  base64_string = base64_bytes.decode("ascii")
  display(Image(url="https://mermaid.ink/img/" + base64_string))
```

# Representação de algoritmos

Os algoritmos podem ser representados de duas maneiras principais:

1. Textual
1. Fluxograma

Os algoritmos também podem ser representados utilizando os Diagramas de Chapin, porém estes não serão abordados neste material.

## Descritivo

A representação descritiva utiliza texto para expressar o que deve ser executado no algoritmo. Esta é a abordagem tradicional, e cada linha representa uma ação a ser realizada.

**Exemplo**  
- Média de dois números

```
inicio; //Identificação do bloco correspondente ao algoritmo

//Declaração de variáveis
inteiro: valor_1, valor_2;
inteiro: soma;
real: media;

//Corpo do algoritmo
//Entrada de dados
leia(valor_1);
leia(valor_2);

//Processamento da informação
soma = valor_1 + valor_2;
media = soma / 2;

//Saída de dados
escreva("Média: ", media);


fim; //Fim do algoritmo
```

## Fluxograma


```python
mm("""
flowchart TD
    inicio(Inicio)
    variaveis(real: valor_1<br>real: valor_2<br>real:soma)
    entrada(leia &#40valor_1&#41 <br> leia &#40valor_2&#41 )
    calculo(soma = valor_1 + valor_2<br>media = soma/2)
    saida(escreva &#40valor_1&#41 <br> escreva &#40valor_2&#41 )
    fim(Fim)
    inicio --> variaveis --> entrada --> calculo --> saida --> fim
""")
```


<img src="https://mermaid.ink/img/CmZsb3djaGFydCBURAogICAgaW5pY2lvKEluaWNpbykKICAgIHZhcmlhdmVpcyhyZWFsOiB2YWxvcl8xPGJyPnJlYWw6IHZhbG9yXzI8YnI+cmVhbDpzb21hKQogICAgZW50cmFkYShsZWlhICYjNDB2YWxvcl8xJiM0MSA8YnI+IGxlaWEgJiM0MHZhbG9yXzImIzQxICkKICAgIGNhbGN1bG8oc29tYSA9IHZhbG9yXzEgKyB2YWxvcl8yPGJyPm1lZGlhID0gc29tYS8yKQogICAgc2FpZGEoZXNjcmV2YSAmIzQwdmFsb3JfMSYjNDEgPGJyPiBlc2NyZXZhICYjNDB2YWxvcl8yJiM0MSApCiAgICBmaW0oRmltKQogICAgaW5pY2lvIC0tPiB2YXJpYXZlaXMgLS0+IGVudHJhZGEgLS0+IGNhbGN1bG8gLS0+IHNhaWRhIC0tPiBmaW0K"/>



```python
mm("""
flowchart TD
    inicio(Inicio)
    variaveis[real: valor_1<br>real: valor_2<br>real:soma]
    calculo[soma = valor_1 + valor_2<br>media = soma/2]
    fim(Fim)
    inicio --> variaveis --> calculo --> fim
""")
```


<img src="https://mermaid.ink/img/CmZsb3djaGFydCBURAogICAgaW5pY2lvKEluaWNpbykKICAgIHZhcmlhdmVpc1tyZWFsOiB2YWxvcl8xPGJyPnJlYWw6IHZhbG9yXzI8YnI+cmVhbDpzb21hXQogICAgY2FsY3Vsb1tzb21hID0gdmFsb3JfMSArIHZhbG9yXzI8YnI+bWVkaWEgPSBzb21hLzJdCiAgICBmaW0oRmltKQogICAgaW5pY2lvIC0tPiB2YXJpYXZlaXMgLS0+IGNhbGN1bG8gLS0+IGZpbQo="/>


Observe que nos fluxogramas há partes que correspondem ao início, declaração de variáveis, processamento e fim do algoritmo, como apresentado a seguir.


```python
mm("""
flowchart TD
    subgraph Inicio do algoritmo
    inicio(Inicio)
    end
    subgraph Variaveis a serem utilizadas
    variaveis[real: valor_1<br>real: valor_2<br>real:soma]
    end
    subgraph Processamento
    calculo[soma = valor_1 + valor_2<br>media = soma/2]
    end
    subgraph Fim do algoritmo
    fim(Fim)
    end
    inicio --> variaveis --> calculo --> fim
""")
```


<img src="https://mermaid.ink/img/CmZsb3djaGFydCBURAogICAgc3ViZ3JhcGggSW5pY2lvIGRvIGFsZ29yaXRtbwogICAgaW5pY2lvKEluaWNpbykKICAgIGVuZAogICAgc3ViZ3JhcGggVmFyaWF2ZWlzIGEgc2VyZW0gdXRpbGl6YWRhcwogICAgdmFyaWF2ZWlzW3JlYWw6IHZhbG9yXzE8YnI+cmVhbDogdmFsb3JfMjxicj5yZWFsOnNvbWFdCiAgICBlbmQKICAgIHN1YmdyYXBoIFByb2Nlc3NhbWVudG8KICAgIGNhbGN1bG9bc29tYSA9IHZhbG9yXzEgKyB2YWxvcl8yPGJyPm1lZGlhID0gc29tYS8yXQogICAgZW5kCiAgICBzdWJncmFwaCBGaW0gZG8gYWxnb3JpdG1vCiAgICBmaW0oRmltKQogICAgZW5kCiAgICBpbmljaW8gLS0+IHZhcmlhdmVpcyAtLT4gY2FsY3VsbyAtLT4gZmltCg=="/>

