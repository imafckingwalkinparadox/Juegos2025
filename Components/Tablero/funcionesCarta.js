import { item } from "./itemCarta.js";

function mezclarCartas(todas_las_cartas){
    // Algoritmo Fisher-Yates Shuffle
    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
        [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]]; // Intercambiar elementos
    }
    return todas_las_cartas;
}

function cargarCartas(todas_las_cartas){
    let div2 = document.createElement('div');
    div2.className = "div_tablero2";

    // Llamamos a mezclarCartas pasándole el parámetro todas_las_cartas
    let cartas_mezcladas = mezclarCartas(todas_las_cartas);  

    cartas_mezcladas.forEach(letra => {
        div2.appendChild(item(letra));
    });
    
    return div2;
}

export { cargarCartas, mezclarCartas };
