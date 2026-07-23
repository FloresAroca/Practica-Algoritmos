// Listas enlazadas, son estructuras de datos lineales que consisten en una secuencia de elementos, donde cada elemento apunta al siguiente. A diferencia de los arrays, las listas enlazadas no requieren un tamaño fijo y permiten una inserción y eliminación eficiente de elementos.

class Node {
  // Metodo constructor que inicializa un nodo con un valor y un puntero al siguiente nodo
  constructor(valor) {
    this.valor = valor; // <- Atributo que almacena el valor del nodo
    this.siguiente = null; // <- Atributo que apunta al siguiente nodo (inicialmente es null)
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null; // <- Atributo que apunta al primer nodo de la lista (inicialmente es null)
  }

  agregarAlInicio(valor) {
    const nuevoNodo = new Node(valor); // <- Creamos un nuevo nodo con el valor proporcionado
    console.log(`Agregando nodo con valor: ${valor}`); // <- Imprime el valor del nodo que se está agregando
    nuevoNodo.siguiente = this.cabeza; // <- El siguiente del nuevo nodo apunta a la cabeza actual
    this.cabeza = nuevoNodo; // <- La cabeza ahora apunta al nuevo nodo
  }
}

const lista = new ListaEnlazada(); // <- Creamos una nueva lista enlazada
lista.agregarAlInicio(10); // <- Agregamos un nodo con valor 10 al inicio de la lista
lista.agregarAlInicio(20); // <- Agregamos un nodo con valor 20 al inicio de la lista
lista.agregarAlInicio(30); // <- Agregamos un nodo con valor 30 al inicio de la lista
lista.agregarAlInicio(40); // <- Agregamos un nodo con valor 40 al inicio de la lista

console.log(lista); // <- Imprime la estructura completa de la lista enlazada

console.log(lista.cabeza.valor); // <- Imprime el valor del primer nodo (40)
console.log(lista.cabeza.siguiente.valor); // <- Imprime el valor del segundo nodo (30)
console.log(lista.cabeza.siguiente.siguiente.valor); // <- Imprime el valor del tercer nodo (20)
console.log(lista.cabeza.siguiente.siguiente.siguiente.valor); // <- Imprime el valor del cuarto nodo (10)
