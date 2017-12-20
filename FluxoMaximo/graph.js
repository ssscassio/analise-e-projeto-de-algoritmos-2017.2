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
    var sum = 0;
    var flows = this.vertices;
    var previous = {};

    var larger = null;
    for (edge in this.vertices[source]) {
      if (larger == null) {
        larger = this.vertices[source]
      }
      console.log(this.vertices[source][edge]);
    }


    return 'Teste'
  }

  bfs(capacity, flow, source, sink) {
    let queue = [source];

    while (queue) {
      let vertice = queue.pop();

    }
  }
}

module.exports = Graph;