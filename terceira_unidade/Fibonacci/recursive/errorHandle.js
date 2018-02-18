
/**
 * Verificar se o valor passado como parâmetro é um indice válido
 * para calcular a sequência de fibonacci
 * @param {Any} number O número para ser verficado
 */
module.exports = function (number) {
    if (!number) {
        console.log('Digite, como argumento da execução, um índice para ser calculado o Fibonacci');
        return 1;
    }
    if (isNaN(number)) {
        console.log('Digite um número como parâmetro');
        return 1;
    }
    if (number < 0) {
        console.log('Digite um número maior ou igual a 0');
        return 1;
    }

    return 0; // Finalizou sem erro
}
