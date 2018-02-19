module.exports = function (points) {
    // Ordenar os pontos pela cordenada X
    sort(points);
    return shorterDistanceRecursive(points, 0, points.length - 1);
}

/**
 * Calcula recursivamente a menor distância em um sub vetor ordenado
 * @param {Array} points Array de pontos na reta
 * @param {Number} begin Indice do inicio da divisão
 * @param {Number} end Indice do fim da divisão
 */
function shorterDistanceRecursive(points, begin, end) {
    //Caso tenha-se chegado à um vetor com 2 ou menos valores
    if (end <= begin + 1)
        //Para um vetor com 1 valor
        if (end == begin)
            //Retorna-se o caso base:
            //Distancia de 1 para ele mesmo é desconsiderada
            return {
                distance: Infinity,
                p1: points[begin],
                p2: points[end]
            }
        //Para um vetor com 2 valores
        else
            //Calcula-se a distancia entre eles
            //Retorna-se o valor encontrado e os respectivos pontos.
            return {
                distance: calcDistance(points[end], points[begin]),
                p1: points[begin],
                p2: points[end]
            };
    else {
        //Divide-se o vetor no meio
        midIndex = parseInt((begin + end) / 2);
        //Recursivamente aplica-se a mesma função para cada lado do vetor bipartido
        left = shorterDistanceRecursive(points, begin, midIndex);
        right = shorterDistanceRecursive(points, midIndex + 1, end);
        //Depois de computadas as distâncias através da recursividade
        // calcula-se o menor valor entre a menor distância encontrada à Direita, à Esquerda
        // e entre os valores centrais
        distance = Math.min(left.distance, right.distance, calcDistance(points[midIndex + 1], points[midIndex]));
        //Caso a distancia à esquerda seja a menor, retorna-se Left que contem internamente os pontos associados
        if (distance == left.distance) return left;
        //Mesmo comportamento para a Direita
        else if (distance == right.distance) return right;
        //Mesmo comportamento para caso seja a distancia entre os elementos centrais
        else return { distance, p1: points[midIndex], p2: points[midIndex + 1] }

    }
}

/**
 * Ordena os pontos baseado na cordenada x do mesmo
 * @param {Array} points Vetor com os pontos da reta
 * @returns {Array} Vetor ordenado
 */
function sort(points) {
    return points.sort(function (a, b) {
        return a.x - b.x;
    });
};


/**
 * Calcula a distância entre dois pontos passados como parâmetro
 * @param {Object} a Ponto A, objeto com x que representa sua coordenada em uma reta
 * @param {Object} b Ponto B, objeto com x que representa sua coordenada em uma reta
 */
function calcDistance(a, b) {
    return Math.abs((b.x - a.x))
}