module.exports = function (points) {
    var shorterDistance = Infinity,
        actualDistance,
        finalP1, finalP2;

    for (let i = 0; i < points.length; i++) {
        for (let j = 1 + i; j < points.length; j++) {
            p1 = points[i];
            p2 = points[j];
            actualDistance = calcDistance(p1, p2);
            if (actualDistance < shorterDistance) {
                // Salva a nova menor distância encontrada juntamente com os respectivos pontos
                shorterDistance = actualDistance;
                finalP1 = p1;
                finalP2 = p2;
            }
        }
    }

    return {
        distance: shorterDistance,
        p1: finalP1,
        p2: finalP2
    }
}

/**
 * Calcula a distância euclidiana entre dois pontos passados como parâmetro
 * @param {Object} a Ponto A, objeto com x e y que representam sua coordenada no plano cartesiano
 * @param {Object} b Ponto B, objeto com x e y que representam sua coordenada no plano cartesiano
 */
function calcDistance(a, b) {
    return Math.sqrt(((b.x - a.x) * (b.x - a.x)) + ((b.y - a.y) * (b.y - a.y)));
}