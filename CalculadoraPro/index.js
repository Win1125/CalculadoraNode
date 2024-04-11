import express from 'express';
import pkg from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  add,
  subtract,
  multiply,
  divide,
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  binaryToHexadecimal,
  hexadecimalToDecimal,
  hexadecimalToBinary
} from './operaciones.js';

const app = express();

const { urlencoded } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);
  const decimal = Number(req.body.decimal);
  const binario = (req.body.binario);
  const hexa = req.body.hexadecimal;
  const operador = req.body.operador;
  let resultado;
  let resultado0;
  let resultado1;

  switch (operador) {
    case 'suma':
      resultado = add(n1,n2);
    break;
    case 'resta':
      resultado = subtract(n1,n2);
    break;
    case 'multiplicar':
      resultado = multiply(n1,n2);
    break;
    case 'dividir':
      resultado = divide(n1,n2);
    break;
    case 'decimal':
      resultado0 = decimalToBinary(decimal);
      resultado1 = decimalToHexadecimal(decimal);
      res.send(`El resultado de la conversión a binario es: ${resultado0} <br>
                A hexadecimal es: ${resultado1}`);
    break;
    case 'binario':
      resultado0 = binaryToDecimal(binario);
      resultado1 = binaryToHexadecimal(binario);
      res.send(`El resultado de la conversión a decimal es: ${resultado0} <br>
                A hexadecimal es: ${resultado1}`);
    break;
    case 'hexadecimal':
      resultado0 = hexadecimalToDecimal(hexa);
      resultado1 = hexadecimalToBinary(hexa);
      res.send(`El resultado de la conversión a decimal es: ${resultado0} <br>
                A binario es: ${resultado1}`);
    break;
    default:
      resultado = "Operación invalida";
    break;
  }

  res.send("El resultado de la operacion es: " + resultado);

})


app.listen(8000, (err) => {
  if (err) {
    console.log('Server Inactive')
  } else {
    console.log('Server Active')
  }
})