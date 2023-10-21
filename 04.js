/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  // Lo convierto Obtengo el entero con ParseInt al convertir el parámetro num
  // a String (toString), lo convierto a array de caracteres (spilt),
  // lo invierto (reverse), lo uno en un string (join)
  var simetrico = parseInt(num.toString().split('').reverse().join(''));
  return simetrico === num;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico