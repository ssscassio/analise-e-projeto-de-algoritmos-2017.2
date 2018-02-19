# Algoritmo da Menor Distância numa Fila

## Propósito
Dado um conjunto de pontos unidimensionais, ou seja, possuindo apenas uma coordenada, encontrar o par com menor distância entre si.

## Aproximações e execução

### **[Força bruta](./brute/shorterDistance.js)**
- O algoritmo faz análise de *todos com todos* os pontos para verificar qual combinação tem a menor distância entre si e no final da execução, retorna o ultimo conjunto salvo como menor.
- A complexidade de tempo desse algoritmo é de **O(N<sup>2</sup>)**

### **Divisão e Conquista** ###
- Essa modelagem de algoritmo consiste em dividir no meio um problema grande, através da recursividade, em problemas menores até que o se chegue em uma solução básica e direta.
- O algoritmo possui algumas etapas fundamentais que o caracterizam como Divisão e Conquista.
 1. Inicialmente os pontos são ordenados em tempo **O(N log N)** através do **MergeSort**
 2. O primeiro passo da Divisão e Conquista é a **Divisão**, a qual separa o vetor de pontos no meio e o faz recursivamente até chegar a um valor unitário.
 3. Em seguida vem a **Conquista**, consistindo em calcular os valores dos problemas menores, no caso a distância do par.
 4. O passo adiante é chamado **Combinação**, pois nesse momento, os valores das soluções base serão devolvidos para encontrar as soluções maiores, chegando ao topo na solução principal.
 - A complexidade de tempo desse algoritmo é de **O(N log N)**
 
