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
    var nextVertex = this.vertices[sink];
    var sinkVertex = this.vertices[sink];
    var path = [];
    var minimumEdgeWeight = Infinity;
    var flowSum = [];

    var reachedEnd = false;
    while (sinkVertex.isReachable()) {
      while (!reachedEnd) {
        if (sourceVertex.index != sinkVertex.index) {
          let maximumWeightEdge = sourceVertex.getMaximumWeightEdge();
          if (maximumWeightEdge == null) { // Verificar
            edge = path.pop();
            edge.setIsVisited(false);
            sourceVertex = edge.originVertex;
            console.log(sourceVertex);
          } else if (maximumWeightEdge.getWeight() < minimumEdgeWeight) {
            minimumEdgeWeight = maximumWeightEdge.getWeight();
            console.log(minimumEdgeWeight)
          } else if (maximumWeightEdge.getWeight() == 0) {
            reachedEnd = true;
          } else {
            maximumWeightEdge.setIsVisited(true);
            path.push(maximumWeightEdge);
            sourceVertex = maximumWeightEdge.getStartVertex();
            nextVertex = maximumWeightEdge.getEndVertex();
          }
        } else {
          reachedEnd = true;
          flowSum.push(backAndSubtract(path, minimumEdgeWeight));
        }
      }
    }


  }

  backAndSubtract(path, minimumEdgeWeight) {
    var edge;
    var newMinimumEdgeWeight = Infinity;
    while (!path.isEmpty()) {
      edge = path.pop();
      edge.setIsVisited(false);
      edgeActualWeight = edge.getWeight();
      newEdgeWeight = edgeActualWeight - minimumEdgeWeight;
      if ((newEdgeWeight) > 0) {
        edge.setWeight(newEdgeWeight);
      } else {
        edge.setWeight(0);
      }
      if (newEdgeWeight < newMinimumEdgeWeight) {
        newMinimumEdgeWeight = newEdgeWeight;
      }
    }
    return newMinimumEdgeWeight;
  }


}

module.exports = Graph;
