# Algoritmo da Menor Distância

## Propósito
Dado um conjunto de pontos com cordenadas X e Y, encontrar o par com menor distância euclidiana entre si.

## Aproximações e execução

### **[Força bruta](./brute/shorterDistance.js)**
- O algoritmo faz análise de *todos com todos* os pontos para verificar qual combinação tem a menor distância entre si e no final da execução, retorna o ultimo conjunto salvo como menor.
- A complexidade de tempo desse algoritmo é de **O(N<sup>2</sup>)**
