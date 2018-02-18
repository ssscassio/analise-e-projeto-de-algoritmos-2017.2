const // Importações globais
  Graph = require('./graph'),
  FileStream = require('fs');


const main = (err, data) => {
  lines = data.split(/\r?\n/);
  const
    vertices = parseInt(lines[0]),
    edges = parseInt(lines[1]);

  let g = new Graph(vertices);

  for (i = 2; i < edges + 2; i++) {
    edge = lines[i].split(" ");
    source = parseInt(edge[0]);
    end = parseInt(edge[1]);
    weight = parseInt(edge[2]);
    // Formato de entrada: A B C 
    // A -> Nó de saida
    // B -> Nó de destino
    // C -> Peso
    g.addEdge(source, { [end]: weight });
  }
  // Calcular o menor camino entre os nós 0 e 3
  path = g.shortestPath('0', '3');
  length = g.distance(path);

  console.log('Caminho', path);
  console.log('Distância', length);
}


// Leitura do arquivo de entrada
let fileName = 'Dijkstra/graphData.txt';
FileStream.readFile(fileName, 'utf8', main);
