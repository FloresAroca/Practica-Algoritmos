// Un array usado como pila (stack).
const pila = [];

// Push: agrega un elemento al final de la pila.
pila.push("Primero: Hola"); // <- El primero que entra es el último que sale.
pila.push("Segundo: Mundo");
pila.push("Tercero: Poner en negrita"); // <- El último que entra es el primero que sale.

// Pop: elimina y devuelve el último elemento agregado a la pila.
let accion = pila.pop(); // <- El último que entra es el primero que sale.
console.log(accion); // Muestra: "Tercero: Poner en negrita"

accion = pila.pop();
console.log(accion); // Muestra: "Segundo: Mundo"

accion = pila.pop();
console.log(accion); // Muestra: "Primero: Hola"
