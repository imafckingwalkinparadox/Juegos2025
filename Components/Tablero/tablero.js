import { cargarCartas } from "./funcionesCarta.js";
import { Cartas } from "./data.js";

function barajearCartas(){
    let allCartas = Cartas.concat(Cartas); // Duplicamos el array para tener pares de cartas
    return allCartas; // Devolvemos las cartas para que se pasen a cargarCartas
}

function cargarTablero(){
    let cartasMezcladas = barajearCartas();
    return cargarCartas(cartasMezcladas); // Pasamos las cartas mezcladas a cargarCartas
}

export { cargarTablero };
