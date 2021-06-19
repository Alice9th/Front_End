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

//usuario elige opcion
let opcionUsuario = parseInt(prompt("Elija una opción: piedra(1),papel(2) o tijera(3)"));

//computadora elige opcion
let opcionComputadora = parseInt(Math.random()*3+1);
console.log(opcionComputadora);

let resultado = "No hay resultado";

if(opcionUsuario == 1){
    if(opcionComputadora == 1){
        resultado = "Empate";
    }
    if(opcionComputadora == 2){
        resultado = "Derrota!";
    }
    if(opcionComputadora == 3){
        resultado = "Triunfo!";
    }
};
if(opcionUsuario == 2){
    if(opcionComputadora == 1){
        resultado = "Triunfo!";
    }
    if(opcionComputadora == 2){
        resultado = "Empate";
    }
    if(opcionComputadora == 3){
        resultado = "Derrota!";
    }
}
if(opcionUsuario == 3){
    if(opcionComputadora == 1){
        resultado = "Derrota!";
    }
    if(opcionComputadora == 2){
        resultado = "Triufo!";
    }
    if(opcionComputadora == 3){
        resultado = "Empate";
    }
}
console.log(resultado);
alert("Su resultado fue: "+resultado);