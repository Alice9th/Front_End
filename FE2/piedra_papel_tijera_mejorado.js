console.log("Piedra, papel o tijera.");
/*
CASO DE USO
- la computadora debe sacar un numero del 1 al 3
- depende el numero debe relacionarse con piedra, papel o tijera
- debemos preguntar al usuario que opcion elige
- debemos valida que lo elegido sea piedra, papel o tijera
- de acuerdo a la elecciones debemos arrojar un resultado
- la eleccion de la computadora debe ser aleatoria
*/
const MSJ_WIN = "Ganastee!!";
const MSJ_LOSE = "Perdiste! Sigue intentando";
const MSJ_DRAW = "Empate!";

//Se utulizan mayusculas porque son constantes
//usuario elige opcion
let opcionUsuario = parseInt(prompt("Elija una opción: piedra(1),papel(2) o tijera(3)"));

//computadora elige opcion
let opcionComputadora = parseInt(Math.random()*3+1);
console.log(opcionComputadora);

let resultado = "No hay resultado";

if(opcionUsuario == opcionComputadora){
    resultado = "Empate";
} else if ((opcionUsuario == 1 && opcionComputadora == 3) || (opcionUsuario == 3 && opcionComputadora == 2) ||  (opcionUsuario == 2 && opcionComputadora == 1)){
    resultado = "Triunfo!";
} else{
    resultado = "Derrota!";
}