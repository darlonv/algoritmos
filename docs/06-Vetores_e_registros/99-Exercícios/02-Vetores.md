# Vetores

1. Elaborar um programa que leia 8 números inteiros e exiba quantos são maiores que a média desses valores.

1. Leia dois vetores VA e VB de 10 posições cada um, contendo valores inteiros. Em seguida, gere um vetor VC com 20 posições, contendo os valores de VA nas posições pares e os valores de VB nas posições ímpares.

1. Elaborar um programa que leia um vetor C de 10 elementos inteiros. Após o término da leitura, trocar todos os valores negativos do vetor C por 0. Após todas as trocas terem sido efetuadas, escrever o novo vetor C.

1. Elaborar um programa que leia 6 número e exiba:
    - o maior número lido;
    - o menor número lido;
    - quantos números são iguais ao primeiro número.

1. Leia um vetor A, com 10 elementos. Crie em vetor B da seguinte forma:
    - coloque os números pares primeiro;
    - coloque os números ímpares logo após os pares;
    - exiba o vetor B.

1. Ler um conjunto de números reais, armazenando-o em vetor e calcular o quadrado das componentes deste vetor, armazenando o resultado em outro vetor. Os conjuntos tem 10 elementos cada. Imprimir todos os conjuntos.

1. Elaborar um programa que leia um vetor com 20 números inteiros. Escreva os elementos do vetor eliminando elementos repetidos.

1. Elaborar um programa que leia um vetor de 10 posições. Contar e escrever quantos valores pares ele possui.

1. Elaborar um programa que leia um vetor de 5 posições para números reais e, depois, um código inteiro. Se o código for zero, finalize o programa; se for 1, mostre o vetor na ordem direta; se for 2, mostre o vetor na ordem inversa. Caso, o código for diferente de 1 e 2 escreva uma mensagem informando que o código é inválido

1. Elaborar um programa com um vetor de tamanho 50 preenchido com o seguinte valor: $(i + 5i)\%(i + 1)$, sendo i a posição do elemento no vetor. Em seguida imprima o vetor na tela.

1. Elaborar um programa que receba do usuário dois vetores, A e B, com 10 números inteiros cada. Crie um novo vetor denominado C calculando $C = A − B$. Mostre na tela os dados do vetor C.

1. Ler dois conjuntos de números reais, armazenando-os em vetores e calcular o produto escalar entre eles. Os conjuntos tem 5 elementos cada. Imprimir os dois conjuntos e o produto escalar, sendo que o produto escalar e dado por: x1 ∗ y1 + x2 ∗ y2 + ... + xn ∗ yn.

1. Elaborar um programa que leia dez conjuntos de dois valores, o primeiro representando o número do aluno e o segundo representando a sua altura em metros. Encontre o aluno mais baixo e o mais alto. Mostre o número do aluno mais baixo e do mais alto, juntamente com suas alturas.

1. Ler as notas finais de uma turma de 10 alunos armazenando-as em um vetor N. A seguir calcule a média aritmética das notas dos alunos aprovados (nota >= 6,0). Armazene em um vetor P a posição (índice) que cada aluno ocupa no vetor N, dos alunos que obtiveram nota maior que a mádia calculada. Imprimir a média calculada, em ordem crescente e logo após o vetor P.

1. Use um vetor unidimensional para resolver o seguinte problema. Uma companhia paga seus vendedores com base em comissões. O vendedor recebe R$200 por semana mais 9 por cento de suas vendas brutas daquela semana. Por exemplo, um vendedor que teve vendas brutas de R$3000 em uma semana recebe R$200 mais 9 por cento de R$3000, ou seja, um total de R$470. Escreva um programa em C (usando um vetor de contadores) que determine quantos vendedores receberam salários nos seguintes intervalos de valores (considere que o salário de cada vendedor é trancado para que seja obtido um valor inteiro):
    - 1: R$200-R$299
    - 2: R$300-R$399
    - 3: R$400-R$499
    - 4: R$500-R$599
    - 5: R$600-R$699
    - 6: R$700-R$799
    - 7: R$800-R$899
    - 8: R$900-R$999
    - 9: R$1000 em diante

1. Use um vetor unidimensional para resolver o seguinte problema. Leia 20 números, todos situados entre 0 e 100, inclusive. À medida que cada número for lido, imprima-o somente se não for duplicata de um número já lido. Experimente o "pior caso", no qual todos os 20 números são diferentes.

1. Uma pequena companhia aérea acabou de comprar um computador para o seu novo sistema automático de reservas. O presidente pediu a você que programasse o novo sistema em C. Você deve escrever um programa para atribuir assentos a cada voo do único avião da companhia (capacidade: 20 assentos). Seu programa deve exibir o seguinte menu de alternativas:
    - Favor digitar 1 para "vip"
    - Favor digitar 2 para "normal"
Se a pessoa digitar 1, seu programa deve fazer a reserva de um assento no setor vip (assentos 1-5). Se a pessoa digitar 2, seu programa deve reservar um assento no setor de normal (assentos 6-20). Seu programa deve então imprimir um cartão de embarque indicando o número do assento do passageiro e se ele se encontra no setor vip ou normal do avião. Use um vetor unidimensional para representar o esquema dos assentos do avião. Inicialize todos os elementos do vetor com 0 para indicar que todos os assentos estão livres. A medida que cada assento for reservado, iguale os elementos correspondentes a 1 para indicar que o assento não está mais disponível. Seu programa nunca deve, obviamente, reservar um assento que já tenha sido ocupado. Quando o setor vip estiver lotado, seu programa deve perguntar se a pessoa aceita um lugar no setor normal (e vice-versa). Em caso positivo, faça a reserva apropriada do assento. Em caso negativo, imprima a mensagem "Próximo voo sai em 3 horas".

1. Elabore um programa e funções que transforme um inteiro positivo em um número romano. Projete o programa de forma que possa executá-lo repetidamente até que o valor zero seja introduzido. Obs.: dica utilizar vetores.

1. Escreva um programa que leia um numero inteiro positivo n e em seguida imprima n linhas do chamado Triangulo de Pascal:
    ```
    1
    1 1
    1 2 1
    1 3 3 1
    1 4 6 4 1
    1 5 10 10 5 1
    ```

1. Em uma cidade do interior, sabe-se que, de janeiro a abril de 1976 (121 dias), não ocorreu temperatura inferior a 15oC nem superior a 40oC. As temperatura verificadas em cada dia estão disponíveis em uma unidade de entrada de dados. Fazer um algoritmo que calcule e escreva:

    - a menor temperatura ocorrida;
    - a maior temperatura ocorrida;
    - a temperatura média
    - o número de dias nos quais a temperatura foi inferior a média à temperatura média.

1. Um armazém trabalha com 100 mercadorias diferentes identificadas pelos números inteiros de 1 a 100. O dono do armazém anota a quantidade de cada mercadoria vendida durante o mês. Ele tem uma tabela que indica, para cada mercadoria, o preço de venda. Escreva um algoritmo para calcular o faturamento mensal do armazém. A tabela de preços é fornecida seguida pelos números das mercadorias e as quantidades vendidas. Quando uma mercadoria não tiver nenhuma venda, é informado o valor zero no lugar da quantidade.

1. O Sr. José possui uma tornearia que produz 150 tipos de peças e quer automatizar o controle de estoque através de um programa de computador. Porém, Como o Sr.José está receoso quanto à utilização de tecnologias, ele decidiu fazer a implantação gradativa do sistema. A primeira etapa consiste no cadastramento, ao final do expediente, da produção do dia. Considerando que, pelo menos, uma peça de cada tipo é produzida por dia, faça um programa para que ao final de cada mês (30 dias) escreva o total de cada peça produzida naquele mês, no final do ano imprima um relatório de produção dos 12 meses.

1. Uma grande empresa com mais de 250 funcionários deseja saber quais são os cinco empregados mais recentes. Portanto, Elaborar um programa e funções para ler um número indeterminado de informações (máximo de 300) contendo o número do empregado e o número de meses de trabalho deste empregado e escrever os três mais recentes. Observações: A última informação contém os dois números iguais a zero. Não existem dois empregados admitidos no mesmo mês.

1. Uma empresa deseja fazer um levantamento do seu estoque. Para isto possui para cada tipo de produto, o seu Nome, o valor unitário e a sua quantidade em estoque. A empresa deseja emitir um relatório contendo, o Nome, quantidade, valor, unitário e o saldo ( valor total ) em estoque de cada tipo de produto. Ao final deseja-se saber quantos tipos de produtos existem em estoque e o saldo de todos os produtos.

