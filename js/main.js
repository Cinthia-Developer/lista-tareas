function tareas(){
    var datos = document.getElementById("message-text").value;
    var lista = document.getElementById("lista");
    var eliminar = document.getElementsByTagName("eliminar");
    var checkbox = document.getElementById("checkbox");
    var boton = document.getElementById("boton");
    
        
// funciones
    function agregarTarea(){
        alert("agregado");
    }
    function tachar(){
        alert("tachado")
    }
    function eliminarTarea(){
        alert("eliminado");
    }
}
// agregar tarea
    boton.addEventListener("clic", agregarTarea);
// tachar input
    checkbox.addEventListener("click",tachar);
//  elimnimar tarea
    eliminar.addEventListener("click", eliminarTarea);
 // borrando elementos de la lista   
    for(var x=0; x<=lista.children.length-1; x++){
      lista.children[i].addEventListener("click", eliminarTarea); 
    }
