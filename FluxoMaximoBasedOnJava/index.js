const // Importações globais
  Graph = require('./graph'),
  FileStream = require('fs');


const main = (err, data) => {
  lines = data.split(/\r?\n/);
  const
    vertices = parseInt(lines[0]),
    edges = parseInt(lines[1]);
  const
    source = parseInt(lines[lines.length - 2]),
    sink = parseInt(lines[lines.length - 1]);
  let g = new Graph(vertices);

  for (i = 2; i < edges + 2; i++) {
    edge = lines[i].split(" ");
    begin = parseInt(edge[0]);
    end = parseInt(edge[1]);
    weight = parseInt(edge[2]);
    // Formato de entrada: A B C 
    // A -> Nó de saida
    // B -> Nó de destino
    // C -> Peso
    g.addEdge(begin, { [end]: weight });
  }

  console.log(g.maxFlow(source, sink));

}

// Leitura do arquivo de entrada
let fileName = 'FluxoMaximoBasedOnJava/graphData.txt';
FileStream.readFile(fileName, 'utf8', main);