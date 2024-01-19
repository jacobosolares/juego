
const prompt = require ("prompt-sync")({sigint:true})


    function Jugador() {
    let opcion = prompt("Elige: piedra, papel o tijera ").toLowerCase();
    while (opcion !== "piedra" && opcion !== "papel" && opcion !== "tijera") {
      opcion = prompt("Opción inválida. Elige: piedra, papel o tijera").toLowerCase();
    }
    return opcion;
  }
  
  
    function Maquina() {
    let opciones = ["piedra", "papel", "tijera"];
    let indice = Math.floor(Math.random() * 3);
    return opciones[indice];
  }
  
  
    function Ganador(usuario, maquina) {
    if (usuario === maquina) {
      return "Empate";
    } else if (
      (usuario === "piedra" && maquina === "tijera") || (usuario === "papel" && maquina === "piedra") || (usuario === "tijera" && maquina === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "¡Perdiste!";
    }
  }
  
  
    function jugarJuego() {
    let Usuario = Jugador();
    let maquina = Maquina();
    let resultado = Ganador(Usuario, maquina);
  
    console.log("Tú elegiste: " + Usuario);
    console.log("La computadora eligió: " + maquina);
    console.log(resultado);
  }
  
  
  jugarJuego();
