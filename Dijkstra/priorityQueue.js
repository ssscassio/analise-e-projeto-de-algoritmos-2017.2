class PriorityQueue {
  constructor() {
    this.nodes = [];

  }

  /**
   * Adiciona um novo nó na fila de prioridade como um objeto contendo seu identificador e a
   * sua prioridade e ordena a fila baseada na prioridade
   * @param {Number} priority Prioridade do nó
   * @param {Number, String} key Chave identificadora do nó
   */
  enqueue(priority, key) {
    if (this.nodes.length) {
      for (i = 0; i < this.nodes.length; i++) {// Complexidade O(V)
        if (priority < this.nodes[i].priority) {
          this.nodes.splice(i - 1, 0, { key: key, priority: priority });
          break;
        }
      }
      if (i == this.nodes.length) {
        this.nodes.push({ key: key, priority: priority });
      }
    } else {
      this.nodes.push({ key: key, priority: priority });
    }
    //this.nodes.push({ key: key, priority: priority });
    //this.sort(); // Complexidade O(V*Log(V))
  };

  /**
   * Método para remover o primeiro elemento da fila de prioridade e retornar a sua chave
   * @return {String} A chave do nó removido
   */
  dequeue() {
    return this.nodes.shift().key;
  };

  /**
   * Método para ordenar a fila de prioridade baseado na prioridade de cada nó, menor prioridade no inicio da fila
   */
  sort() {
    this.nodes.sort(function (a, b) {
      return a.priority - b.priority;
    });
  };

  /**
   * Método para verificar se a fila está vazia
   * @return {boolean} True - Se a lista estiver vazia; False - Caso contrário
   */
  isEmpty() {
    return !this.nodes.length;
  };
}

module.exports = PriorityQueue;