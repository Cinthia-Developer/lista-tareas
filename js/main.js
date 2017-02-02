//  funcion principal que crea los elemnetos en el html:
function drawTextList(){
    var input = document.getElementById("mensaje");
    var valorInput = input.value;
// nuevo metodo:
    var listaTareas = [ {nombre: valorInput, isDone:false} ];
    var lista = document.getElementById("lista");
    for(var i in listaTareas){
        var html = "<li> <input type = 'checkbox' " + (listaTareas[i].isDone?"checked":"") +  ">" + 
        listaTareas[i].nombre + "<span class='glyphicon  glyphicon-trash , icon , pull-right'>" + "</span>" +"</li>";
        lista.innerHTML += html;
    }
    var valorInput = document.getElementById("mensaje").value="";
    eliminarTarea();
}
// funcion para eliminar la tarea haciendo click al icono:
function eliminarTarea(){
    var eliminar = document.getElementsByClassName("icon");
    for(var c = 0; c < eliminar.length; c++){
        eliminar[c].onclick = function(){
        var lista = this.parentElement;
        lista.style.display = "none";
       }
    }
}


  