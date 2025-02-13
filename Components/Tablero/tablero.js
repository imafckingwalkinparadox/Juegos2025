import {mezclarCartas } from "./data.js";

function item(contenido){
    let div1 = document.createElement('div'); 
    div1.className = "carta";
    div1.textContent = contenido;

    let front = document.createElement('div');
    front.className = "Front";

    let back = document.createElement('div');
    back.className = "Back";
    back.innerText = contenido;

    div1.appendChild(front);
    div1.appendChild(back);


    div1.addEventListener("click", ()=>{
        div1.classList.toggle("volteada");
    });
    

    return div1;


}

function cargarCartas(){
    let div2 = document.createElement('div');
    div2.className = "div_tablero2";

    mezclarCartas().forEach(letra => {
        div2.appendChild(item(letra))
    });
    
    return div2;
}


export{cargarCartas}
