const // Importações globais
  FileStream = require('fs'),
  shorterDistance = require('./shorterDistance');


const main = (err, data) => {
  lines = data.split(/\r?\n/);

  const numberOfPoints = parseInt(lines[0]);
  const points = []
  for (i = 1; i < numberOfPoints + 1; i++) {
    point = lines[i].split(" ");
    x = parseInt(point[0]);
    y = parseInt(point[1]);
    points.push({ x, y });
  }
  let {distance, p1, p2} = shorterDistance(points);
  
  console.log(`A menor distância é ${distance} e os pontos são (${(p1.x)},${(p1.y)}) e (${(p2.x)},${(p2.y)})`);
}

// Leitura do arquivo de entrada
let fileName = `${process.argv[1]}/pointsData.txt`;
FileStream.readFile(fileName, 'utf8', main);