function mezclarCartas() {
    let carta_par_1 = ['🍎', '🍊', '🍌', '🍇', '🍓', '🍒', '🍑', '🍉'];
    let carta_par_2 = ['🍎', '🍊', '🍌', '🍇', '🍓', '🍒', '🍑', '🍉'];

    let todas_las_cartas = carta_par_1.concat(carta_par_2);

    // Algoritmo Fisher-Yates Shuffle
    for (let i = todas_las_cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio
        [todas_las_cartas[i], todas_las_cartas[j]] = [todas_las_cartas[j], todas_las_cartas[i]]; // Intercambiar elementos
    }

    return todas_las_cartas;
}

export { mezclarCartas };