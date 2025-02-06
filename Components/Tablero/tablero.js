import {mezclarCartas } from "./data.js";

function item(contenido){
    let div1 = document.createElement('div'); 
    div1.className = "carta";
    div1.textContent = contenido;
    return div1;
}

function cargarCartas(){
    let div2 = document.createElement('div');
    div2.className = "div_tablero2";

    mezclarCartas().forEach(letra => {
        div2.appendChild(item(letra))
    });

    return div2;
};


export{cargarCartas}
