const premioTotal = 2500; 
const casilla = 10; 
function calcular(aciertos){ 
    let premioCasilla= premioTotal/casilla; 
    let resultado= premioCasilla*aciertos; 
    return resultado } 
    console.log(calcular(5)); 