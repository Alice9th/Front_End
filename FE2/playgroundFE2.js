//Modificando clases:

//Ejercicio 1:

  window.addEventListener('load', function() {

    // escribí tu código aquí
   let elemento = document.querySelector("div");
   elemento.classList.add('container')
  
  });

  //Ejercicio 2:

  window.addEventListener('load', function() {

    // escribí tu código aquí
    let mod = document.querySelector('h1');
    mod.classList.remove("titulo")
  
  });

  //Ejercicio 3:
  window.addEventListener('load', function() {

    // escribí tu código aquí
    let titulo = document.querySelector("h1");
    titulo.classList.toggle('titulo-tuneado')
  
  });


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

  //Ejercicio 1:

  window.addEventListener('load', function() {

    let titulo = document.querySelector('h1');
    titulo.addEventListener("mouseover", function(){
       titulo.classList.add("titulo")
  
    })
  
  });

  //Ejercicio 2:

  window.addEventListener('load', function() {

    let links = document.querySelectorAll("a")
  
    for(let link of links) {
      link.addEventListener("mouseout", function(){
        this.classList.toggle("dark-mode") //Si el link no tiene la clase "dark-mode", asignársela y si la tiene, quitársela
      })
    }
  
  });

//Eventos de teclado:

// Ejercicio 1:

window.addEventListener('load', function() {

    // escribí tu codigo acá
    let userName = document.querySelector('#userName')
   
      userName.addEventListener('keydown', function(event){
          if (event.key == '#'){
          alert("Está prohibido el uso de #hashtags!")
          }
      })
  });
  

//Ejercicio 2:

window.addEventListener('load', function() {

    let input = document.querySelector('#input'); 
    
    input.addEventListener('keyup', (event) => {
        let presionar = event.key;
        alert("Se presionó la tecla: " + presionar)
    })

});

//Ejercicio 3:
window.addEventListener('load', function(){

    let direccion = document.querySelector('#address')

    direccion.addEventListener('keypress', function(event){
         alert("Se presionó la tecla: "+ event.key);
    })

})