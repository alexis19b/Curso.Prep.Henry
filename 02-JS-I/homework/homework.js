// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 2012;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  
  return str;
}
devolverString("Esto es una cadena");

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let suma = x + y;
  return suma;
}
suma(10, 50);

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  let resta = x - y;
  return resta;
}
resta(19, 5);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
 let multi = x * y;
 return multi;
}
multiplica(7, 15);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let div = x / y;
  return div;
}
divide(100, 5);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x === y){
    return true;
  } else{
    return false;
  }
 
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length === str2.length){
    return true;
  }
    else return false;

}
tienenMismaLongitud("Hola Mundo", "Hola Mundo");

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90 )
  {
    return true;
  }else return false;
}
menosQueNoventa(80);

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if ( num > 50) {
  return true;
  } else return false;
}
mayorQueCincuenta(70);

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  let resto = x % y;
  return resto;
}
obtenerResto(20, 3);

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0 ) {
    return true;
  } else return false;
}
esPar(23);

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num % 2 === 0) {
  return false;
  } else return true;
}
esImpar(10);

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let caudrado = num * num;
  return caudrado;
}
elevarAlCuadrado(100);


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let alCubo = num * num * num;
  return alCubo;
}
elevarAlCubo(20);

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let resul = Math.pow(num, exponent);
  return resul;
}
elevar(7,4);

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
 let numero = Math.round(num)
 return numero;
}
redondearNumero(3.6);

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  let redondear = Math.ceil(num)
  return redondear;
}
redondearHaciaArriba(3.2);

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  let random = Math.random()*1;
  return random;
}
numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0){
    return false;
  }else {
    if(numero < 0 ) {
      let negativo  = "Es negativo";
      return negativo;
    } else {
      let positivo = "Es positivo";
      return positivo;
    }
    
  } 
  
}

esPositivo(20);

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:metodo
  let simbolo = '!';
  let saludo = str + simbolo;
  return saludo;
}

agregarSimboloExclamacion('Hola Mundo');
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let espacio = ' ';
  
  let nom = nombre + espacio + apellido;
  return nom;
}
combinarNombres('Jesus', 'Briceño');

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let signo = '!';
  let saludo ='Hola ';
  let cadena = saludo + nombre + signo;
    return cadena;
}
obtenerSaludo('Jesus');

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  let areaRect = alto * ancho;
  return areaRect;
}
obtenerAreaRectangulo( 7, 3);


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
 let perimetro = lado + lado + lado + lado;
 return perimetro;
}

retornarPerimetro(25);



function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let area = (base * altura) / 2;
  return area;
}
areaDelTriangulo(10, 4);



function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let calculo = euro * 1.20;
  return calculo;
  
}
deEuroAdolar(100);


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí

  if (letra.length > 1 ) {
    let mensaje = "Dato incorrecto";
    return mensaje;
  }else {
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    let vocal = "Es vocal"
    return vocal;
    }
  }
}
esVocal('e');


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
