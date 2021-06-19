//Seleccionamos el demo
demo = document.querySelector("#demo"); 
// Pedimos el texto al usurio 

let respuesta = prompt("Ingrese una pregunta: "); 

//Insertamos en el demo una plantilla con el texto del usuario
demo.innerHTML += `<p>${respuesta}</p>`

let texto2 = prompt("Ingrese la respuesta: ");

//Utilizando NODES (creacion del nodo elemento)
//Esto nos da la creacion de un párrafo (vacío)
let element2 = document.createElement('p');


//Hay que inyectarle el contenido
//Se crea el nodo texto
let nodoTexto2 = document.createTextNode(texto2);

//Al elemente se le agrega el nodo texto
element2.appendChild(nodoTexto2);

//Ya que está completo se envía:
//Se le agrega al contenedor el elemento completo:

demo.appendChild(element2);


