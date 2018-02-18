const // Importações globais
    hasFibonacciError = require('./errorHandle'),
    fibonacci = require('./fibonacci');

const main = (number) => {
    if (!hasFibonacciError(number)) {
        var fibonacciValue = fibonacci(number);
        console.log(`O número ${number} da sequência de Fibonacci é: ${fibonacciValue}`);
    }
}

main(process.argv[2]);