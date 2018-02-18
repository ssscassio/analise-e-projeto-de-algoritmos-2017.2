function fibonacci(number) {
    var a = 1, b = 0, temp;

    while (number >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        number--;
    }

    return b;
}

module.exports = fibonacci;