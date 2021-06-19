//alert("Esto es una alerta!")

//console.log(confirm("Esta seguro de que desea continuar?"))

console.log(prompt("Ingresa tu nombre completo"));

prompt("Por favor introduzca su nombre");

let nombreUsuario = prompt("Por favor, introduzca su nombre");
console.log(nombreUsuario);

confirm("¿Desea un trato personalizado?");

//Combinatiora

let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

if(tratoPersonalizado){
    let nombre = prompt("Por favor, introduzca su nombre");
    alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas     gracias por visitarnos, estamos a su disposición! ?");
} else {
    alert("Gracias por conectarse.")
};

//Manipulando datos

//parseInt(). 
//Esta función parsea una cadena de texto y devuelve un número.

parseInt("22");
parseInt(prompt("Ingrese edad"));

//parseFloat()
//Tiene el mismo objetivo que la anterior, pero en este caso si nos retorna los 
//números decimales que existan.

console.log(parseFloat(22.34));
console.log(parseFloat(22.3456284));

let edad = parseInt(prompt("Ingrese su edad"));

if(edad>18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}


//Bucles específicos

//For in: itera sólo sobre objetos literales

let personaje = {
    nombre: "Luke",
    apellido: "Skywalker",
    edad: 25
}

for(let caracteristicas in personaje){
    console.log(personaje[caracteristicas])
}

//For of: se utiliza para iterar sobre arrays y strings

let series = ["Friends", "Game of Thrones", "Breaking Bad"];

for(let unaSerie of series){
    console.log(unaSerie)
}