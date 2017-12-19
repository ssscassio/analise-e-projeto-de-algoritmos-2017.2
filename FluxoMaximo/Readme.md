# Algoritmo de Fluxo Máximo

## Propósito
Encontrar um fluxo de valor máximo que faça o melhor uso possível das capacidades disponíveis na rede em questão.
- V -> Vertice -> Vértice
- E -> Edge -> Aresta
- S -> Source -> Nó de saída da aresta
- D -> Destiny -> Nó de destino da aresta
- W -> Weight -> Peso da aresta
- Source -> Fonte -> Nó de inicio do fluxo
- Sumidouro -> Terminal -> Nó de finalização do fluxo

## Restrições
- Valor de fluxo não irracionais


## Implementação

1. O fluxo em uma aresta não deve exceder a capacidade ja definida dessa aresta.

2. O fluxo de entrada deve ser igual ao de saída para cada vértice, excluindo desses os vértices Fonte e Sumidouro.


## Complexidade
Na maioria das implementações, o caminho de aumento mais curto é encontrado usando uma busca em largura, a qual roda em um tempo de **O(VEE)**


## Arquivo de entrada
- **V** -> Número de vertices
- **E** -> Número de Arestas
- **S D W** -> Aresta 
- **{...}** -> E repetições de arestas
- **Source** -> Vértice de início do fluxo
- **Sumidouro** -> Vértice de finalização
