module.exports = function (number) {
    // Declaração do array
    var lookdown = [];

    // Caso base
    lookdown[0] = 1;
    lookdown[1] = 1;

    // Calcula o fibonaci e armazena os valores
    for (i = 2; i <= number; i++) {
        lookdown[i] = lookdown[i - 1] + lookdown[i - 2];
    }

    return lookdown[number];
}