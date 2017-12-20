class Graph {
  constructor(numberOfVertices) {
    this.vertices = {};
    this.addVertices(numberOfVertices);
  }

  /**
   * Inicializa o gráfo com um certo número de nós
   * @param {Number} numberOfVertices Número de nós que existem no grafo
   */
  addVertices(numberOfVertices) {
    for (let verticeIndex = 0; verticeIndex < numberOfVertices; verticeIndex++) {
      this.vertices[verticeIndex] = {}
    }
  };

  /**
   * Adiciona uma nova aresta no grafo conectando dois nós existentes
   * @param {Number} source Nó de origem da aresta
   * @param {Object} endObject Objeto de aresta no qual a chave 
   * é o nó de destino e o valor é o peso da aresta
   */
  addEdge(source, endObject) {
    this.vertices[source] = Object.assign(this.vertices[source], endObject);
  }

  /**
   * Calcula o fluxo máximo em um determinado grafo a partir de um vértice
   * de partida (source) e um de destino (sink)
   * @param {Number} source Nó (vértice) inicial do fluxo
   * @param {Number} sink Nó (vértice) destino do fluxo
   * @return {Number} maxFlow Somatório dos fluxos das iterações
   */
  maxflow(source, sink) {
    let maxFlow = 0;
    let previous = {};
    var visited = {};

    //Faz uma cópia do grafo no grafo residual
    let residualGraph = Object.assign({}, this.vertices);
    //Enquanto o Nó de destino for alcançavel
    while (this.bfs(source, sink, previous, visited, residualGraph)) { // Complexidade O(VE)
      var flow = Infinity;

      var vertex = sink;
      while (vertex != source) {
        var last = previous[vertex];
        if (residualGraph[last][vertex] < flow) { //Caso o valor da aresta em questão seja menor que o fluxo atual:
          flow = residualGraph[last][vertex];   //Substitui-se o valor do fluxo pelo valor menor.
        }
        vertex = previous[vertex];
      }

      //No bloco seguinte percorre-se do último ao primeiro vertice subtraindo do peso das arestas
      // o valor do fluxo econtrado nesse caminho. 
      vertex = sink;
      while (vertex != source) { //Enquanto não for o vértice de origem
        var last = previous[vertex];
        residualGraph[last][vertex] -= flow; //O peso da aresta será subtraido pelo valor do fluxo
        maxFlow += flow; //Fluxo máximo é acrescido do valor de fluxo do caminho encontrado

        vertex = previous[vertex];//Retorna ao vértice anterior
      }
    }

    return maxFlow;
  }

  /** 
  * Verifica-se ainda há meios de se chegar ao destino
  * @param {Number} source Nó de origem 
  * @param {Number} sink Nó destino
  * @param {Object} previous Nós antecessores do nó atual (Contrução do caminho) 
  * @param {Object} visited Contém a informação se o nó ja foi visitado ou não
  * @param {Object} residualGraph Cópia do grafo na forma original
  * @return {boolean} Retorna verdadeiro caso ainda restem meios a se chegar no destino
  */
  bfs(source, sink, previous, visited, residualGraph) {
    // Limpar previous
    for (var prop in previous) { if (previous.hasOwnProperty(prop)) { delete previous[prop]; } }
    // Limpar visited
    for (var prop in visited) { if (visited.hasOwnProperty(prop)) { delete visited[prop]; } }

    var queue = [source];

    visited[source] = true;

    while (queue.length) {

      var vertex = queue.shift();

      //Para cada aresta, verifica se possui peso maior que 0 e se não foi visitada
      for (edge in residualGraph[vertex]) {
        if (residualGraph[vertex][edge] > 0 && !visited[edge]) {
          previous[edge] = vertex;
          queue.push(edge);
          visited[edge] = true;
        }
      }
    }

    return visited[sink] ? true : false;
  }
}

module.exports = Graph;