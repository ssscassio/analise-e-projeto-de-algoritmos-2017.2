class Edge {
  constructor(origin, destiny, weight) {
    this.originVertex = origin; // Vertex
    this.endVertex = destiny; // Vertex;
    this.weight = weight;
    this.visited = false;
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
    this.visited = bool;
  }

  isVisited() {
    return this.visited;
  }

}



module.exports = Edge;
