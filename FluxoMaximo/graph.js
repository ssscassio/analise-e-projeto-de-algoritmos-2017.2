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

  distance(path) {
    let weight = 0;
    for (i = 0; i < path.length - 1; i++) {
      weight += this.vertices[path[i]][path[i + 1]]
    }
    return weight;
  }
}

module.exports = Graph;