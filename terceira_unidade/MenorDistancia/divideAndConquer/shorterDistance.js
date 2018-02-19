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
    if (end <= begin + 1)
        if (end == begin)
            return {
                distance: Infinity,
                p1: points[begin],
                p2: points[end]
            }
        else
            return {
                distance: calcDistance(points[end], points[begin]),
                p1: points[begin],
                p2: points[end]
            };
    else {
        midIndex = parseInt((begin + end) / 2);
        left = shorterDistanceRecursive(points, begin, midIndex);
        right = shorterDistanceRecursive(points, midIndex + 1, end);
        distance = Math.min(left.distance, right.distance, calcDistance(points[midIndex + 1], points[midIndex]));
        if (distance == left.distance) return left;
        else if (distance == right.distance) return right;
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