const Vertex = require('./vertex');

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
      this.vertices[verticeIndex] = new Vertex(verticeIndex);
    }
  };

  /**
   * Adiciona uma nova aresta no grafo conectando dois nós existentes
   * @param {Number} source Nó de origem da aresta
   * @param {Object} endObject Objeto de aresta no qual a chave 
   * é o nó de destino e o valor é o peso da aresta
   */
  addEdge(source, endObject) {
    const destiny = Object.keys(endObject)[0];
    this.vertices[source].addEdge(this.vertices[source], this.vertices[destiny], endObject[destiny]);
  }

  maxFlow(source, sink) {
    var sourceVertex = this.vertices[source];
    var sinkVertex = this.vertices[sink];
    var reachedEnd = false;
    var canReachEnd = true;

    while (canReachEnd) {
      while (!reachedEnd) {
        if (sourceVertex.index != sinkVertex.index) {

          let maximumWeightEdge = sourceVertex.getMaximumWeightEdge();
          if (maximumWeightEdge.getWeight() == 0) {
            reachedEnd = true;
          } else {
            maximumWeightEdge.setIsVisited(true);
            sourceVertex = maximumWeightEdge.getStartVertex();
            sinkVertex = maximumWeightEdge.getEndVertex();
            console.log(sourceVertex, sinkVertex)
          }
        } else {
          reachedEnd = true;
        }
      }
    }
  }
}

module.exports = Graph;
