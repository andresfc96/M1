function BinarioADecimal(num) {
  let suma = 0;
  let posicion = 0;
  let array = num.split('');

  for (let i = array.length -1; i >= 0; i--) {
    suma += array[i] * Math.pow(2, posicion);
    posicion++
  }
  return suma;
}

function DecimalABinario(num) {
  let resultado = []
  while (num > 0){
    resultado.unshift(num %2);
    num = Math.floor(num/2);
  }
  return resultado.join('')
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}