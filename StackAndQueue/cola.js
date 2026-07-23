// Queue (cola): el primero que entra es el primero que sale (FIFO: First In, First Out).

// Fila vacia (cola) usando un array.
const cola = [];
cola.push("Ana");
cola.push("Juan");
cola.push("Pedro");

console.log(cola);

// Sacar elemento del principio de la cola (FIFO).
// Shift: elimina y devuelve el primer elemento agregado a la cola.
const siguiente = cola.shift(); // <- El primero que entra es el primero que sale.
console.log(siguiente); // Muestra: "Ana"
console.log(cola); // Muestra: ["Juan", "Pedro"]
