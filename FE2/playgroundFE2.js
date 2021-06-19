//Eventos:

//Ejercicio 1:

window.addEventListener("load", function(){
    
});

//Ejercicio 2:

window.addEventListener('load', function() {

    let linkContacto = document.querySelector('.contacto');
      
    linkContacto.addEventListener("click", function(){
      console.log(this)
    })
  
  });

//Ejercicio 3:

  window.addEventListener('load', function() {

    let formulario = document.querySelector('form');
  
    formulario.addEventListener("submit", function(evento){
      evento.preventDefault()
  
    })
  
  });

  //Eventos de mouse

  