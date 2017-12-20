class Graph {
  constructor(numberOfVertices) {
    this.vertices = {};
    this.addVertices(numberOfVertices);
  }

  addVertices(numberOfVertices) {
    for (let verticeIndex = 0; verticeIndex < numberOfVertices; verticeIndex++) {
      this.vertices[verticeIndex] = {}
    }
  };

  addEdge(source, endObject) {
    this.vertices[source] = Object.assign(this.vertices[source], endObject);
  }

  maxflow(source, sink) {
    let maxFlow = 0;
    let previous = {};
    var visited = {};

    //Faz uma cópia do grafo no grafo residual
    let residualGraph = Object.assign({}, this.vertices);
    while (this.bfs(source, sink, previous, visited, residualGraph)) {
      var flow = Infinity;

      var vertex = sink;
      while (vertex != source) {
        var last = previous[vertex];
        if (residualGraph[last][vertex] < flow) {
          flow = residualGraph[last][vertex];
        }
        vertex = previous[vertex];
      }

      vertex = sink;
      while (vertex != source) {
        var last = previous[vertex];
        residualGraph[last][vertex] -= flow;
        maxFlow += flow;

        vertex = previous[vertex];
      }
    }

    return maxFlow;
  }

  bfs(source, sink, previous, visited, residualGraph) {
    // Limpar previous
    for (var prop in previous) { if (previous.hasOwnProperty(prop)) { delete previous[prop]; } }
    // Limpar visited
    for (var prop in visited) { if (visited.hasOwnProperty(prop)) { delete visited[prop]; } }

    var queue = [source];

    visited[source] = true;

    while (queue.length) {

      var vertex = queue.shift();

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