function counter() {
  let variable = 0
  function contador(){
      variable = variable + 1
      return variable
  }
  return contador
}

function cacheFunction(cb) {
  let cache = {};

  return function(arg){
    if(cache.hasOwnProperty(arg)){
      return cache[arg]
    }
    else{
      cache[arg] = cb(arg)
      return cache[arg]
    }
  }
}

const instructor = {
  nombre: "Franco",
  edad: 25,
};

const alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno)

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, "*", "*");
let textoGuiones = crearCadena.bind(this, "-", "-");
let textoUnderscore = crearCadena.bind(this, "_", "_");

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
