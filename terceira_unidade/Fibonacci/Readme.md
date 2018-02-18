# Algoritmo da sequência de Fibonacci

## Propósito
Dado um número N retornar o valor de Fibonacci neste indíce, onde a sequência de Fibonacci é:

``` 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... ```

## Aproximações e execução

### **[Força bruta](./brute/fibonacci.js)**
- O algortimo utiliza iterações sucessivas para alcançar o valor do N-ésimo número da sequência de Fibonacci.
- A complexidade de tempo desse algoritmo é de **O(n)**

1. Na raiz do projeto execute:
``` node terceira_unidade/Fibonacci/brute N```, sendo N um número inteiro

### **[Recursivo](./recursive/fibonacci.js)**
- O algoritmo recursivo calcula os dois números anteriores ao passado até chegar no caso base que é um número menor ou igual a 1
- O problema dessa aproximação é que ele calcula de forma redundante os valores anteriores de um número
- A complexidade de tempo desse algoritmo é portanto **O(2<sup>N</sup>)** visto que para cada indice, ele deve calcular o seus 2 antecessores
1. Na raiz do projeto execute:
``` node terceira_unidade/Fibonacci/recursive N```, sendo N um número inteiro

### **Programação Dinâmica - Bottom Up**
- 

### **Programação Dinâmica - Top Down**
- 