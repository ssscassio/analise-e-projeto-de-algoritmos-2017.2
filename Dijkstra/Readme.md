# Algoritmo de Dijkstra

## Propósito
Encontrar o menor caminho entre dois nós em um grafo.
- V -> Vertice -> Vértice
- E -> Edge -> Aresta
- S -> Source -> Nó de saída da aresta
- D -> Destiny -> Nó de destino da aresta
- W -> Weight -> Peso da aresta

## Restrições
- Arestas não podem possuir peso negativo

## Complexidade

O Algoritmo de Dijkistra original não usa uma fila de prioridade mínima o que faz com que sua complexidade Big-O seja de **O(|V|\*|V|)**.
A implementação baseada em uma fila de prioridade mínima executa em complexidade **O(((|E|+|V|)\*log(|V|))** 

### *Fila de prioridade*
  - A fila de prioridade é similar a uma estrutura de dados de fila porém, a cada elemento é associado uma *'prioridade'*. Na fila de prioridade, um elemento com maior prioridade é servido antes de um elemento com menor prioridade. Se dois elementos tem a mesma prioridade, então eles são servidos de acordo com a ordem na fila.


## Arquivo de entrada
- **V** -> Número de vertices
- **E** -> Número de Arestas
- **S D W** -> Aresta 
- **{...}** 
