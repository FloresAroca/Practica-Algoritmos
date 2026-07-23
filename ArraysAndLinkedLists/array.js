// Definimos el array de coches
const cars = [
  "Mazda",
  "Ford",
  "Toyota",
  "Audi",
  "Nissan",
  "Mercedes",
  "BMW",
  "Volkswagen",
  "Chevrolet",
  "Honda",
];

// Acceso por posición
console.log(cars[2]);
console.log(cars[5]);

// Agregar elemntos al final de Array
cars.push("Hyundai");
console.log(cars); // [Mazda, Ford, Toyota, Audi, Nissan, Mercedes, BMW, Volkswagen, Chevrolet, Honda,Hyundai]

// Inserccion entre elementos
cars.splice(3, 0, "Kia"); // Inserta Kia en la posición 3 <- ¡¡Esto es mas costoso ya que en arrays se tiene que mover todos los elementos a la derecha!!
