function calculateBasics(operator) {

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operator) {
    case '+':
        result = add(num1, num2);
        break;
    case '-':
        result = subtract(num1, num2);
        break;
    case '*':
        result = multiply(num1, num2);
        break;
    case '/':
        result = divide(num1, num2);
        break;
    default:
        result = 'Operación no válida';
        break;
  }

  document.getElementById('result').innerText = `Resultado: ${result}`;
}


function calculatePro(operator) {

  const Dec = parseFloat(document.getElementById('decimal').value);
  const Bin = document.getElementById('binario').value;
  const Hex = document.getElementById('hexadecimal').value;

  let result;

  switch (operator) {
    case 'decimal':
        decimalAbinario = decimalToBinary(Dec);
        decimalAHexadecimal = decimalToHexadecimal(Dec);
        document.getElementById('result-pro').innerText = `Decimal a Binario: ${decimalAbinario}`;
        document.getElementById('result-pro1').innerText = `Decimal a Hexadecimal: ${decimalAHexadecimal}`;
        break;
    case 'binary':
        binarioAdecimal = binaryToDecimal(Bin);
        binarioAhexadecimal = binaryToHexadecimal(Bin);
        document.getElementById('result-pro').innerText = `Binario a Decimal: ${binarioAdecimal}`;
        document.getElementById('result-pro1').innerText = `Binario a Hexadecimal: ${binarioAhexadecimal}`;
        break;
    case 'hexa':
        hexadecimalAdecimal = hexadecimalToDecimal(Hex);
        hexadecimalAbinario = hexadecimalToBinary(Hex);
        document.getElementById('result-pro').innerText = `Hexadecimal a decimal: ${hexadecimalAdecimal}`;
        document.getElementById('result-pro1').innerText = `Hexadecimal a Binario: ${hexadecimalAbinario}`;
        break;
    default:
        result = 'Operación no válida';
        break;
  }

}