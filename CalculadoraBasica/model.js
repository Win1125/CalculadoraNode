
/**
Listado de Funciones:

1. Suma                    ✔️
2. Resta                   ✔️
3. Multiplicación          ✔️
4. División                ✔️
5. Decimal -> Binario      ✔️
6. Decimal -> Hexadecimal  ✔️
7. Binario -> Decimal      ✔️
8. Binario -> Hexadecimal  ✔️
9. Hexadecimal -> Decimal  ✔️
10. Hexadecimal -> Binario ✔️
 */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

function decimalToBinary(decimal) {
    // Verificar si el número es válido
    if (isNaN(decimal) || decimal < 0 || Math.floor(decimal) !== decimal) {
        return "Número inválido";
    }

    if (decimal === 0) {
        return "0";
    }

    let binary = "";


    while (decimal > 0) {
        binary = (decimal % 2) + binary; // Agregar el residuo al inicio de la cadena
        decimal = Math.floor(decimal / 2); // Dividir el decimal entre 2
    }

    return binary;
}

function decimalToHexadecimal(decimal) {
  // Verificar si el número es válido
  if (isNaN(decimal) || decimal < 0 || Math.floor(decimal) !== decimal) {
      return "Número inválido";
  }

  if (decimal === 0) {
      return "0";
  }

  let hexadecimal = "";

  const hexDigits = "0123456789ABCDEF";


  while (decimal > 0) {
      const remainder = decimal % 16; // Obtener el residuo
      hexadecimal = hexDigits.charAt(remainder) + hexadecimal; // Agregar el dígito correspondiente al inicio de la cadena
      decimal = Math.floor(decimal / 16); // Dividir el decimal entre 16
  }

  return hexadecimal;
}

function binaryToDecimal(binary) {
  // Verificar si el número binario es válido
  if (!/^[01]+$/.test(binary)) {
      return "Número binario inválido";
  }

  let decimal = 0;

  // Recorrer el número binario de derecha a izquierda
  for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
      const bit = parseInt(binary[i], 10); // Convertir cada dígito binario a un número entero
      decimal += bit * Math.pow(2, j); // Multiplicar el bit por 2 elevado a la potencia correspondiente
  }

  return decimal;
}

function binaryToHexadecimal(binary) {
  if (!/^[01]+$/.test(binary)) {
      return "Número binario inválido";
  }

  while (binary.length % 4 !== 0) {
      binary = "0" + binary;
  }

  let hexadecimal = "";


  const hexDigits = "0123456789ABCDEF";

  // Convertir grupos de 4 dígitos binarios a un dígito hexadecimal
  for (let i = 0; i < binary.length; i += 4) {
      const chunk = binary.substring(i, i + 4); // Obtener el grupo de 4 dígitos binarios
      const decimalEquivalent = parseInt(chunk, 2);
      hexadecimal += hexDigits.charAt(decimalEquivalent);
  }

  return hexadecimal;
}

function hexadecimalToDecimal(hexadecimal) {
  if (!/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
      return "Número hexadecimal inválido";
  }

  let decimal = 0;

  // Recorrer el número hexadecimal de derecha a izquierda
  for (let i = hexadecimal.length - 1, j = 0; i >= 0; i--, j++) {
      const digit = parseInt(hexadecimal[i], 16); // Convertir cada dígito hexadecimal a un número entero
      decimal += digit * Math.pow(16, j); // Multiplicar el dígito por 16 elevado a la potencia correspondiente
  }

  return decimal;
}

function hexadecimalToBinary(hexadecimal) {
  if (!/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
      return "Número hexadecimal inválido";
  }

  let binary = "";

  const hexToBinaryMap = {
      "0": "0000", "1": "0001", "2": "0010", "3": "0011",
      "4": "0100", "5": "0101", "6": "0110", "7": "0111",
      "8": "1000", "9": "1001", "A": "1010", "B": "1011",
      "C": "1100", "D": "1101", "E": "1110", "F": "1111"
  };

  // Convertir cada dígito hexadecimal a su representación binaria y concatenarlos
  for (let i = 0; i < hexadecimal.length; i++) {
      binary += hexToBinaryMap[hexadecimal[i].toUpperCase()];
  }

  return binary;
}