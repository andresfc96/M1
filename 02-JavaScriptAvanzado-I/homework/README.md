
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

// Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1

```

```javascript
console.log(bar); // undefined
console.log(baz); // error, baz no esta definida
foo();
function foo() { console.log('Hola!'); } // Hola!
var bar = 1;
baz = 2;

```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2  // 2
"4px" - 2 // NaN
7 / 0 // Infinito
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:
// El console.log(a) dara como resultado undefined ya que la variable se declara despues del console.log() y el console.log(foo()) retorna 2 ya que al ejecutar el console.log() de foo() este ira a buscar la funcion para ejecutarla y mostrar el resultado de esta.

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :
// No entrega nada ya que la funcion recibe como parametro "False" y el condicional no permite la ejecucion.

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:
// Se recibe diferente respuesta por que se presenta en diferente contexto, una en el contexto global y la otra en el local por eso una da como resultado Aurelio De Rosa y la otra undefined.

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?
// 1, 4, 3, 2 
El primero seria el 1, ya que por orden de lectura tendria prioridad, el segundo seria el 4 ya que el 2 y el 3 tienen un setTimeout el cual despues de cierto tiempo establecido es que se genera la ejecucion del console.log() y por ultimo entre el 2 y el 3, por diferencias de tiempo, el 2 con "1000", y el 3 con "0", se imprime primero el 3 y despues el 2.

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
