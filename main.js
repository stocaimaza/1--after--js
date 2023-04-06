//EJEMPLO 1: CALCULAMOS EL COSTO DE UN SERVICIO: 

// Definimos las variables y constantes
const precioPorMetroCuadrado = 15;
let metrosCuadrados = 0;
let color = '';
let costoTotal = 0;

// Definimos la función que calcula el costo del servicio
function calcularCosto() {
    // Pedimos al usuario que ingrese los datos necesarios
    metrosCuadrados = parseFloat(prompt('Ingrese la cantidad de metros cuadrados a pintar:'));
    color = prompt('Ingrese el color de la pintura (blanco o color):');

    // Pedimos al usuario que ingrese el color de la pintura hasta que sea válido
    while (color !== 'blanco' && color !== 'color') {
        color = prompt('Ingrese el color de la pintura (blanco o color):');
       
    }


    // Calculamos el costo total del servicio
    costoTotal = metrosCuadrados * precioPorMetroCuadrado;

    // Si el color es distinto a blanco, agregamos un 10% al costo total
    if (color === 'color') {
        costoTotal = costoTotal * 1.1;
    }

    // Mostramos el resultado al usuario
    alert("El costo total del servicio es: $" + costoTotal);
}

// Llamamos a la función para que se ejecute
calcularCosto();



///EJEMPLO 2: Calculamos la cantidad de cuotas a pagar por un producto. 


// Definimos las variables y constantes
const precioProducto = 1000;
let cantidadCuotas = 0;
let costoTotalProyecto = 0;
let costoTotalTodosLosProyectos = 0;
let continuar = true;

// Definimos la función que calcula el costo total del producto en cuotas
function calcularCosto() {
  // Pedimos al usuario que ingrese la cantidad de cuotas deseadas
  cantidadCuotas = parseInt(prompt('Ingrese la cantidad de cuotas deseadas (de 1 a 12):'));

  // Validamos si la cantidad de cuotas ingresada es válida
  if (cantidadCuotas < 1 || cantidadCuotas > 12) {
    alert('La cantidad de cuotas ingresada no es válida. Intente nuevamente.');
    return;
  }

  // Calculamos el costo total del producto en cuotas
  if (cantidadCuotas === 1) {
    costoTotalProyecto = precioProducto;
  } else if (cantidadCuotas === 2) {
    costoTotalProyecto = precioProducto * 1.05;
  } else if (cantidadCuotas === 3) {
    costoTotalProyecto = precioProducto * 1.1;
  } else {
    costoTotalProyecto = precioProducto * 1.2;
  }

  // Mostramos el resultado al usuario
  alert('El costo total del producto en ' + cantidadCuotas + ' cuotas es: $' + costoTotalProyecto.toFixed(2));
}

// Ciclo para permitir al usuario ingresar varios productos
while (continuar) {
  calcularCosto();
  costoTotalTodosLosProyectos = costoTotalTodosLosProyectos + costoTotalProyecto;
  continuar = confirm('¿Desea agregar otro producto?');
}

// Mostramos el costo total de todos los productos al usuario
alert('El costo total de todos los productos en cuotas es: $' + costoTotalTodosLosProyectos.toFixed(2));


