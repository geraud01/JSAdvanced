let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        let result = eval(display.value);
        display.value = `${result} (${typeof result})`;
    } catch (error) {
        display.value = 'Erro';
    }
}

function clearDisplay() {
    display.value = '';
}
