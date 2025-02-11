import { cargarCartas } from "./Components/Tablero/tablero.js";
import { headers } from "./Components/Header/header.js";

headers();
cargarCartas();

let Dom = document.querySelector("#root");

let contenedor = document.createElement('div');
contenedor.className = "div-Contenedor";

let header = document.createElement('div');
header.className = "div-header";
header.appendChild(headers());
contenedor.appendChild(header);

let progreso = document.createElement('div');
progreso.className = "div-progreso";
contenedor.appendChild(progreso);

let tablero = document.createElement('div');
tablero.className = "div-tablero";
tablero.appendChild(cargarCartas());
contenedor.appendChild(tablero);

let footer = document.createElement('div');
footer.className = "div-footer";
contenedor.appendChild(footer);

Dom.appendChild(contenedor);

let todasLasCartasDelDOM = document.querySelectorAll('.carta');
todasLasCartasDelDOM.forEach (cadaCarta => {
    cadaCarta.addEventListener("click", ()=>{
        cadaCarta.classList.add("marcado");
    });
});