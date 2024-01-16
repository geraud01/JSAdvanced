function calculate() {
    // Obter valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Por favor, insira números válidos.';
        return;
    }

    // Calcular com base no operador
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            document.getElementById('result').innerText = 'Operador inválido.';
            return;
    }

    // Exibir o resultado
    document.getElementById('result').innerText = `Resultado: ${result}`;
}
