const PriorityQueue = require('./priorityQueue');

const INFINITY = 1 / 0;


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


  shortestPath(start, finish) {
    var nodes = new PriorityQueue();
    var distances = {}; // Objeto para conter o o valor de distância tentado
    var previous = {};
    var path = [];
    var vertex, neighbor, alt, smallest;

    // Inicializa a fila de prioridade colocando prioridade infinita em todos os nós exceto
    // o nó de inicio que tem prioridade 0
    // Complexidade Total: O(V)
    for (vertex in this.vertices) { // Complexidade O(V)
      if (vertex === start) {
        distances[vertex] = 0; // Distância 0 para o vertice inicial
        nodes.enqueue(0, vertex); // Complexidade O(V*Log(V)) -> Considerando uma ordenação interna por MergeSort
        // Complexidade o(N) -> Considerando Inserção já ordenando
      }
      else {
        distances[vertex] = INFINITY; // Distância infinita para todos os outros vértices
        nodes.enqueue(INFINITY, vertex);
      }
      // Para cada vertice adiciona null a sua lista de antecessor
      previous[vertex] = null;
    }

    // Verifica enquanto ainda tiverem itens na fila de prioridade
    while (!nodes.isEmpty()) { // Complexidade O(V)
      // Pega o elemento com menor 
      smallest = nodes.dequeue();

      // Se o item de menor prioridade na fila for o nó fim, 
      // o caminho foi encontrado, deve retornar o caminho
      if (smallest === finish) {
        path = [];

        // Verifica os antecessores de cada nó e retorna o caminho invertido no fim do while
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      // Se a fila de prioridade não retornar um nó ou o nó ter 
      // distância infinita (Significa que ele não foi relaxado ainda)
      if (!smallest || distances[smallest] === INFINITY) {
        continue;
      }

      // Para cada aresta que sai de um nó verifica o seus vizinhos e aplica o relaxamento
      for (neighbor in this.vertices[smallest]) { // Complexidade O(E)
        alt = distances[smallest] + this.vertices[smallest][neighbor];

        // Verifica se a soma do nó atual e o peso até seu vizinho é menor que a distância salva no nó vizinho
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = smallest;

          nodes.enqueue(alt, neighbor);// Adiciona o nó na fila de prioridade mínima
        }
      }
    }
    return path.concat(start).reverse();
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