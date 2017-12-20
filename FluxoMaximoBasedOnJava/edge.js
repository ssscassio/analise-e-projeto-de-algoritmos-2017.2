class Edge {
  constructor(origin, destiny, weight) {
    this.originVertex = origin; // Vertex
    this.endVertex = destiny; // Vertex;
    this.weight = weight;
    this.isVisited = false;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }

  getStartVertex() {
    return this.originVertex;
  }

  setStartVertex(startVertex) {
    this.originVertex = startVertex;
  }

  getEndVertex() {
    return this.endVertex;
  }

  setEndVertex(endVertex) {
    this.endVertex = endVertex;
  }

  setIsVisited(bool) {
    this.isVisited = bool;
  }

  isVisited() {
    return this.isVisited;
  }

}



module.exports = Edge;
