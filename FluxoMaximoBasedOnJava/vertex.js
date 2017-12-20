const Edge = require('./edge');

class Vertex {
  constructor(index) {
    this.index = index;
    this.edges = {};
  }

  addEdge(origin, destiny, weight) {
    edge = new Edge(origin, destiny, weight);
    this.edges[destiny.getIndex()] = edge;
  }

  getIndex() {
    return this.index;
  }

  getMaximumWeightEdge() {
    let maximumWeight = 0;
    let maximumEdge = null;
    for (edge in this.edges) {
      if (this.edges[edge].getWeight() > maximumWeight) {
        maximumWeight = this.edges[edge].getWeight();
        maximumEdge = this.edges[edge];
      }
    }
    return maximumEdge;
  }

  deleteEdge(origin, destiny) {
    delete this.edge[destiny]
  }

}

module.exports = Vertex;