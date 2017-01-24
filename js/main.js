    var tareas = document.getElementById("tareas");
    var input = document.getElementById("mensaje");
    var boton = document.getElementById("boton");

function agregarTarea(){
// para buscar el valor de un input textarea.    
    var inputActual = input.value;
// para no validar en caso de que este vacio.
    if(inputActual === ""){
       input.setAttribute("placeholder", "No se pueden agregar tareas vacias");
        input.className="error";
        return false;
    }
    function comprobarInput(){
        input.className = "";
        input.setAttribute("placeholder", "Agrega tu Tarea");
    }
    input.addEventListener("click", comprobarInput);
// para agregar un div individual al contenedor tareas.    
    var lista = document.createElement("div");
    lista.className="listan";
    tareas.appendChild(lista);
// para agregar un checkbox al div lista.    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    lista.appendChild(checkbox);
// para agregar el texto/mensaje en el div lista.   
    var small = document.createElement("small");
    lista.appendChild(small);
    small.appendChild(document.createTextNode(inputActual));
// para agregar un icono en el div lista.  
    var icono = document.createElement("span");
    icono.className = "glyphicon  glyphicon-trash , icon , pull-right";
    lista.appendChild(icono);
// para borrar el contexto una vez añadido.
    inputActual=input.value="";
// para eliminar el div lista con clickear el icono.
var eliminar = document.getElementsByClassName("icon");
for (var c = 0; c < eliminar.length; c++) {
  eliminar[c].onclick = function(){
    var lista = this.parentElement;
    lista.style.display = "none";
  }  
}
    checkbox.addEventListener("click", tachar);
}
// funcion para el tachado y destachado de las tareas.
function tachar(evento){
	var tachado = evento.target.parentNode;
	if(evento.target.checked)
		tachado.setAttribute("style", "text-decoration: overline underline line-through ");
	else
		tachado.setAttribute("style","text-decoration:none");
}
boton.addEventListener("click",  agregarTarea);