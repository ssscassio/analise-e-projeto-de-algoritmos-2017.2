# Algoritmo da sequência de Fibonacci

## Propósito
Dado um número N retornar o valor de Fibonacci neste indíce, onde a sequência de Fibonacci é:

``` 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... ```

## Aproximações e execução

### **[Força bruta](./brute/fibonacci.js)**
- O algortimo utiliza iterações sucessivas para alcançar o valor do N-ésimo número da sequência de Fibonacci.
- O algoritmo desenvolvido é uma aproximação parecida com Programação Dinâmica - Bottom-Up porém não armazena os valores já calculados, diminuindo a complexidade de espaço
- A complexidade de tempo desse algoritmo é de **O(N)**

1. Na raiz do projeto execute:
``` node terceira_unidade/Fibonacci/brute N```, sendo N um número inteiro

### **[Recursivo](./recursive/fibonacci.js)**
- O algoritmo recursivo calcula os dois números anteriores ao passado até chegar no caso base que é um número menor ou igual a 1
- O problema dessa aproximação é que ele calcula de forma redundante os valores anteriores de um número
- A complexidade de tempo desse algoritmo é portanto **O(2<sup>N</sup>)** visto que para cada indice, ele deve calcular o seus 2 antecessores
1. Na raiz do projeto execute:
``` node terceira_unidade/Fibonacci/recursive N```, sendo N um número inteiro

### **Programação Dinâmica** ###
- A *Programação dinâmica* é recomendada para problemas com duas principais características: **Subestrutura ótima** e **superposição de subproblemas**.
- O principal conceito por trás dessa aproximação é dividir um problema de otimização em sub-problemas simplificados e armazenar a solução de cada subproblema para que cada sub-problema só seja resolvido uma única vez.
- Troca de complexidade de tempo para complexidade de espaço
#### **[Programação Dinâmica - Bottom-Up](./dynamicBottomUp/fibonacci.js)**
- *Tabulation Aproach*: Mais rápido pois é possível acessar diretamente o estado anterior da tabela
- Inicia com uma memória com o menor valor e calcula os seguintes iterativamente
- A complexidade de tempo desse algoritmo é de **O(N)**
- A complexidade de espaço desse algoritmo é de **O(N)**
1. Na raiz do projeto execute:
``` node terceira_unidade/Fibonacci/dynamicBottomUp N```, sendo N um número inteiro

#### **[Programação Dinâmica - Top-Down](./dynamicTopDown/fibonacci.js)**
- *Memorization Aproach*: É mais lento pois apresenta várias chamadas recursivas e retornos
- Essa alteração vai mudar a complexidade de espaço do algoritmo para **O(N)** mas vai diminuir a complexidade de tempo para **2N** que é resolvido em um tempo linear **O(2N)** visto que 2 é constante
1. Na raiz do projeto execute:
``` node terceira_unidade/Fibonacci/dynamicTopDown N```, sendo N um número inteiro