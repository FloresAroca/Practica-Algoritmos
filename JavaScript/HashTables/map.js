// Hash Tables (tambien llamado Diccionario, Mapa u Objeto): guarda un valor con una clave que puede ser de cualquier tipo (Utiliza una Hash Table que combierte el texto[identificador] en un numero en memoria), y permite acceder a ese valor a través de la clave, por ejemlo: el email de un usuario.

// email <- Clave(ID) del usuario
// Map: estructura de datos que permite almacenar pares clave-valor, donde cada clave es única y se utiliza para acceder a su valor correspondiente.
const usuarios = new Map([
  ["juan@gmail.com", { nombre: "Juan", edad: 30 }],
  ["laura@gmail.com", { nombre: "Laura", edad: 25 }],
  ["pedro@gmail.com", { nombre: "Pedro", edad: 35 }],
]);

console.log(usuarios.get("juan@gmail.com"));
console.log(usuarios.get("laura@gmail.com"));

// set <- añade un nuevo usuario
usuarios.set("pablo@gmail.com", { nombre: "pablo", edad: 29 });
console.log(usuarios.get("pablo@gmail.com"));

// Contar palabras
const texto = "ser o no ser";
const conteo = new Map();
// Split <- dividir una cadena de texto (string) en un array de subcadenas, utilizando un carácter o patrón como separador
for (const palabra of texto.split(" ")) {
  conteo.set(palabra, (conteo.get(palabra) ?? 0) + 1);
}

console.log(conteo); // <- Map(3) { 'ser' => 2, 'o' => 1, 'no' => 1 }
