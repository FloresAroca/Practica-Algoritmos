const MAPA = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1],
  [1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let textoGame = `
░██████╗███╗░░██╗██╗░█████╗░██╗░░██╗███████╗░░░██╗░█████╗░
██╔════╝████╗░██║██║██╔══██╗██║░██╔╝██╔════╝░░░██║██╔══██╗
╚█████╗░██╔██╗██║██║███████║█████═╝░█████╗░░░░░██║██║░░██║
░╚═══██╗██║╚████║██║██╔══██║██╔═██╗░██╔══╝░░░░░██║██║░░██║
██████╔╝██║░╚███║██║██║░░██║██║░╚██╗███████╗██╗██║╚█████╔╝
╚═════╝░╚═╝░░╚══╝╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝╚═╝░╚════╝░
----------------------------------------------------------
 █░█ ▀█▀ █ █░░ █ ▀█ ▄▀█   ▄▄ ▄▀█ ▄▄ █▀ ▄▄ █░█░█ ▄▄ █▀▄ ▄▄  
 █▄█ ░█░ █ █▄▄ █ █▄ █▀█   ░░ █▀█ ░░ ▄█ ░░ ▀▄▀▄▀ ░░ █▄▀ ░░  

     █▀█ ▄▀█ █▀█ ▄▀█   █▀▄▀█ █▀█ █░█ █▀▀ █▀█ ▀█▀ █▀▀
     █▀▀ █▀█ █▀▄ █▀█   █░▀░█ █▄█ ▀▄▀ ██▄ █▀▄ ░█░ ██▄
`;

function render(MAPA) {
  for (let fila of MAPA) {
    let linea = "";

    for (let celda of fila) {
      if (celda === 1) {
        linea += "██";
      } else if (celda === 0) {
        linea += "░░";
      } else if (celda === 2) {
        linea += "  ";
      } else {
        linea += "🍎";
      }
    }

    console.log(linea);
  }
}

class Player {
  constructor(name, value, xInicial, yInicial) {
    this.name = name;
    this.vlue = value || 1;
    this.position = { x: xInicial, y: yInicial };
  }

  mover(daltaX, deltaY) {
    this.position.x += daltaX;
    this.position.y += deltaY;
  }
}

const jugador = new Player("Snake", 1, 5, 5);

console.log(textoGame);

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (tecla) => {
  MAPA[jugador.position.y][jugador.position.x] = 0;

  switch (tecla) {
    case "w":
      jugador.mover(0, -1);
      break;
    case "s":
      jugador.mover(0, 1);
      break;
    case "a":
      jugador.mover(-1, 0);
      break;
    case "d":
      jugador.mover(1, 0);
      break;
    case "q":
      process.exit(0);
  }

  if (jugador.position.y < 1) jugador.mover(0, 10);
  if (jugador.position.y > 10) jugador.mover(0, -10);
  if (jugador.position.x < 1) jugador.mover(13, 0);
  if (jugador.position.x > 13) jugador.mover(-13, 0);

  MAPA[jugador.position.y][jugador.position.x] = 2;

  console.clear();
  console.log(textoGame);
  render(MAPA);
});
