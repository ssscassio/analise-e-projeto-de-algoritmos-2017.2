const // Importações globais
  FileStream = require('fs'),
  shorterDistance = require('./shorterDistance');


const main = (err, data) => {
  lines = data.split(/\r?\n/);

  const numberOfPoints = parseInt(lines[0]);
  const points = []
  for (i = 1; i < numberOfPoints + 1; i++) {
    points.push({ x: parseInt(lines[i]) });
  }
  let { distance, p1, p2 } = shorterDistance(points);

  console.log(`A menor distância é ${distance} e os pontos são (${(p1.x)}) e (${(p2.x)})`);
}

// Leitura do arquivo de entrada
let fileName = `${process.argv[1]}/pointsData.txt`;
FileStream.readFile(fileName, 'utf8', main);