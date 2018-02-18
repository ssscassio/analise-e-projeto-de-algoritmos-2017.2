function fibonacci(number, lookup = {}) {

    // Se já calculou o fibonacci do número, retorna
    if (lookup[number]) return lookup[number];

    // Retorno para o caso base
    if (number <= 1) return 1;

    // Salva o fibonaci calculado e retorna o valor correspondente recursivamente
    return lookup[number] = fibonacci(number - 1, lookup) + fibonacci(number - 2, lookup);
}

module.exports = fibonacci;
